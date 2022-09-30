import React, { useEffect, useState } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { textHeading, typographySecondary } from "../../styles";
import {
  alignItems,
  classnames,
  display,
  flexDirection,
  gap,
} from "tailwindcss-classnames";
import TextFieldInput from "../../components/TextField.";
import { ButtonComponent } from "../../components/Button";
import { API } from "aws-amplify";
import { listWins } from "../../graphql/queries";
import {
  createWin as createWinMutation,
  deleteWin as deleteWinMutation,
} from "../../graphql/mutations";
import { Button, Flex, View } from "@aws-amplify/ui-react";

const ContainerStyle = classnames(
  display("flex"),
  flexDirection("flex-col"),
  alignItems("items-center"),
  gap("gap-12")
);
const HeaderStyle = `${textHeading}`;

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

  console.log(wins);

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

  async function deleteWin({ id, _version }: any) {
    const newWins = wins.filter((win) => win.id !== id);
    setWins(newWins);
    await API.graphql({
      query: deleteWinMutation,
      authMode: "AMAZON_COGNITO_USER_POOLS",
      variables: { input: { id, _version } },
    });
  }
  return (
    <>
      <View>
        <View as="form" onSubmit={createWin}>
          <div className={ContainerStyle}>
            <p className={HeaderStyle}>heeeey, great to see you! 👋</p>
            <TextFieldInput
              label={"tell me your win ✨"}
              isMultiline
              name={"winText"}
            />
            <ButtonComponent
              label={"add to win jar"}
              endIcon={<AddOutlinedIcon />}
              type={"submit"}
            />
          </div>
        </View>
        <View margin="3rem 0">
          {wins.length === 0 ? (
            <p className={`${typographySecondary}`}>no wins yet</p>
          ) : (
            wins.map((win) => (
              <Flex
                key={win.id}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <p>{win.id}</p>
                <p>{win.win_text}</p>
                <p>{new Date(win.createdAt).toLocaleDateString("en-US")}</p>
                <Button variation="link" onClick={() => deleteWin(win)}>
                  Delete win
                </Button>
              </Flex>
            ))
          )}
        </View>
      </View>
    </>
  );
};

AddWinsPage.displayName = "AddWinsPage";
export default AddWinsPage;
