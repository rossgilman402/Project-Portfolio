import "./Project.css";
import Jate from "../../assets/jate.png";
import Top5 from "../../assets/top5.png";
import PetPlayground from "../../assets/petplayground.png";
import TechBlog from "../../assets/techblog.png";

const projects = [
  {
    title: "Top5",
    description:
      "Top5 is a MERN FullStack Application that will create 5 song playlists that they can post so that users do not have to scroll through hundreds of songs in their playlists",
    img: Top5,
    projectLink: "https://top5-123-dd46eff5dfcf.herokuapp.com/",
    githubLink: "https://github.com/rossgilman402/Top5",
  },
  {
    title: "Jate",
    description:
      "This is a Progress Web Application that can save notes along with have the ability to donwload the text editor for offline use",
    img: Jate,
    projectLink: "https://pwa-123-a18e6a599dcb.herokuapp.com/",
    githubLink: "https://github.com/rossgilman402/Text-Editor",
  },
  {
    title: "PP",
    description:
      "The Pet Playground is a social media application for pets. Users are able to control a social media account for any amount of pets that they own",
    img: PetPlayground,
    projectLink: "https://pet-play-ground-b3dfbe3f359a.herokuapp.com/",
    githubLink: "https://github.com/rossgilman402/Pet-Playground",
  },
  {
    title: "Tech Blog",
    description:
      "This is a RESTFUL API Tech Blog where users can post and comment on other users posts",
    img: TechBlog,
    projectLink: "https://tech-blog4321-db1adb1fc487.herokuapp.com/",
    githubLink: "https://github.com/rossgilman402/Tech-Blog",
  },
];

const Project = () => {
  return (
    <div className="project-container">
      <h1>Projects</h1>
      <div className="card-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />
            <div className="card-body">
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <a href={project.projectLink} target="_blank">
                Demo
              </a>
              <a href={project.githubLink} target="_blank">
                Github
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
