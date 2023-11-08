import "./Profile.css";
import profilePicture from "../../assets/rosspic.jpg";
import Resume from "../../assets/resume.pdf";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="picture-container">
        <img src={profilePicture} alt="profile-picture"></img>
      </div>
      <div className="introduction-container">
        <p>Hello, I&apos;m</p>
        <h1>Ross Gilman</h1>
        <p>FullStack Developer</p>
        <div className="button-container">
          <a
            href={Resume}
            target="_blank"
            rel="noreferrer"
            id="download-button"
          >
            Download Resume
          </a>
          <a
            onClick={() =>
              window.open("mailto:rossgilman402@gmail.com", "_blank")
            }
            id="contact-button"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
