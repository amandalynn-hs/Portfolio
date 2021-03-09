import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={24}  className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {/* <span className="wave">👋🏻</span> */}
              </h1>
            <div style={{margin:"10px 40px"}}>
              <h1 className="heading-name">
                Hi, I <strong className="main-name"> am </strong>
                <div style={{margin:"10px 40px"}}>
                <strong className="dark-gold">Amanda Myers</strong>
                </div>
              </h1>
              <h1 className="heading-name" >
                I <strong className="main-name">am</strong> also a
                <Type />
              </h1>
              <p style={{marginTop:"20px", marginLeft: "50px", fontSize: "18px"}}>I am a platform design manager &amp; full stack developer who brings an engineering perspective and creative problem-solving approach to create products and experiences people love to use. Persistence, curiosity, and an obsessive attention to detail define me. With an extensive background in full-stack software development, years of experience in digital design, and proven leadership across multiple B2B and B2C teams, I am competent in all aspects of the product design process, and in leading the teams that create these experiences.</p>
          </div>

            </Col>

          
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
