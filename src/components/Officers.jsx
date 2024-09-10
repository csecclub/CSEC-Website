// bootstrap
import { Row, Col, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles/Officers.css";
import OfficersFile from "../assets/constants/officers.json";

// assets

export function Officers() {
  let officersData = OfficersFile.officers;

  // Carousel controls
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },

    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },

    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },

    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const displayOfficers = () => {
    return Object.values(officersData).map((officer) => (
      <div className="item" key={officer.title}>
        <img
          src={require(`../assets/img/officers/${officer.pic}.jpg`)}
          alt="description"
        />
        <h4>{officer.title}</h4>
        <h5>{officer.officerName}</h5>        
        <a href={officer.linkedIn} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    ));
  };

  return (
    // carousel section
    <section className="officers">
      {/* Carousel main container */}
      <Container>
        <Row>
          <Col>
            {/* Caurosel header and description */}
            <div className="officer-bx">
              <div style={{ padding: "1.5rem 0" }}>
                <h2>Meet Our Officers</h2>
                <p>These are the brilliant minds behind CSEC</p>
              </div>

              {/* Carousel component */}
              <Carousel
                responsive={responsive}
                infinite={true}
                className="officer-slider"
              >
                {displayOfficers()}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
