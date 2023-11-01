import { ProjectsData , ProjectsDataTr} from "../Data/skillsData";

import "../style/Skils.css"
export default function Projects({ language }) {
    return language === "en" ? (
      <div className="projects">
        <span className="project_1"></span>
        <h3>Projects</h3>
        <div  className="cart-group">
          {ProjectsData.map((project) => (
            <div className="projects-list" key={project.id}>
              <input type="image" id="image" alt="Login"
          src={project.imgsrc}></input>
              
              <h4>{project.title}</h4>
              <p className="description">{project.description}</p>
              <div className="projeskill">
                <p>{project.skills[0]}</p>
                <p>{project.skills[1]}</p>
                <p>{project.skills[2]}</p>
              </div>
              <div className="project-details">
                <a href={project.gitHub} target="_blank" rel="noreferrer">
                  <p>GitHub</p>
                </a>
                <a href={project.vievSite} target="_blank" rel="noreferrer">
                  <p>Viev Site</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    ):(
        <div className="projects">
        <span className="project_1"></span>
        <h3>Projelerim</h3>
        <div className="cart-group">
          {ProjectsDataTr.map((project) => (
            <div className="projects-list" key={project.name}>
             <input type="image" id="image" alt="Login"
          src={project.imgsrc}></input>
              <h4>{project.title}</h4>
              <p className="description">{project.description}</p>
              <div className="projeskill">
                <p>{project.skills[0]}</p>
                <p>{project.skills[1]}</p>
                <p>{project.skills[2]}</p>
              </div>
              <div className="project-details">
                <a href={project.gitHub} target="_blank" rel="noreferrer">
                  <p>GitHub</p>
                </a>
                <a href={project.vievSite} target="_blank" rel="noreferrer">
                  <p>Siteye Git</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}