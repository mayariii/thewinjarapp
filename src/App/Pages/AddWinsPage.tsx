import React, { useEffect, useState } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import * as styles from "../../styles";
import {
  alignItems,
  classnames,
  display,
  flexDirection,
  gap,
  justifyContent,
  width,
} from "tailwindcss-classnames";
import TextFieldInput from "../../components/TextField";
import { PrimaryButton } from "../../components/Button";
import { API } from "aws-amplify";
import { listWins } from "../../graphql/queries";
import {
  createWin as createWinMutation,
  deleteWin as deleteWinMutation,
} from "../../graphql/mutations";
import { View } from "@aws-amplify/ui-react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const ContainerStyle = classnames(
  display("flex"),
  flexDirection("flex-col"),
  alignItems("items-center"),
  gap("gap-12")
);
const HeaderStyle = `${styles.textHeading}`;

const WinListStyle = classnames(
  display("flex"),
  flexDirection("flex-col"),
  alignItems("items-center")
);

const WinStyle = classnames(
  display("flex"),
  flexDirection("flex-col"),
  alignItems("items-center"),
  justifyContent("justify-start"),
  width("w-96")
);

const DateStyle = `${styles.typographySecondary}`;

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

  const [isSuccessAlertVisible, setIsSuccessAlertVisible] =
    React.useState(false);
  const [alertText, setAlertText] = React.useState("");
  const [winText, setWinText] = useState("");

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
      <View>
        <View as="form" onSubmit={createWin}>
          <div className={ContainerStyle}>
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
          </div>
        </View>
        <View margin="3rem 0">
          <div className={WinListStyle}>
            {wins.length === 0 ? (
              <p className={`${styles.typographySecondary}`}>no wins yet</p>
            ) : (
              wins.map((win) => (
                <div className={WinStyle} key={win.id}>
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                    }}
                  >
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
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
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <>
                            <p>{win.win_text}</p>
                          </>
                        }
                        secondary={
                          <>
                            <p className={DateStyle}>
                              {new Date(win.createdAt).toLocaleDateString()}
                            </p>
                          </>
                        }
                      />
                    </ListItem>
                  </List>
                </div>
              ))
            )}
          </div>
        </View>
      </View>
    </>
  );
};

AddWinsPage.displayName = "AddWinsPage";
export default AddWinsPage;
