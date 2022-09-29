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

export interface AddWinsPageProps {}

const ContainerStyle = classnames(
  display("flex"),
  flexDirection("flex-col"),
  alignItems("items-center"),
  gap("gap-12")
);
const HeaderStyle = `${textHeading}`;

export const AddWinsPage: React.FC<AddWinsPageProps> = () => {
  return (
    <div className={ContainerStyle}>
      <p className={HeaderStyle}>welcome to your win jar!</p>
      <TextFieldInput label={"tell me your win ✨"} isMultiline />
      <ButtonComponent label={"add to win jar"} endIcon={<AddOutlinedIcon />} />
    </div>
  );
};

AddWinsPage.displayName = "AddWinsPage";
export default AddWinsPage;
