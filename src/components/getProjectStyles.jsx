
import { projectsData ,projectsDataTr} from "../Data/projectsData";

function getProjectStyles(){
  const project = {  projectsData , projectsDataTr }; 
   let styles = {
  border: '1px solid black',
    };
  
  if (project) {
    if (project.project.type === 'proje1') {
      styles = {
        ...styles,
        description: {
          ...styles.description,
          color: project.style.description.color,
          position: project.style.description.position,
          left: project.style.description.left,
      },
    }; 
     } else if (project.project.type === 'proje2') {
      styles = {
        ...styles,
        backgroundColor: 'lightgreen',
      };
    }
  }

  return styles;
}

export default getProjectStyles;