import "./Social.css";
import Github from "../../assets/github-logo.png";
import Linkedin from "../../assets/linkedin-logo.png";
import Gmail from "../../assets/gmail-logo.png";

const Social = () => {
  return (
    <div className="social-container">
      <img
        src={Github}
        alt="Github Logo"
        onClick={() =>
          window.open("https://github.com/rossgilman402", "_blank")
        }
      ></img>
      <img
        src={Linkedin}
        alt="Linkedin Logo"
        onClick={() =>
          window.open("https://linkedin.com/in/gilmanross", "_blank")
        }
      ></img>
      <img
        src={Gmail}
        alt="Gmail Logo"
        onClick={() => window.open("mailto:rossgilman402@gmail.com", "_blank")}
      ></img>
    </div>
  );
};

export default Social;
