import React from "react";
import styled from "styled-components";
import FooterImage from "../images/footer_background.svg";
import TickethossOrange from "../images/tickethoss_orange.svg";
import AndroidImage from "../images/google_pay.svg";
import AppleImage from "../images/app_store.svg";
import Facebook from "../images/fb.svg";
import Instagram from "../images/ig.svg";
import Twitter from "../images/tw.svg";
import Linkedin from "../images/linkedin.svg";

const FooterMainContainer = styled.div`
  position: sticky;
  bottom: 0px;
  background-color: #000033;

  :before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      177.91deg,
      rgba(0, 0, 51, 0) 1.76%,
      #000033 10%
    );
    transform: translate3d(0px, -31px, 0) scale(0.92);
    filter: blur(48px);
    opacity: var(0.7);
    transition: opacity 0.3s;
    border-radius: inherit;
  }

  /* 
* Prevents issues when the parent creates a 
* stacking context. (For example, using the transform
* property )
*/
  ::after {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: inherit;
    border-radius: inherit;
  }
`;

const FooterContentContainer = styled.div`
  padding: 40px 10% 20px;
  z-index: 2;
  position: relative;
  background-color: rgba(0, 0, 51, 0.2);

  @media (max-width: 768px) {
    padding: 40px 0% 20px;
  }
`;

const FooterBackground = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  object-fit: cover;
`;

const FirstRowWrapper = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(217, 217, 217, 0.5);
  justify-content: space-evenly;
`;

const SecondRowWrapper = styled.div`
  padding: "10px 0px 0px";
`;

const TickethossOrangeContainer = styled.img`
  max-width: 106px;
  max-height: 105px;
  min-width: 65px;
  min-height: 65px;
  object-fit: fill;
  width: 20%;

  @media (max-width: 768px) {
    width: 100%;
    margin-inline: auto;
  }
`;

const FooterText = styled.span`
  width: 25%;
  font-size: 1.6em;
  color: white;
  font-weight: 700;
  padding-left: 10%;
  padding-top: 40px;
  white-space: nowrap;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const AppContainer = styled.div`
  width: 45%;
  margin-left: 7%;
  padding-top: 25px;
  justify-content: end;
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    margin-inline: auto;
    justify-content: center;
  }
`;

const AppLink = styled.a`
  padding-inline: 10px;
`;

const AppImage = styled.img`
  width: 100%;
  max-width: 202px;
  max-height: 50px;
  min-width: 145px;
  min-height: 40px;
  padding-inline: 2%;
  object-fit: contain;
`;

const TextContainer = styled.div`
  width: 20%;
  min-width: 250px;
  font-size: 1em;
  color: white;
  font-family: Roboto;
  letter-spacing: 0px;
  text-align: left;
  font-weight: 500;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const LinksContainer = styled.div`
  width: 52%;
  font-size: 1em;
  color: white;
  font-family: Roboto;
  letter-spacing: 0px;
  text-align: left;
  font-weight: 500;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;

    > * {
      margin-top: 15px;
    }
  }
`;

const FooterLink = styled.a`
  color: #fa4616;
  padding-inline: 5px;
  white-space: nowrap;

  @media (max-width: 768px) {
    width: 34%;
    text-align: end;
  }
`;

const SocialsContainer = styled.div`
  width: 20%;
  min-width: 150px;
  display: flex;
  justify-content: end;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  min-width: 30px;
  min-height: 30px;
  padding-inline: 5px;

  @media (max-width: 768px) {
    padding-inline: 5%;
  }
`;

export default function Footer() {
  return (
    <FooterMainContainer>
      <FooterContentContainer>
        <FirstRowWrapper className="Row">
          <TickethossOrangeContainer
            src={TickethossOrange}
            alt="Tickethoss Orange"
          />
          <FooterText>Download Ticket Hoss!</FooterText>
          <AppContainer>
            <AppLink
              href="https://apps.apple.com/us/app/pit-pay/id1605673660?ls=1"
              target="_blank"
            >
              <AppImage src={AppleImage} alt="App Store" />
            </AppLink>
            <AppLink
              href="https://play.google.com/store/apps/details?id=com.tickethoss.tickethoss"
              target="_blank"
            >
              <AppImage src={AndroidImage} alt="Goggle Play" />
            </AppLink>
          </AppContainer>
        </FirstRowWrapper>
        <SecondRowWrapper className="Row">
          <TextContainer>
            <p style={{ paddingRight: 15, whiteSpace: "nowrap" }}>
              © Pit Pay Inc. All Rights Reserved.
            </p>
          </TextContainer>
          <LinksContainer>
            <FooterLink href="https://tickethoss.com/terms">
              Terms of Service
            </FooterLink>
            <FooterLink href="https://tickethoss.com/privacy">
              Privacy Policy
            </FooterLink>
            <FooterLink href="https://tickethoss.com/refunds">
              Refund Policy
            </FooterLink>
            <FooterLink href="https://tickethoss.com/privacy">
              Ticket License
            </FooterLink>
          </LinksContainer>
          <SocialsContainer>
            <SocialLink
              href="https://www.facebook.com/TicketHoss/"
              target="_blank"
            >
              <img src={Facebook} alt="App Store" />
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/tickethoss/"
              target="_blank"
            >
              <img src={Instagram} alt="Instagram" />
            </SocialLink>
            <SocialLink href="https://twitter.com/tickethoss" target="_blank">
              <img src={Twitter} alt="Twitter" />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/company/pitpay/about/"
              target="_blank"
            >
              <img src={Linkedin} alt="Linkedin" />
            </SocialLink>
          </SocialsContainer>
        </SecondRowWrapper>
      </FooterContentContainer>
      <FooterBackground src={FooterImage} alt="Footer Image" />
    </FooterMainContainer>
  );
}
