import React from "react";
import Alert from "@mui/material/Alert";

function Alerty() {
  return (
    <div>
      <Alert onClose={() => {}}>İlk Alert</Alert>
      <Alert>This is a success alert — check it out!</Alert>
    </div>
  );
}

export default Alerty;
