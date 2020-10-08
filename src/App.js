import React, { Component } from "react";
import TextFields from "./TextFields";
import Select from "./Select";
import Pickers from "./Pickers";
import Radio from "./Radio";
import Button from "./Button";
import LanguageSelect from "./LanguageSelect";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #dbdbdb;
  width: 800px;
  height: 100%;
`;

export default class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1 style={{marginLeft: "10px"}}>Gconstudio 계정 만들기</h1>
          <p style={{marginLeft: "10px"}}>하나의 계정으로 모든 지콘스튜디오 서비스를 이용할 수 있습니다.</p>
          <Radio />
          <p style={{marginLeft: "10px"}}>기본정보 입력</p>
          <TextFields />
          <Select />
          <Pickers />
          <Button  />
        </Container>
        <LanguageSelect />
      </div>
    );
  }
}
