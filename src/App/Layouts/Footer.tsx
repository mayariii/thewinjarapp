import React from "react";
import { LinkButton } from "../../components/Button";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import * as styles from "../../styles";

const FooterStyle = `${styles.typographySecondary} ${styles.fontSizeExtraSmall} py-8 px-12`;
const FooterLinkStyle = `${styles.linkFooter}`;

export interface FooterProps {
  signOut: () => any;
}

export const Footer: React.FC<FooterProps> = ({ signOut }) => {
  return (
    <footer className={FooterStyle}>
      <LinkButton
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
