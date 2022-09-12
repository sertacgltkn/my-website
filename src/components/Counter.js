import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import SaveIcon from "@mui/icons-material/Save";
import Stack from "@mui/material/Stack";

function Counter() {
  const [number, setNumber] = useState(0);
  const BootstrapButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#0063cc",
    borderColor: "#0063cc",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  });

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));
  return (
    <div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <h4> Number : {number} </h4>

      {/*  <button onClick={() => setNumber(number + 1)}>Arttır</button>
       <button onClick={() => setNumber(number - 1)}>Azalt</button>
       <button onClick={() => setNumber(number * 5)}> 5x </button>
       <button onClick={() => setNumber(0)}>RESET</button> */}
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" color="error" onClick={() => setNumber(0)}>
          RESET
        </Button>
        <Button
          variant="outlined"
          loading
          loadingPosition="start"
          startIcon={<SaveIcon />}
          onClick={() => setNumber(number * 5)}
        >
          {" "}
          5x
        </Button>

        <ColorButton variant="contained" onClick={() => setNumber(number + 1)}>
          Arttır
        </ColorButton>
        <BootstrapButton
          size="large"
          variant="contained"
          disableRipple
          onClick={() => setNumber(number - 1)}
        >
          Azalt
        </BootstrapButton>
      </Stack>
    </div>
  );
}

export default Counter;
