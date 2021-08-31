// import "./Main.module.css";

import myName from "../../data/global";
import certif from "../../images/Oracle_Java_SE_11_Developer.jpg";
import photo from "../../images/photo1.jpg";
import Projects from "./projects/Projects";

export default function Main() {
  return (
    <main id="main">
      {/* <div className="parallax-container">
        <div className="parallax">
          <img src="images/photo0.jpg" />
        </div>
      </div> */}
      {/* Hero */}
      <div style={{ backgroundColor: "#122c44" }}>
        {/* ABOUT ME */}
        <div id="about" className="section row container">
          <img
            id="photo"
            src={photo}
            width="360"
            className="hoverable z-depth-2"
            alt="Me :)"
          />
          <h1>
            <span
              className="white-text"
              style={{ fontFamily: "'Anurati', sans-serif" }}>
              {myName}
            </span>
          </h1>
          <div className="row">
            <p className="flow-text white-text right-align">
              {/* System.out.println(" */}I am a software engineer at&nbsp;
              <a
                href="https://www.sqli.com/"
                target="_blank"
                style={{ color: "#e82c5c" }}
                rel="noreferrer">
                SQLI
              </a>
              &nbsp;&amp; a <code>Java</code> enthusiast&nbsp;
              <a
                href="https://www.credly.com/badges/d464bd8b-1a75-4bf0-b04a-dc888ebf4485"
                target="_blank"
                rel="noreferrer">
                (Oracle Certified Professional : Java SE 11 Developer).
              </a>
            </p>
            <div style={{ float: "right", marginRight: "100px" }}>
              <img src={certif} alt="Oracle Certification" width="350px" />
            </div>

            {/* <div className="center-align">
            <img src="images/eCertificate.png" alt="Oracle Certification" />
          </div> */}
          </div>
        </div>
      </div>

      <Projects />
    </main>
  );
}
