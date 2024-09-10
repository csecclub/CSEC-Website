import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TypeIt from "typeit-react";
import headerImg from "../assets/img/michi.png";
import "./styles/Banner.css";

export function Banner() {
  return (
    /* Banner section */
    <section className="banner" id="home">
      {/* Main container */}
      <Container>
        {/* Row for both banner and image */}
        <Row className="align-items-center">
          {/* Banner column */}
          <Col xs={12} md={6} xl={7}>
            {/* Welcome tag */}
            <span className="tagline">Welcome to CSEC</span>

            {/* Main banner header */}
            <TypeIt element={"h1"} className="banner-title">
              Relax, connect, and enhance cybersecurity!
            </TypeIt>

            {/* Main text */}
            <p>
              Become part of a community that helps members to navigate through
              diverse cybersecurity paths, make new friends, and gather
              significant experiences.

              For more information join our discord!
            </p>

            {/* Join btn */}
            <button
              onClick={() => {
                const newTab = window.open("https://discord.gg/8YuGKecGU4", "_blank");
                newTab.focus();
              }}
            >
              Join our Discord <ArrowRightCircle size={25} />
            </button>
          </Col>

          {/* Image column */}
          <Col xs={12} md={6} xl={5}>
            {/* Image */}
            <div>
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
      <div id="officers"></div>
    </section>
  );
}
