import React from "react";
import styled from "styled-components";
import Button from "../Button";
import TicketHossLogo from "../../images/ticketHossLogo.svg";
import TextField from "../TextField";
import TrackImage from "./TrackImage";

const Row = styled.div`
  margin-left: -15px;
  margin-right: -15px;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: normal;
  justify-content: flex-start;
  width: 100%;

  > * {
    margin-top: 15px;
  }
`;

const Column = styled.div`
  box-sizing: border-box;
  min-height: 1px;
  position: relative;
  padding-left: 15px;
  padding-right: 15px;
  flex: 1 0 0px;
  max-width: 100%;
  margin-left: 0%;
  right: auto;
  left: auto;

  div {
    display: flex;
    flex-direction: column;
  }
`;

const DownloadButtonContainer = {
  maxWidth: 375,
  minWidth: 325,
};

const TitleTrack = {
  color: "#FA4616",
  "text-align": "left",
  "line-height": "32px",
  "margin-right": "0",
  "margin-bottom": "5px",
  "font-weight": 700,
  fontFamily: "Barlow Condensed",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "3vmin",
  lineHeight: "32px",
};

const Title2 = {
  color: "white",
  "line-height": "36px",
  "margin-right": "0",
  "margin-bottom": "15px",
  "align-self": "auto",
  "font-family": "Barlow Condensed",
  "font-size": "4.5vmin",
  "font-stretch": "normal",
  "font-style": "Bold",
  "font-weight": 700,
  "text-decoration": "none",
};

const Title3 = {
  fontFamily: "Barlow Condensed",
  fontSize: "3vmin",
  fontWeight: 700,
  letterSpacing: 0,
  color: "white",
  textAlign: "left",
  marginTop: 10,
};

const ImageContainer = {
  alignContent: "end",
  justifyContent: "end",
  display: "flex",
  maxWidth: "365px",
  maxHeight: "205px",
  margin: "0 auto",
};

const SearchContainer = styled.div`
  margin-top: 30px;
  width: 70vw;
  margin: auto;
`;

const GroupTitle = styled.span`
  width: 100%;
  border-bottom: 1px solid white;
  font-size: 2.2vmin;
  color: white;
  font-weight: 700;
  padding-bottom: 8px;
  margin-inline: auto;
`;

const TrackImageContainer = styled.div`
  width: 30%;
  padding: 10px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.01);
  }
`;

const TrackList = styled.div`
  width: 90%;
  padding: 8px;
  margin-inline: auto;
`;

export default function eTrackPage() {
  const tracks = [1, 2, 3, 4, 5, 6];
  return (
    <Row>
      <Column>
        <div>
          <span style={TitleTrack}>Tracks</span>
          <span style={Title2}>Need Tickets?</span>
          <div style={DownloadButtonContainer}>
            <Button text="To Buy Tickets Download the App" />
          </div>
          <span style={Title3}>Your Phone is Your Ticket!</span>
        </div>
      </Column>
      <Column>
        <div style={ImageContainer}>
          <img src={TicketHossLogo} alt="Tickethoss Logo" />
        </div>
      </Column>
      <Column>
        <SearchContainer>
          <Row>
            <TextField
              type="text"
              placeHolder="Search Tracks"
              style={{ width: "50%" }}
            />
            <Button text="Search" style={{ width: 145 }} />
          </Row>
        </SearchContainer>
      </Column>
      <TrackList>
        <Row>
          <GroupTitle>A</GroupTitle>

          {tracks.map((_, index) => {
            return (
              <TrackImageContainer key={index}>
                <TrackImage />
              </TrackImageContainer>
            );
          })}
        </Row>
      </TrackList>
    </Row>
  );
}
