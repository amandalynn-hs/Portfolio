import React from "react";
import ReactDOM from 'react-dom';
// import { Container, Row, Col } from "react-bootstrap";
import * as BS from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import successImg from "../../Assets/Projects/myteam-success.png";
import myteamDesign1 from "../../Assets/Projects/myteam-design1.png";
import myteamDesign2 from "../../Assets/Projects/myteam-design2.png";
import myteamDesign3 from "../../Assets/Projects/myteam-design3.png";
import myteamDesign4 from "../../Assets/Projects/myteam-design4.png";
import myteamDesign5 from "../../Assets/Projects/myteam-design5.png";
import myteamDesign6 from "../../Assets/Projects/myteam-design6.png";
import myteamDesign7 from "../../Assets/Projects/myteam-design7.png";
import myteamDesign8 from "../../Assets/Projects/myteam-design8.png";
import myteamVoc from "../../Assets/Projects/myteam-voc.png";
import myteamMvp from "../../Assets/Projects/myteam-mvp.png";
import myteamSurvey from "../../Assets/Projects/myteam-survey.png";
import myteamLicense from "../../Assets/Projects/myteam-licenses.png";
import myteamAss from "../../Assets/Projects/myteam-assessments.png";
import myteamClass from "../../Assets/Projects/myteam-upclass.png";
import myteamAssTasks from "../../Assets/Projects/myteam-asstasks.png";
import myteamCal from "../../Assets/Projects/myteam-cal.png";
import myteamRollup from "../../Assets/Projects/myleam-learning-rollup.png";
import myteam from "../../Assets/Projects/myteam.png";




