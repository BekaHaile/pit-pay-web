import React from "react";
import styled from "styled-components";

// const ButtonStyle = {
//   "background-color": "#FA4616",
//   minHeight: "54px",
//   display: "flex",
//   "justify-content": "center",
//   "align-items": "center",
//   padding: "10px",
//   "flex-shrink": "0",
//   "border-radius": "8px",
//   "border-color": "transparent",
//   position: "relative",
//   "box-shadow": "0px 6px 2px -4px rgba(14, 14, 44, 0.10000000149011612) ",
//   overflow: "hidden",
//   color: "white",
//   fontWeight: 700,
//   fontSize: "2.5vmin",
//   lineHeight: "34px",
// };

const ButtonWrapper = styled.button.attrs((props) => ({
  style: props.inputStyle,
}))`
  background-color: #fa4616;
  min-height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  border-color: transparent;
  position: relative;
  box-shadow: 0px 6px 2px -4px rgba(14, 14, 44, 0.10000000149011612);
  overflow: hidden;
  color: white;
  font-weight: 700;
  font-size: 2.5vmin;
  line-height: 34px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))
      rgb(250, 70, 22);
  }
`;

export default function Button(props) {
  const { text, style } = props;
  return <ButtonWrapper inputStyle={style}>{text}</ButtonWrapper>;
}
