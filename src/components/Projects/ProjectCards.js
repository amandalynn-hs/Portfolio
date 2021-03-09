import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-router-bootstrap';
import { Link } from 'react-router-dom';

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{backgroundColor:"#fff"}}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{fontWeight: "600"}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "left" }}>
          {props.description}
        </Card.Text>
<Link to={props.link}>View Project</Link>

        {/* <LinkContainer to="/Projects/ProjectDetail">
  <Button>Foo</Button>
</LinkContainer> */}
        {/* <Button variant="primary" href={props.link}>
          <i className="cil-external-link">&nbsp;</i>
          {props.isBlog ? "View Blog" : "View Project"}
        </Button> */}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
