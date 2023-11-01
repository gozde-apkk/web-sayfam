import React from "react";
import "../style/Profile.css"

export default function Profile({ language }) {
  return (
    <div className="profile">
      <span className="profileLine"></span>
      <h3>{language === "en" ? "Profile" : "Profil"}</h3>
      <div className="profileBox1">
        <div className="profileBox">
          <h4>{language === "en" ? "Profile" : "Profil"}</h4>
          <div className="dogumTarihi">
            <div className="solBolum">
              <p>{language === "en" ? "Date of birth" : "Doğum tarihi"}</p>
              <p>{language === "en" ? "City of residence" : "İkamet şehrim"}</p>
              <p>
                {language === "en" ? "Educational status" : "Eğitim bilgilerim"}
              </p>
              <br />
              <br />
              <p>
                {language === "en" ? "Preferred role" : "Tercih ettiğim rol"}
              </p>
            </div>
            <div className="sagBolum">
                <p>20.04.1997</p>
                <p>Aydın</p>
                <p>Dokuz Eylül Ekonom...<br/>
                {language === "EN" ? "Licence": "Lisans" }, 2023
                <br/>
                <br/>
                 </p>
                 <p>Full Stack Devoloper</p>
            </div>
            </div>
            </div>
            {language === "en" ? (
                <div className="about-me"> 
                <h4>About Me </h4>
                <p>
                I'm Gözde.I graduated from Dokuz Eylül University in 2023.
                  I am currently studying computer programming at Istanbul University.
                  I love
                    to write code.In 2023, I received Full Stack Web Developer
                    training from <span style={{ color: "#4731d3" }}> Workintech</span>  institution.I continue my career
                    with software.
                  
              <span>
                  I am taking intensive full stack training for 6 months. I
                  I continue to improve myself to be better in this field.
              </span>
            </p>
            </div>
            ) : (
                <div className="about-me">
                    <h4>Hakkımda</h4>
                    <p>
                    Ben Gözde. 2023 yılında Dokuz Eylül Üniversitesi'nden mezun oldum.
                   Şu anda İstanbul Üniversitesi'nde bilgisayar programcılığı okuyorum.
                    Kod yazmayı seviyorum.2023 yılında<span style={{ color: "#4731d3" }}> Workintech</span> kurumundan Full
                    Stack Web Developer eğitimi almaktayım. Kariyerime yazılım ile
                    devam etmekteyim.
              <span>
                6 ay yoğun full stack eğitim almaktayım. Bu alanda daha iyi olabilmek
                için kendimi geliştirmeye devam ediyorum.
              </span>
              </p>
                </div>
            )}
                 </div>
    </div>
  );
}