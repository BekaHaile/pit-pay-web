import React from "react";
import styled from "styled-components";
import LocationSvg from "../../images/locationIcon.svg";

//tracklogo image
//https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ad3b0cab-c04e-402e-b0ef-a2fe03f71aff/c02482fa-48b0-4deb-bc58-1cebda7f46b1?org_if_sml=15432
//Location icon
// http://cdn.mcauto-images-production.sendgrid.net/909720bf791384b7/cc72501b-615c-4090-b88b-acf7ce22bed1/29x42.png

const TrackMainImageContainer = styled("div")({
  "border-color": "transparent",
  position: "relative",
});

const Image = styled.img`
  object-fit: contain;
  border-radius: 8px;
  max-width: 425px;
  max-height: 220px;
  width: 100%;
`;

const TrackContent = styled("div")({
  width: "295px",
  display: "flex",
  "flex-direction": "column",
  "align-items": "flex-start",
  "flex-grow": "1",
  "flex-shrink": "0",
  "border-color": "transparent",
  position: "absolute",
  bottom: 8,
  left: 16,
});

const TrackName = styled("span")({
  color: "white",
  height: "auto",
  "text-align": "left",
  "line-height": "32px",
  "margin-right": "0",
  "margin-bottom": "0px",
  "align-self": "stretch",
  fontSize: "2.2vmin",
});

const Support = styled("div")({
  display: "flex",
  "align-items": "center",
  "flex-shrink": "0",
  "align-self": "stretch",
  "border-color": "transparent",
  position: "relative",
});

const LocationIcon = styled("img")({
  width: "20px",
  height: "14px",
  "margin-right": "4px",
});

const LocationText = styled("span")({
  color: "white",
  height: "auto",
  "text-align": "left",
  "line-height": "20px",
  "margin-right": "0",
  "margin-bottom": "0",
  "align-self": "auto",
  "flex-grow": 1,
  fontSize: "1.5vmin",
});

const TrackLogo = styled("img")({
  width: "48px",
  height: "40px",
  "border-color": "transparent",
  position: "absolute",
  top: 8,
  left: 8,
});

export default function TrackImage() {
  return (
    <TrackMainImageContainer>
      <Image
        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ad3b0cab-c04e-402e-b0ef-a2fe03f71aff/dbfb7e89-6a43-4e6e-a2e5-d292b8371cd2?org_if_sml=1102569"
        alt="large1872"
      />
      <TrackContent>
        <TrackName>
          <span>Eldora Speedway</span>
        </TrackName>
        <Support>
          <LocationIcon src={LocationSvg} alt="Location Icon" />
          <LocationText>
            <span>ROSSBURG, OH</span>
          </LocationText>
        </Support>
      </TrackContent>
      <TrackLogo
        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ad3b0cab-c04e-402e-b0ef-a2fe03f71aff/c02482fa-48b0-4deb-bc58-1cebda7f46b1?org_if_sml=15432"
        alt="large1872"
      />
    </TrackMainImageContainer>
    // <Image
    //   src="http://cdn.mcauto-images-production.sendgrid.net/909720bf791384b7/e25612e6-89f2-4808-b331-94de9854571d/327x200.png"
    //   alt="Track Image"
    // />
  );
}
