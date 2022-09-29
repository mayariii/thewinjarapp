import React from "react";
import { styled, TextField } from "@mui/material";
import {
  primaryAccentHex,
  primaryAccentHoverHex,
  secondaryHex,
} from "../styles";

export interface TextFieldProps {
  label: string;
  isMultiline?: boolean;
}

const MUITextField = styled(TextField)({
  "& label.Mui-focused": {
    color: primaryAccentHex,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: primaryAccentHex,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: primaryAccentHex,
    },
    "&:hover fieldset": {
      borderColor: primaryAccentHoverHex,
    },
    "&.Mui-focused fieldset": {
      borderColor: secondaryHex,
    },
  },
});

export const TextFieldInput: React.FC<TextFieldProps> = ({
  label,
  isMultiline,
}) => {
  return (
    <MUITextField label={label} variant="outlined" multiline={isMultiline} />
  );
};

TextFieldInput.displayName = "TextField";
export default TextFieldInput;
