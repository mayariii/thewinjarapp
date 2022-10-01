import React, { useEffect, useState } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { textHeading, typographySecondary } from "../../styles";
import {
  alignItems,
  classnames,
  display,
  flexDirection,
  gap,
  justifyContent,
  width,
} from "tailwindcss-classnames";
import TextFieldInput from "../../components/TextField.";
import { PrimaryButton } from "../../components/Button";
import { API } from "aws-amplify";
import { listWins } from "../../graphql/queries";
import {
  createWin as createWinMutation,
  deleteWin as deleteWinMutation,
} from "../../graphql/mutations";
import { View } from "@aws-amplify/ui-react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
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
const HeaderStyle = `${textHeading}`;

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

const DateStyle = `${typographySecondary}`;

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
    await API.graphql({
      query: createWinMutation,
      authMode: "AMAZON_COGNITO_USER_POOLS",
      variables: { input: data },
    });
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
            />
            <PrimaryButton
              label={"add to win jar"}
              endIcon={<AddOutlinedIcon />}
              type={"submit"}
            />
          </div>
        </View>
        <View margin="3rem 0">
          <div className={WinListStyle}>
            {wins.length === 0 ? (
              <p className={`${typographySecondary}`}>no wins yet</p>
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
                          onClick={() => deleteWin(win)}
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
                              {new Date(win.createdAt).toLocaleDateString(
                                "en-US"
                              )}
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
