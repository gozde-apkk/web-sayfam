import { skillsData , trSkillsData} from "../Data/skillsData";
import "../style/Skills.css"

export default function Skills({ language }) {
    return language === "en" ? (
      <div className="skills">
        <h3>Skills</h3>
        <div className="skillsList">
          {skillsData.map((skill) => (
            <div className="skillsListGroup" key={skill.name}>
              <h4>{skill.name}</h4>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div className="skills">
        <h3>Skills</h3>
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
  