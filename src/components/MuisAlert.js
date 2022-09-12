import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
/* import { MultiSelectUnstyled } from '@mui/base';
 */
function PositionedSnackbar() {
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Button
        onClick={handleClick({
          vertical: "top",
          horizontal: "center",
        })}
      >
        Top-Center
      </Button>
      <Button
        onClick={handleClick({
          vertical: "top",
          horizontal: "right",
        })}
      >
        Top-Right
      </Button>
      <Button
        onClick={handleClick({
          vertical: "bottom",
          horizontal: "right",
        })}
      >
        Bottom-Right
      </Button>
      <Button
        onClick={handleClick({
          vertical: "bottom",
          horizontal: "center",
        })}
      >
        Bottom-Center
      </Button>
      <Button
        onClick={handleClick({
          vertical: "bottom",
          horizontal: "left",
        })}
      >
        Bottom-Left
      </Button>
      <Button
        onClick={handleClick({
          vertical: "top",
          horizontal: "left",
        })}
      >
        Top-Left
      </Button>
    </React.Fragment>
  );

  return (
    <div>
      {" "}
      <h1>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, molestias
        rerum? Debitis sequi placeat doloribus dolorum minus labore, quaerat
        consequuntur rerum odio reiciendis repellendus laborum libero
        reprehenderit est praesentium, unde sed. Similique rem dolor assumenda
        obcaecati quis. Possimus ipsam velit deleniti assumenda, repellendus
        perferendis ratione officiis eaque dolor cum inventore iusto! Alias
        possimus sit, rerum necessitatibus ullam fugiat reiciendis? Dolorem!
      </h1>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      />
    </div>
  );
}

export default PositionedSnackbar;
