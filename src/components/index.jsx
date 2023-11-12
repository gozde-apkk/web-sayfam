
import { projectsData } from "../Data/projectsData";



function ProjectStyles( { projectsData }) {
  return (
    function getProjectStyles(projectsData) {
        let styles = {
          border: '1px solid black', // varsayılan sınır rengi
          // Diğer varsayılan stil özellikleri
        };
      
        // Proje özelliklerine göre stil özelliklerini güncelle
        if (projectsData.type === 'proje1') {
          styles = {
            ...styles,
            backgroundColor: 'lightblue', // Proje 1'e özgü arkaplan rengi
            // Diğer proje 1 özel stil özellikleri
          };
        } else if (projectsData.type === 'proje2') {
          styles = {
            ...styles,
            backgroundColor: 'lightgreen', // Proje 2'ye özgü arkaplan rengi
            // Diğer proje 2 özel stil özellikleri
          };
        }
      
        return styles;
      }
  )
}

export default ProjectStyles