import React from "react";
import "../App.css";
import AddWinsPage from "./Pages/AddWinsPage.";
import PageLayoutShell from "./Layouts/PageLayoutShell.";

function App() {
  return (
    <div className="App">
      <PageLayoutShell>
        <AddWinsPage />
      </PageLayoutShell>
    </div>
  );
}

export default App;
