import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { PrimaryButton, LinkButton } from "../../components/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export default {
  title: "2-Components",
};

export const Buttons = () => (
  <div className={"flex flex-col items-start gap-8"}>
    <PrimaryButton
      label={"add to win jar"}
      endIcon={<AddOutlinedIcon />}
      type={"submit"}
    />
    <LinkButton label={"sign out"} endIcon={<LogoutOutlinedIcon />} />
    <IconButton aria-label="delete win" size={"small"}>
      <DeleteIcon fontSize="small" />
    </IconButton>
  </div>
);