function ProjectDetail() {
  return (
    
    <BS.Container fluid className="project-section">
       <BS.Jumbotron>
       <h1 className="heading-name" style={{marginBottom: "40px", fontSize: "32px !important"}}>
             My Team Dashboard
           </h1>
<p>Redesigning how healthcare managers access and analyze their employee's data</p>             
        </BS.Jumbotron>
         <BS.Container className="project-hero-container">
           
         
     </BS.Container>
     
      
      <BS.Container>
        <BS.Row style={{ justifyContent: "left", padding: "10px" }}>
          <BS.Col className="project-content-section"
            md={12}
            style={{
              justifyContent: "left",
              paddingTop: "30px",
              paddingBottom: "50px",
              textAlign: "left"
            }}
          >

         
            <h2>The Problem </h2>
            <strong>HEALTHCARE WORKERS</strong> across the globe use HealthStream because of its reliability in developing the people who deliver care .

<p>But what happens as soon as an training has been completed or an initiative has concluded? How can we help managers oversee and track their employee's success and optimize their employee's training?</p>

<p>HealthStream managers were required to contact their HealthStream administrator to be able to provide a report of training completion, license and certification status. Due to our manager's busy schedules this was often unpracticle as these reports would sometimes take days, even weeks to get into the hands of the managers that requested them. </p>

{/* HealthStream's My Team dashboard is a feature that’s frequently seen by managers as it is the first page one would land upon when they login. However, our data shows that majority of our users spend very little time on this page as we suspect it did little to add value to their experience. */}

<h2>Talking to Customers </h2>
<p>We knew that this feature would be well recieved, as we ourselves are consumers of our product, and expereienced the same frustrations as our customers.  </p>

<p>However, we knew we needed to speak to our customers to understand the manager's needs "on the floor" so to speak in the care setting.</p>

<p>In order to understand the persona of the manager a bit more, we spoke to our own customers hosting events that varied in size, frequency and type. By doing this, we could also capture how they were using our current dashboard and what value they took from it. We learned that such an organizer that hosted multiple events included reoccurring classes/workshops, attractions and venue-based events.</p>

<p>Some of their major pain points came from the lack of access to near real-time actionable data. Some key statements were: </p>

<blockquote class="block-quote">"If a nurse needs to be taken off the floor due to an expired license, I need to know that immediately! We're at huge risk if that nurse working with an expired license.  Data is currently so delayed that they could be working for weeks before we even know."'</blockquote>

<blockquote class="block-quote">"If our annual manditory training isn't completed on time, and we are Audited by the Joint Action Committee, we will be fined in a big way - or even be sanctioned by the CMS - which is a HUGE deal." </blockquote>

<p>Our users were clear in that we needed to get this data to them for them to be able to act on it to protect their employees, and their larger organizations that they are employeed for.  Actionable data was key.  </p>

<h2>How might we...?</h2>
<p>We created a list of ‘How might we…’ questions to help us better align our user’s tasks and goals:</p>
<ol>
  <li><strong>How might we</strong> provide an experience that is engaging and valuable to our users?</li>
  <li><strong>How might we</strong> ensure that the data that we provide to our users is actionable?</li>
  <li><strong>How might we</strong> allow them to access their most critical employee information through their mobile devices?</li>
  <li><strong>How might we</strong> provide a tailored expereince that allows managers to see what's more important to them? </li>
</ol>

<h2>How do we know if we're successful? </h2>

<p>One of the first things that we started with after understanding our customer's needs, was to define what it would look like to be successful.  </p>
         
<img src={successImg} alt="about" className="img-fluid" />

<h2>The design process</h2>
<img src={myteamDesign1} alt="about" className="img-gallery" />
<img src={myteamDesign2} alt="about" className="img-gallery" />
<img src={myteamDesign3} alt="about" className="img-gallery" />
<img src={myteamDesign4} alt="about" className="img-gallery" />
<img src={myteamDesign5} alt="about" className="img-gallery" />
<img src={myteamDesign6} alt="about" className="img-gallery" />
<img src={myteamDesign7} alt="about" className="img-gallery" />
<img src={myteamDesign8} alt="about" className="img-gallery" />

<h4>Internal Feedback</h4>
<p>Internal Feedback
I sent out a survey to our client-facing teammates to quickly inquire what should be added or removed from our dashboard. The purpose of this was to discover potential quick wins on simple improvements that could be executed quickly.</p>
      <blockquote>[We need] more employee specific level reporting. More account level changes i.e. adding referral codes. Ability to see info on certain employees at-a-glance i.e. licenses/certification status per employee.     — Response from an internal survey</blockquote>

<h2>MVP</h2>
<h4>The <strong>smallest</strong> thing that we can build to be able to learn</h4>

<p>To validate these findings, I designed a simple overview of the manager's employees and a widget to represent employee Outstanding Learning.  The Oustanding Learning widget was ranked as the top desired widget from a card sorting session that I held with internal and external customers. 
  Additionally the initial MVP contained options to export reports for these data points.  The key here is that we were just trying to learn from our customers as soon as possible and <strong>fail fast</strong>.</p>

<p><img src={myteamMvp} alt="MVP" className="img-fluid"/></p>
<p>After soft-launching to a smaller set of actual users, we started to see a difference immediately. Our clients expressed the usefulness of these features. Additionally, we were starting to recieve praise from customers across the organization. </p>

<h2>Iterate, Iterate and Iterate</h2>
<p>Based on our all of our findings shown above, we narrowed our focus into 4 areas for potential improvement of our original dashboard:</p>
<ol>
<li>Improve the data we provide</li>
<li>Improve navigation</li>
<li>Improve actionability</li>
<li>Improve notification</li>
</ol>

<h4>Improve the data we provide</h4>
<p>I learned that a majority of our customers wanted more data about their employees.  They were very excited about the possabilities - but we needed to start building out what this data would look like.  digested and appealing. Keeping in mind of technical constraints, I made sure we were using charts and graphs from an existing library.</p>

<h4>Improve navigation</h4>
<p>We included a sidebar of quick links that manager's frequently visited, and still kept an index of their employee's upcoming events.</p>

<h4>Improve actionability</h4>
<p>What can manager's do once to act on a specific situation with an employee? What happens when there is no upcoming employee learning? We thought of a few ways to help guide and enhance the experience by prompting tips during different states, especially when a dashboard is empty.</p>

<h4>Improve notification</h4>
<p>How can we inform our managers that there are events or situations that they need to act on? How do we allow them to send messages to their employees when there is something that the employee themselves needs to act upon? We worked on improving communication that would inform the manager of activity milestones, necessary actions, etc for their employee.</p>


<h2>Version 2: Add additional widgets and patterns</h2>
<p>For our first iteration after MVP, I started to solidify the patterns around the first two widgets that we created in MVP to be able to further utilize those patterns in future widgets.</p>
<p>Based on customer feedback through card sorting with external customers, I learned that the data our customers were wanting to see next was Outstanding Licenses, Outstanding Certifications.   </p>

<img src={myteamSurvey} />

<p>So, as we do... based on feedback, and using existing patterns, developers were able to easily create additional widgets that provide increased value to our customers with minimal design work.</p>

<img src={myteamLicense} />
<img src={myteamAss} />
<h2>Version 2: Exploring additional types of widgets and interactions</h2>

<h4>Challenges and Compromises</h4>
<p> Eventually, we realized (I mean, our customer's told us :) that we needed to move beyond the donut widget.</p> So, as we do, I went back to our customers. This time with some designs and ideas to get feedback on where we should go from here. 

<img src={myteamClass} />
<img src={myteamCal} />
<img src={myteamRollup} />

<p>In one version, I wanted to include a map of where an event’s top buyers were located. Instead of developing a map, I scoped it down to showing a list of where these buyers were from.
I included in-app messaging showing summaries of your event once it ended. Since this would require extra time for developer complexity and logic, we transformed this into a post-event email summarizing net sales and tickets sold.</p>


<h2>The latest iteration of the dashboard</h2>

<img src={myteam} />




Routr

      
          </BS.Col>
         
        </BS.Row>
       
      </BS.Container>
    </BS.Container>
  );
}

export default ProjectDetail;
