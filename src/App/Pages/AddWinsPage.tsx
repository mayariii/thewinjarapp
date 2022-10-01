import React, { useEffect, useState } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import * as styles from "../../styles";
import * as classes from "tailwindcss-classnames";
import TextFieldInput from "../../components/TextField";
import { PrimaryButton, SecondaryButton } from "../../components/Button";
import { API } from "aws-amplify";
import { listWins } from "../../graphql/queries";
import {
  createWin as createWinMutation,
  deleteWin as deleteWinMutation,
} from "../../graphql/mutations";
import { View } from "@aws-amplify/ui-react";

import { Box, Fade, IconButton, Modal, Snackbar, Tooltip } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { classnames } from "tailwindcss-classnames";

const MainStyle = classnames(
  classes.display("flex"),
  classes.flexDirection("flex-col"),
  classes.alignItems("items-center"),
  classes.gap("gap-4")
);
const ContainerStyle = classnames(
  classes.display("flex"),
  classes.flexDirection("flex-col"),
  classes.alignItems("items-center"),
  classes.gap("gap-12")
);
const HeaderStyle = `${styles.textHeading}`;

const WinListStyle = classnames(
  classes.display("flex"),
  classes.flexDirection("flex-col"),
  classes.alignItems("items-start"),
  classes.gap("gap-8")
);

const WinItemStyle = classnames(
  classes.display("flex"),
  classes.alignItems("items-start"),
  classes.justifyContent("justify-between")
);

const WinContentStyle = classnames(
  classes.display("flex"),
  classes.flexDirection("flex-col"),
  classes.width("w-64"),
  classes.width("md:w-96"),
  classes.whitespace("whitespace-normal"),
  classes.overflow("overflow-hidden"),
  classes.wordBreak("break-normal")
);

const WinTextStyle = `${styles.typographyPrimary}`;
const DateStyle = `${styles.typographySecondary} ${styles.fontSizeSmall}`;

// style config for MUI modal
const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "30vw",
  maxWidth: "80vw",
  maxHeight: "80vh",
  borderRadius: "8px",
  backgroundColor: "white",
  boxShadow: 24,
  p: 4,
  overflowX: "none",
  overflowY: "auto",
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export interface AddWinsPageProps {
  user: any;
}

export const AddWinsPage: React.FC<AddWinsPageProps> = ({ user }) => {
  const [wins, setWins] = useState<any[]>([]);
  const [isSuccessAlertVisible, setIsSuccessAlertVisible] =
    React.useState(false);
  const [alertText, setAlertText] = React.useState("");
  const [winText, setWinText] = useState("");
  const [isWinJarOpen, setIsWinJarOpen] = useState(false);

  useEffect(() => {
    fetchWins();
  }, []);

  async function fetchWins() {
    const apiData = await (API.graphql({
      query: listWins,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    }) as Promise<any>);
    const winsFromAPI = apiData.data.listWins.items;
    setWins(winsFromAPI);
  }

  async function createWin(event: {
    preventDefault: () => void;
    target: HTMLFormElement | undefined;
  }) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      win_text: form.get("winText"),
    };
    try {
      await API.graphql({
        query: createWinMutation,
        authMode: "AMAZON_COGNITO_USER_POOLS",
        variables: { input: data },
      });
      handleAddWinClick();
    } catch (err) {
      console.log(err);
    }
    fetchWins();
    event.target?.reset();
  }

  async function deleteWin({ id }: any) {
    const newWins = wins.filter((win) => win.id !== id);
    setWins(newWins);
    await API.graphql({
      query: deleteWinMutation,
      authMode: "AMAZON_COGNITO_USER_POOLS",
      variables: { input: { id } },
    });
  }

  const handleAddWinClick = () => {
    setAlertText("Successfully added to your win jar! 🎉");
    setIsSuccessAlertVisible(true);
    setWinText("");
  };

  const handleDeleteWinClick = () => {
    setAlertText("Win deleted");
    setIsSuccessAlertVisible(true);
  };

  const handleAlertClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setIsSuccessAlertVisible(false);
    setAlertText("");
  };

  return (
    <>
      <View className={MainStyle}>
        <View as="form" onSubmit={createWin} className={ContainerStyle}>
          <p className={HeaderStyle}>{`heeeey, great to see you! 👋`}</p>
          <TextFieldInput
            label={"tell me your win ✨"}
            isMultiline
            name={"winText"}
            value={winText}
            onChange={(event) => setWinText(event.target.value)}
          />
          <PrimaryButton
            label={"add to win jar"}
            endIcon={<AddOutlinedIcon />}
            type={"submit"}
            disabled={!winText}
          />
        </View>
        <View className={ContainerStyle}>
          {!wins.length ? (
            <Tooltip title="No wins yet">
              <span>
                <SecondaryButton
                  label={"open win jar"}
                  onClick={() => setIsWinJarOpen(true)}
                  disabled={!wins.length}
                  startIcon={<AutoAwesomeOutlinedIcon />}
                />
              </span>
            </Tooltip>
          ) : (
            <SecondaryButton
              label={"open win jar"}
              onClick={() => setIsWinJarOpen(true)}
              disabled={!wins.length}
              startIcon={<AutoAwesomeOutlinedIcon />}
            />
          )}
          <Modal
            open={isWinJarOpen}
            onClose={() => setIsWinJarOpen(false)}
            closeAfterTransition
            keepMounted
          >
            <Fade in={isWinJarOpen}>
              <Box sx={modalStyle}>
                <p className={HeaderStyle}>Your wins</p>
                <div className={WinListStyle}>
                  {!wins.length ? (
                    <p className={`${styles.typographySecondary}`}>
                      no wins yet
                    </p>
                  ) : (
                    wins
                      .map((win) => (
                        <div key={win.id} className={WinItemStyle}>
                          <div className={WinContentStyle}>
                            <span className={DateStyle}>
                              {new Date(win.createdAt).toLocaleDateString()}
                            </span>
                            <div className={WinTextStyle}>
                              <span>{win.win_text}</span>
                            </div>
                          </div>
                          <IconButton
                            aria-label="delete win"
                            size={"small"}
                            onClick={() => {
                              deleteWin(win);
                              handleDeleteWinClick();
                            }}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </div>
                      ))
                      .reverse()
                  )}
                </div>
              </Box>
            </Fade>
          </Modal>
          <Snackbar
            open={isSuccessAlertVisible}
            autoHideDuration={6000}
            onClose={handleAlertClose}
          >
            <Alert
              onClose={handleAlertClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              {alertText}
            </Alert>
          </Snackbar>
        </View>
      </View>
    </>
  );
};

AddWinsPage.displayName = "AddWinsPage";
export default AddWinsPage;
