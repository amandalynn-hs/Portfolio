import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
          <p style={{ textAlign: "justify" }}>
            Hi ! :)<br/><br/>I am <strong >Amanda Myers </strong>
            from Gulf Breeze, FL.  <br /> <br /><a href="https://www.google.com/maps/place/Gulf+Breeze,+FL/@30.3628956,-87.1516973,31334m/data=!3m1!1e3!4m5!3m4!1s0x8890c4af2c4797d1:0xa0ab1b7703311d36!8m2!3d30.3571438!4d-87.1638574" target="_blank">Gulf Breeze</a> is a cool little peninsula off the northern gulf coast of Florida.  It was a neat place to grow up, I go back to visit a ton.  There's things like a bazillion stars that you can see in the night sky (it will seriously blow your mind), Portuguese man o'war's that wash up on the beach by the hundreds in the winter, sunshine, boats, all of my blood-related family, and some hurricanes every once in a while.... .just to keep things interesting
            <br /><br />
            
            I am currently the Platform Design Manager at HealthStream in Nashville, TN.  I have worked as a full stack developer for over 20 years.  <br/><br/>While I started out my career in graphic design, thanks to my mom, who taught me from a very early age about computers, I never questioned the assumptions that girls weren't good at "computer things". <br/><br/>I quickly discovered my mad passion for software and product development in 1999, and learned the skills and tools necessary to move into the development field. <br/><br/>
            While I have loved full stack development, still do, and have spent many years as a senior developer in that role, my love for the user experience has never waned. <br/><br/>It just so happened that in those early years, the field that I truly love, and helped to pioneer with the companies I've worked with, just didn't have a name yet.......  
            <br />
            <br />
          <strong>User Experience</strong>..... or.....?  <br />
          <strong>Front End Developer</strong>.......or .....?  <br />
          <strong>Front End Designer</strong>.......or .....?  <br />
          <strong>UX Developer</strong>.......or .....?  <br />
          <strong>UI Developer</strong>.......or.....?   <br />
          <strong>Product Designer</strong>.......or.....?   <br />
          <strong>Interaction Designer/Developer</strong>.......or.....?   <br />
          the list goes on and on....
            <br />
            <br />
            At the end of the day, what I love to do is to <strong>create products that people love to use</strong>. B2B or B2C, it's the users that truly matter and determine if a product is successful or not, and that's who I love to create products for.
          </p>
         

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Amanda Myers</footer>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
