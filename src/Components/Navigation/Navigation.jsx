import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul className="list-container">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
