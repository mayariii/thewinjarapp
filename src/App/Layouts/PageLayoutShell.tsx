import React from "react";
import * as classes from "tailwindcss-classnames";
import Header from "./Header";
import Footer from "./Footer";
import { classnames } from "tailwindcss-classnames";

// main page layout that can be reused across app pages

const ContainerStyle = classnames(
  classes.display("flex"),
  classes.flexDirection("flex-col"),
  classes.justifyContent("justify-between"),
  classes.height("h-screen")
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
      <main>{children}</main>
      <Footer signOut={signOut} />
    </div>
  );
};

PageLayoutShell.displayName = "PageLayoutShell";
export default PageLayoutShell;
