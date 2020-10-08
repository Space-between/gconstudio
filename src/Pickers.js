import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({
  container: {},
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickers() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <InputLabel id="demo-simple-select-outlined-label" style={{color: "black", marginLeft: "10px" }}>
        설립일을 선택하세요.
      </InputLabel>
      <TextField
        id="date"
        type="date"
        style={{ width: "437px", paddingTop: "10px" }}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <p style={{marginLeft: "10px"}}>필수 입력사항입니다.</p>
    </form>
  );
}
