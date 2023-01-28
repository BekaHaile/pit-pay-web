import * as React from "react";
import Footer from "../components/Footer.js";
import TrackPage from "../components/trackHome/TrackPage.js";
import "../style/styles.css";
import styled from "styled-components";

const BodyContainer = styled.div`
  padding: 40px 10%;
  display: flex;
  font-style: normal;
  flex-wrap: wrap;
`;

const IndexPage = () => {
  return (
    <>
      <BodyContainer>
        <TrackPage />
        </BodyContainer>
        <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
