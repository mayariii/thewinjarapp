import React from "react";
import { PlusIcon } from "@heroicons/react/solid";
import * as styles from "../styles";

export type ButtonVariant = "primary";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: ButtonVariant;
}

/**
 * Primary UI component for user interaction
 */

export const Button = ({ label, variant, ...props }: ButtonProps) => {
  const variantStyle =
    variant === "primary" ? `${styles.buttonPrimary}` : `${styles.buttonBase}`;

  return (
    <button type="button" className={variantStyle} {...props}>
      {label}
      <PlusIcon className={styles.iconButton} aria-hidden="true" />
    </button>
  );
};
