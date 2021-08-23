let projectsWrapper = $$("projects-wrapper");
projects.forEach((p) => {
  projectsWrapper.insertAdjacentHTML(
    "beforeend",
    `<div class="col s12 m6">
        <div class="card large project-card hoverable">
            <div class="project-image-wrapper card-image ${
              p.details ? "waves-effect waves-block waves-light" : ""
            }">
                <img src="${p.imageSrc}" 
                  class="${p.details ? "activator" : ""}"/>
                <span 
                  class="card-title black-text darken-text-4 project-title
                  ${p.details ? `activator` : ``} ">${p.title}</span>
            </div>
            <div class="card-content">
                <p class="flow-text">
                    ${p.description}
                    ${
                      p.stillInDev
                        ? `<span class="highlight-red">(Still in development)</span>`
                        : ""
                    }
                </p>
            </div>
            ${
              p.details
                ? `<div class="card-reveal">
              <span class="card-title grey-text text-darken-4">${p.title}<i class="material-icons right">close</i></span>
              <p class="flow-text black-text">${p.details}</p>
            </div>`
                : ""
            }
            <div class="card-action flow-text valign-wrapper">
                ${p.links
                  .map(
                    (linkObj) => `
                <a style="text-transform:none" href="${
                  linkObj.link
                }" target="_blank">${linkObj.title || "Link"}</a>`
                  )
                  .join("")}
            </div>
        </div>
    </div>`
  );
});
