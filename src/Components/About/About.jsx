import "./About.css";
import badger from "../../assets/badger.jpg";
import columbia from "../../assets/columbia.png";
import relay from "../../assets/relay-network.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="title-container">
        <h1>About Me!</h1>
        <p>
          Full Stack Web Developer with a background in Computer Science and a
          passion for lifelong learning. Known for my creative problem-solving,
          attention to detail, and strong collaboration skills, I thrive in the
          tech world with a commitment to continuous growth and nurturing a
          growth mindset.
        </p>
      </div>
      <div className="experience-container">
        <h3>Education</h3>
        <div className="education-container">
          <div className="education-information">
            <div className="columbia-information">
              <div className="columbia-text-container">
                <h4>Columbia University, New York, NY</h4>
                <p>- Full Stack Web Development Boot Camp Certificate</p>
                <p>- September 2023 - Current</p>
              </div>
              <img src={columbia} alt="colubmia" />
            </div>
            <div className="wisconsin-information">
              <div className="badger-text-container">
                <h4>University of Wisconsin-Madison, Madison, WI</h4>
                <p>- Bachelor of Science: Computer Science</p>
                <p>- Graduation: May 2023</p>
              </div>
              <img src={badger} alt="badger" />
            </div>
          </div>
        </div>
        <h3>Internship</h3>
        <div className="internship-container">
          <div className="relay-information">
            <div className="relay-text-container">
              <h4>Relay Network, Philadelphia, PA</h4>
              <p>- Software Engineer Intern</p>
              <p>- May 2022 - July 2022</p>
            </div>
            <img src={relay} alt="relay network" />
          </div>
        </div>
      </div>
      <h3>Technical Skills</h3>
      <div className="technical-container">
        <p>
          HTML | CSS | Java | Python | MongoDB | MySQL | Bootstrap | VSCode |
          Maven | Jira | Apache Kafka JavaScript | Node.js | Express.js |
          Handlebars.js | JQuery | ReactJS
        </p>
      </div>
    </div>
  );
};

export default About;
