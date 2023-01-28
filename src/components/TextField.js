import React from "react";
import styled from "styled-components";

const InputText = styled.input.attrs((props) => ({
  style: props.inputStyle,
}))`
  outline: 0;
  line-height: normal;
  border-radius: 8px;
  box-sizing: border-box;
  background: white;
  word-break: normal;
  overflow-wrap: break-word;
  word-wrap: break-word;
  appearance: none;
  font-size: 2.2vmin;
  font-weight: 700;
  width: 100%;
  z-index: 2;
  margin: 0;
  color: "white";
  min-height: 54px;    
  border: 2px solid transparent;
  padding: 0 16px;

  &:focus {
    box-shadow: 0 0 0 0 #fa4616;
    border: 2px solid #fa4616;
  }
`;

export default function TextField(props) {
  const { type, placeHolder, inputStyle } = props;
  return (
    <InputText type={type} placeholder={placeHolder} inputStyle={inputStyle} />
  );
}
