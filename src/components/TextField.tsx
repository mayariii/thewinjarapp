import React from "react";
import { styled, TextField } from "@mui/material";
import * as styles from "../styles";

export interface TextFieldProps {
  label: string;
  name: string;
  isMultiline?: boolean;
}

const MUITextField = styled(TextField)({
  "& label.Mui-focused": {
    color: styles.primaryAccentHex,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: styles.primaryAccentHex,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: styles.primaryAccentHex,
    },
    "&:hover fieldset": {
      borderColor: styles.primaryAccentHoverHex,
    },
    "&.Mui-focused fieldset": {
      borderColor: styles.secondaryHex,
    },
  },
});

export const TextFieldInput: React.FC<TextFieldProps> = ({
  name,
  label,
  isMultiline,
}) => {
  return (
    <MUITextField
      label={label}
      variant="outlined"
      multiline={isMultiline}
      name={name}
    />
  );
};

TextFieldInput.displayName = "TextField";
export default TextFieldInput;
