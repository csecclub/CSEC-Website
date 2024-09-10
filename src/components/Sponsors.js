import { Col, Container, Row } from "react-bootstrap";
import { SponsorCard } from "./SponsorCard";
import "./styles/Sponsors.css";
import UTA from "../assets/img/sponsors/CSE.png";
import sponsorData from "../assets/constants/sponsors.json";

export function Sponsors() {
  return (
    <section className="sponsors" id="sponsors">
      <Container>
        <Row>
          <Col>
            <div className="container-box">
              <h1>
                Our <span className="beloved">beloved</span> sponsors
              </h1>
              <p>
                A big thanks to all our
                <span className="beloved"> sponsors</span>!
              </p>

              <div className="sponsors-cards">
                <SponsorCard
                  frontImage={UTA}
                  backText={sponsorData.CSE.Name}
                  link={sponsorData.CSE.link}
                />
              </div>
            </div>
          </Col>      
        </Row>
      </Container>
    </section>
  );
}
