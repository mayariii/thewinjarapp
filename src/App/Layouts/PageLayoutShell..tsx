import React from "react";
import {
  classnames,
  display,
  flexDirection,
  height,
  justifyContent,
} from "tailwindcss-classnames";
import {
  fontSizeExtraSmall,
  fontSizeXLarge,
  fontWeightMedium,
  linkFooter,
  typographyPrimaryAccent,
  typographySecondary,
} from "../../styles";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import { Button } from "@aws-amplify/ui-react";

const HeaderStyle = `${typographyPrimaryAccent} ${fontSizeXLarge} ${fontWeightMedium} px-12 py-12`;
const IconStyle = `ml-1`;
const ContainerStyle = classnames(
  display("flex"),
  flexDirection("flex-col"),
  justifyContent("justify-between"),
  height("h-screen")
);

const FooterStyle = `${typographySecondary} ${fontSizeExtraSmall} py-12 px-12`;
const FooterLinkStyle = `${linkFooter}`;

export interface PageLayoutShellProps {
  children: React.ReactNode;
  user: any;
  signOut: () => any;
}

export const PageLayoutShell: React.FC<PageLayoutShellProps> = ({
  user,
  signOut,
  children,
}) => {
  return (
    <div className={ContainerStyle}>
      <header className={HeaderStyle}>
        the win jar
        <SentimentVerySatisfiedOutlinedIcon className={IconStyle} />
      </header>
      {children}
      <footer className={FooterStyle}>
        <Button onClick={signOut}>sign out</Button>
        <a
          href="https://www.nicoleis.xyz"
          target="_blank"
          rel="noreferrer"
          className={FooterLinkStyle}
        >
          by nicoleis.xyz
        </a>
      </footer>
    </div>
  );
};

PageLayoutShell.displayName = "PageLayoutShell";
export default PageLayoutShell;
