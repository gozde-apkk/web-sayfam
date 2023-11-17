import { skillsData , trSkillsData} from "../Data/skillsData";
import "../style/Skills.css"

export default function Skills({ language }) {
    return language === "en" ? (
      <div className="skills">
        <h3>Skills</h3>
        <div className="skillsList">
          {skillsData.map((skill) => (
            <div className="skillsListGroup" key={skill.id} >
              {skill.style && (
                <>
                  <h4 style={skill.style.name} >{skill.name}</h4>
                  <input style={skill.style.imgsrc}  className="skill-img"  type="image" id="image" alt="Login"
                        src={skill.imgsrc}>
                   </input>
                   </>
              )}
            
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div className="skills" style={{height:"287px"}}>
        <h3>Yetenekler</h3>
        <div className="skillsList">
          {trSkillsData.map((skill) => (
            <div className="skillsListGroup" key={skill.name}>
              <h4>{skill.name}</h4>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  