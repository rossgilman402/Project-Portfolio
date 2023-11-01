import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <ul className="list-container">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
