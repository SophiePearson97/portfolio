import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3>My Portfolio</h3>
      <div className="links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#career">Career</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;