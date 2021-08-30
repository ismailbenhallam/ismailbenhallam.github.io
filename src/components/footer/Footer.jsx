// import "./Footer.module.css";
import contacts from "../../data/contact";

const CONTACT_ITEM_COLOR = "#c3d6f4";

export default function Footer() {
  return (
    <footer id="contact" className="page-footer">
      <div className="container row">
        <div className="col s12 l6">
          <h2 className="white-text">Get in touch</h2>
        </div>
        <div className="col s12 center-align">
          <ul
            id="contacts-wrapper"
            className="row center-align"
            style={{ fontSize: "x-large" }}>
            {contacts.map((c) => (
              <li className="col">
                <a
                  href={c.url}
                  style={{ color: CONTACT_ITEM_COLOR }}
                  target="_blank"
                  rel="noreferrer">
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <div
          className="container"
          style={{
            color: "rgb(149, 157, 165)",
            fontSize: "large",
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
          }}>
          <div>
            Made by&nbsp;
            {/* using{" "}
            <img
              src={reactLogo}
              alt="React logo"
              style={{ width: 40, height: 40, margin: -10, padding: -10 }}
            /> */}
            <a
              style={{
                textDecoration: "inherit",
                color: "inherit",
                fontWeight: "bold",
              }}
              href="https://github.com/ismailbenhallam">
              @Ismaïl
            </a>
            &nbsp;with &#10084;&#65039;
          </div>
          <a
            className="right valign-wrapper"
            href="https://github.com/ismailbenhallam/ismailbenhallam.github.io"
            style={{ color: "rgb(149, 157, 165)" }}>
            <img
              width="27px"
              src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg"
              alt="GitHub Icon"
            />
            &nbsp;Source Code
          </a>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed-action-btn">
        <a
          href="!#"
          className="btn-floating btn-large scale-transition scale-out"
          id="toTop">
          <i className="large material-icons btn-floating-arrow">
            arrow_upward
          </i>
        </a>
      </div>
    </footer>
  );
}
