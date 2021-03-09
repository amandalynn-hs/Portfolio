import React from "react";
// import Typewriter from "typewriter-effect";
import FadeIn from 'react-fade-in';

function Type() {
  return (
    <FadeIn>
      { [
       <div key="1" style={{margin:"10px 60px"}}>
         <strong style={{color:"#555", display:"inline-block", marginRight:"10px"}}>user<span style={{fontWeight: "normal"}}>,</span></strong>
         <strong style={{color:"#555", display:"inline-block", marginRight:"10px"}}>curious researcher<span style={{fontWeight: "normal"}}>,</span></strong>
         <strong style={{color:"#555", display:"inline-block", marginRight:"10px"}}>mountain biker<span style={{fontWeight: "normal"}}>,</span></strong>
         <strong style={{color:"#555", display:"inline-block", marginRight:"10px"}}>lover of whiteboards<span style={{fontWeight: "normal"}}>, and </span></strong>
         <strong style={{color:"#555", display:"inline-block", marginRight:"10px"}}>crazy passionate about <span style={{color: "#cea62d"}}>stars</span><span style={{fontWeight: "normal"}}></span></strong><span style={{fontWeight: "normal"}}></span>
         <div style={{fontSize: "16px"}}>(and about 1,000 other things)</div>


             </div>
 
]}
    </FadeIn>
    // <Typewriter
    //   options={{
    //     strings: [
    //       "User",
    //       "Deep Learning Engineer",
    //       "MERN Stack Developer",
    //       "Open Source Contributor",
    //     ],
    //     autoStart: true,
    //     loop: true,
    //     deleteSpeed: 50,
    //   }}
    // />
  );
}

export default Type;
