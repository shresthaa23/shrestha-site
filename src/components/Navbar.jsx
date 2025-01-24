import "../styles/nav-styles.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <a href="#Hero" className="nav-title">
        Alex Shrestha
      </a>
      <ul>
        <li>
          <a href="#Hero">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Skills">Skills</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
