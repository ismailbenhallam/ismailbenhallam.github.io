import React from "react";
import styles from "./Project.module.css";

export default function Project({ project: p }) {
  return (
    <div className="col s12 m6">
      <div
        className={styles.projectCard + " project-card card large hoverable"}>
        <div
          className={
            "project-image-wrapper card-image " + p.details
              ? "waves-effect waves-block waves-light"
              : ""
          }>
          <img
            src=""
            alt={p.title}
            className={p.details ? styles.activator : ""}
          />
          <span
            className={
              styles.projectTitle +
              ` ` +
              "card-title black-text darken-text-4 " +
              p.details
                ? styles.activator
                : ``
            }>
            {p.title}
          </span>
        </div>
        <div className="card-content">
          <p
            className="flow-text"
            dangerouslySetInnerHTML={{
              __html:
                p.description +
                (p.stillInDev
                  ? `<span class="highlight-red">(Still in development)</span>`
                  : ""),
            }}
          />
        </div>
        {p.details && (
          <div className={styles.cardReveal}>
            <span className="card-title grey-text text-darken-4">
              ${p.title}
              <i className="material-icons right">close</i>
            </span>
            <p className="flow-text black-text">${p.details}</p>
          </div>
        )}
        <div
          className={
            styles.cardAction + " card-action flow-text valign-wrapper"
          }>
          {p.links.map((linkObj) => (
            <a
              className={styles.link}
              href={linkObj.link}
              target="_blank"
              rel="noreferrer">
              {linkObj.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
