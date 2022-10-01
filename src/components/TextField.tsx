import React from "react";
import { styled, TextField } from "@mui/material";
import * as styles from "../styles";

export interface TextFieldProps {
  label: string;
  name: string;
  isMultiline?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
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
  value,
  onChange,
}) => {
  return (
    <MUITextField
      label={label}
      variant="outlined"
      multiline={isMultiline}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

TextFieldInput.displayName = "TextField";
export default TextFieldInput;
