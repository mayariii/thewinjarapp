import React from "react";
import AddWinsPage from "./Pages/AddWinsPage";
import PageLayoutShell from "./Layouts/PageLayoutShell";
import { useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { DataStore } from "aws-amplify";
import Login from "./Pages/Login";

export function App() {
  const { user, signOut } = useAuthenticator();
  if (user) {
    return (
      <PageLayoutShell
        signOut={() => {
          signOut();
          DataStore.clear();
        }}
        user={user}
      >
        <AddWinsPage user={user} />
      </PageLayoutShell>
    );
  }
  return <Login />;
}

export default App;
