import React from "react";
import {
  classnames,
  display,
  flexDirection,
  height,
  justifyContent,
} from "tailwindcss-classnames";
import Header from "./Header.";
import Footer from "./Footer.";

const ContainerStyle = classnames(
  display("flex"),
  flexDirection("flex-col"),
  justifyContent("justify-between"),
  height("h-screen")
);

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
      <Header />
      {children}
      <Footer signOut={signOut} />
    </div>
  );
};

PageLayoutShell.displayName = "PageLayoutShell";
export default PageLayoutShell;
