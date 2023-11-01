import React from "react"; 
import "../style/Footer.css"


export const Footer = ({language}) => {
return(
    <div className="footer">
    {language === "en" ? (
          <h3 className="intro">
             Let's team up and make your next
          <br />
          product a success.
          </h3>
           ) : (
            <h3 className="intro">
                Ekip olalım ve bir sonraki ürününüzü
          <br />
          başarıya ulaştıralım
            </h3>
)}
          <div className="rectangle"> 
              <a className="email" href="mailto:gozde.apak@hotmail.com">
              <input type="image"  alt="Login"
          src="./icons/el.svg"></input>
            <p className="emailrow">gozde.apak@hotmail.com</p>
         
               
              </a>

               <nav className="rectangle_2">
                   <a className="github"  href="https://github.com/gozde-apk" target="blank">Github</a>
                   <a className="linkedin" target="blank" href="https://www.linkedin.com/in/g%C3%B6zde-apak-691395250/">Linkedin</a>
               </nav>
          </div>
      </div>
      );
}


export default Footer;