import resumes from "../../data/resumes";
import NavbarListElement from "./NavbarListElement";

export default function Header() {
  return (
    <header id="header">
      <div className="navbar-fixed">
        {/* Resume Dropdown */}
        <ul id="resume-dropdown" className="dropdown-content resume-ul">
          {resumes.map((r) => (
            <li key={r.lang}>
              <a
                href={r.href}
                target="_blank"
                className="center-align"
                rel="noreferrer">
                {r.lang}
                <i className="material-icons right">open_in_new</i>
              </a>
            </li>
          ))}
        </ul>
        {/* DONT TOUCH THIS! YES I KNOW.. */}
        <ul id="resume-dropdown" className="dropdown-content"></ul>
        <nav style={{ backgroundColor: "var(--header-footer-background)" }}>
          <div className="nav-wrapper">
            {/* <span className="brand-logo" style="margin-left: 20px">
              <img src="images/photo2.jpg" alt="Photo" height="64px" />
            </span> */}
            <a href="#!" data-target="sidenav-list" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-list" className="right hide-on-med-and-down">
              <NavbarListElement />
            </ul>
            {/* Mobile navbar (Content copied from "nav-list" using JS)*/}
            <ul className="sidenav" id="sidenav-list">
              <NavbarListElement />
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
