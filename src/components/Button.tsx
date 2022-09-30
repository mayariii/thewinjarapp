import React from "react";
import { Button, styled } from "@mui/material";
import { primaryAccentHex, primaryAccentHoverHex } from "../styles";

// TODO: add support for button variants extending a base button style
// export type ButtonVariant = "primary";

interface ButtonProps {
  name?: string;
  label: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
  // variant?: ButtonVariant;
}

const PrimaryButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  border: "1px solid",
  borderRadius: "6px",
  backgroundColor: primaryAccentHex,
  "&:hover": {
    backgroundColor: primaryAccentHoverHex,
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: primaryAccentHex,
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export const ButtonComponent: React.FC<ButtonProps> = ({
  name,
  label,
  startIcon,
  endIcon,
  type,
}: ButtonProps) => {
  return (
    <PrimaryButton
      name={name}
      variant="contained"
      color="success"
      size="large"
      startIcon={startIcon}
      endIcon={endIcon}
      type={type}
    >
      {label}
    </PrimaryButton>
  );
};
