import React from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { textHeading } from "../../styles";
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
  return (
    <div className={ContainerStyle}>
      <p className={HeaderStyle}>heeeey, great to see you! 👋</p>
      <TextFieldInput label={"tell me your win ✨"} isMultiline />
      <ButtonComponent label={"add to win jar"} endIcon={<AddOutlinedIcon />} />
    </div>
  );
};

AddWinsPage.displayName = "AddWinsPage";
export default AddWinsPage;
