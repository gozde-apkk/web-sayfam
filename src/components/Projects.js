import { projectsData , projectsDataTr} from "../Data/projectsData";

 
import '../style/Projects.css';

export default function Projects({ language }) {
  const proje = {projectsData, projectsDataTr}

  function getProjectStyles(proje) {
    let styles = {
      border: '1px solid black',
      backgroundColor:"black" // varsayılan sınır rengi
      // Diğer varsayılan stil özellikleri
    };
  // Proje ve proje tipini kontrol et
  if (proje && proje.type) {
    // Proje özelliklerine göre stil özelliklerini güncelle
    if (proje.type === 'proje1') {
      styles = {
        ...styles,
        backgroundColor: 'lightblue', // Proje 1'e özgü arkaplan rengi
        // Diğer proje 1 özel stil özellikleri
      };
    } else if (proje.type === 'proje2') {
      styles = {
        ...styles,
        backgroundColor: 'lightgreen', // Proje 2'ye özgü arkaplan rengi
        // Diğer proje 2 özel stil özellikleri
      };
    }
  }
    return styles;
  }

    return language === "en" ? (
      <div className="projects">
        <span className="project_1"></span>
        <h3>Projects</h3>
        <div  className="cart-group">
          {projectsData.map((project) => (
            <div className="projects-list"  key={project.id}>
              <input  style={getProjectStyles(projectsData)} type="image" id="image" alt="Login"
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
                <a href={project.viewSite} target="_blank" rel="noreferrer">
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
          {projectsDataTr.map((project) => (
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