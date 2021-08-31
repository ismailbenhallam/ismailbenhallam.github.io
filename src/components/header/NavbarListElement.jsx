// import "./Navbar.module.css";

export default function NavbarListElement() {
  return (
    <>
      <li>
        <a href="#main">Home</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      {/* <li><a href="#hobbies">Hobbies</a></li> */}
      {/* Resume Dropdown Trigger */}
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li>
        <a className="dropdown-trigger" href="#!" data-target="resume-dropdown">
          Resume
          <i className="material-icons right">arrow_drop_down</i>
        </a>
      </li>
    </>
  );
}
