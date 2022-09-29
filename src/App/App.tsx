import React from "react";
import "../App.css";
import AddWinsPage from "./Pages/AddWinsPage.";
import PageLayoutShell from "./Layouts/PageLayoutShell.";
import { withAuthenticator, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App({ signOut, user }: any) {
  return (
    <div className="App">
      <PageLayoutShell signOut={signOut} user={user}>
        <AddWinsPage user={user} />
      </PageLayoutShell>
    </div>
  );
}

export default withAuthenticator(App);
