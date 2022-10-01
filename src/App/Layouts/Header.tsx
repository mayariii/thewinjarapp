import React from "react";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import * as styles from "../../styles";

const HeaderStyle = `${styles.typographyPrimaryAccent} ${styles.fontSizeXLarge} ${styles.fontWeightMedium} px-12 py-12`;
const IconStyle = `ml-1`;

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={HeaderStyle}>
      the win jar
      <SentimentVerySatisfiedOutlinedIcon className={IconStyle} />
    </header>
  );
};

Header.displayName = "Header";
export default Header;
