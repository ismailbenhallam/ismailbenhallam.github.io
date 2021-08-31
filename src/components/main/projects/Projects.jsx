import projects from "../../../data/projects";
import projectsWall from "../../../images/parallax/projects.jpg";
import Project from "../project/Project";

export default function Projects() {
  return (
    <>
      <div className="parallax-container">
        <div className="parallax">
          <div>
            <img src={projectsWall} alt="projects wall" />
          </div>
        </div>
      </div>
      <div id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="row">
            {projects.map((p) => (
              <Project key={p.title} project={p} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
