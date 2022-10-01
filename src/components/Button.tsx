import React from "react";
import { Button, styled } from "@mui/material";
import {
  primaryAccentHex,
  primaryAccentHoverHex,
  secondaryHex,
  secondaryHoverHex,
} from "../styles";

// TODO: add support for button variants extending a base button style to reduce code duplicationn

interface ButtonProps {
  name?: string;
  label: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
}

const Primary = styled(Button)({
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

export const PrimaryButton: React.FC<ButtonProps> = ({
  name,
  label,
  startIcon,
  endIcon,
  type,
  onClick,
}: ButtonProps) => {
  return (
    <Primary
      name={name}
      variant="contained"
      size="large"
      startIcon={startIcon}
      endIcon={endIcon}
      type={type}
      onClick={onClick}
    >
      {label}
    </Primary>
  );
};

const Secondary = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  color: secondaryHex,
  "&:hover": {
    backgroundColor: secondaryHoverHex,
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: secondaryHoverHex,
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export const SecondaryButton: React.FC<ButtonProps> = ({
  name,
  label,
  startIcon,
  endIcon,
  type,
  onClick,
}: ButtonProps) => {
  return (
    <Secondary
      name={name}
      variant="text"
      size="large"
      startIcon={startIcon}
      endIcon={endIcon}
      type={type}
      onClick={onClick}
    >
      {label}
    </Secondary>
  );
};
