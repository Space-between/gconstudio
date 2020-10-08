import React, { useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      //   width: "437px",
    },
  },
}));




export default function BasicTextFields() {
  const [email, setEmail] = useState("");
  const classes = useStyles();

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField style={{width:"437px"}}
          id="outlined-basic"
          label="이메일(아이디)를 입력하세요."
          variant="outlined"
        />
        <p>이메일 양식을 확인하세요</p>
      </form>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField style={{width:"437px"}}
          id="outlined-basic"
          label="비밀번호를 입력하세요."
          variant="outlined"
        />
        <p>
          비밀번호는 8자리 이상, 16자리 이하이고 영문, 숫자, 특수문자가 각 1자리
          이상 포함되어야 합니다
        </p>
      </form>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField  style={{width:"437px"}}
          id="outlined-basic"
          label="회사명을 입력하세요."
          variant="outlined"
        />
        <p>이메일 양식을 확인하세요</p>
      </form>
    </>
  );
}
