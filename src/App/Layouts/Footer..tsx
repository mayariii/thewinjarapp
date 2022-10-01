import React from "react";
import { SecondaryButton } from "../../components/Button";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import {
  fontSizeExtraSmall,
  linkFooter,
  typographySecondary,
} from "../../styles";

const FooterStyle = `${typographySecondary} ${fontSizeExtraSmall} py-8 px-12`;
const FooterLinkStyle = `${linkFooter}`;

export interface FooterProps {
  signOut: () => any;
}

export const Footer: React.FC<FooterProps> = ({ signOut }) => {
  return (
    <footer className={FooterStyle}>
      <SecondaryButton
        label={"sign out"}
        onClick={signOut}
        endIcon={<LogoutOutlinedIcon />}
      />
      <a
        href="https://www.nicoleis.xyz"
        target="_blank"
        rel="noreferrer"
        className={FooterLinkStyle}
      >
        <strong>the win jar</strong> by nicoleis.xyz
      </a>
    </footer>
  );
};

Footer.displayName = "Footer";
export default Footer;
