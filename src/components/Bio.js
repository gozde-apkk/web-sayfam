import React from "react";
import { Link } from "react-scroll";

import "../style/Bio.css"

export default function Bio({ language }) {
    return (
      <div className="hero">
        <div className="heroLeft">
          <div className="isim">
            <div className="line"></div>
            <p>Gözde Apak</p>
            </div>
            {language === "en" ? (
                <div className="bio-two">
                    <h2>
                        Solutions for
                        <br/>
                      <span style={{color:"white"}}>non-bre</span>  Applications
                    </h2>
                    <br/><br/><br/>
                    <p className="info" style={{fontSize: "16px"}}>

                    Hello, I'm Gözde. A Full Stack Web living in Aydın
               I am its Developer.👩‍💻Constantly discovering new technologies
               and keeping up with the latest trends in the industry to provide my clients with the best
               I'm trying to offer solutions. Welcome to my website and any
               You can contact me for a question...
                     </p>
                </div>
            ):(
                <div className="bio-two">
                            <h2 style={{lineHeight: "6.5rem"}}>Web Uygulamaları
                             <br/>
                             <span style={{color:"white"}}>non-bre</span>için Çözümler
                         </h2>
                         <p className="info" style={{fontSize: "17px", marginTop:"8px"}}>
                            Merhaba, ben Gözde. Aydın'da yaşayan bir Full Stack Web
                              Geliştiricisi'yim.👩‍💻Sürekli olarak yeni teknolojileri keşfediyor
                           ve endüstrideki en son trendleri takip ederek müşterilerime en iyi
                            çözümleri sunmaya çalışıyorum. Web siteme hoş geldiniz ve herhangi
                            bir soru için benimle iletişime geçebilirsiniz...
                         </p>
                </div>
            )}
            {language === "en" ? (
                <div className="buttons">
                    <div className="btn-1">
                      <Link to="footer" smooth={true} duration={2000}>
                           <p style={{height:"36px" , fontSize: "16px"}}>Contact me</p>
                      </Link>
                    </div>
                    <div className="btn-2">
                        <a  target="_blank"                 href=""  style={{display:"flex"}} >
                        <img src=".\icons\github.png" alt="github" style={{position:"relative" , marginRight:"15px"}} />
                               <p>GitHub</p>
                         </a>
                     </div>
                     <div className="btn-2">
                     <input type="image"alt="linkedin"
                         src="\icons\LinkedIn.png" style={{position:"relative" , marginRight:"15px"}} ></input>
                     <a
                           href=""
                          target="_blank"
                                rel="noreferrer"
                                      >
                <p>LinkedIn</p>
              </a>
                     </div>

                </div>
            ):(
                <div className="buttons">
            <div className="button-1">
              <Link to="footer" smooth={true} duration={2000}>
                <p style={{height:"36px" , fontSize: "15px"}}>İletişime geç</p>
              </Link>
            </div>
            <div className="button-2">   
              <a target="_blank" href=""  style={{display:"flex"}} >
                <img src=".\icons\github.png" alt="github" style={{position:"relative" , marginRight:"15px"}} />
            
                <p>GitHub</p>
            </a>
            </div>
            <div className="button-2">
            <input type="image"alt="linkedin"
         src="\icons\LinkedIn.png" style={{position:"relative" , marginRight:"15px"}} ></input>
           <a
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <p>LinkedIn</p>
              </a>
       
              
             
            </div>
          </div>
            )}
        </div>
               <img className="img-photo" src="/icons/me.jpeg" alt="photo"/>
       </div>
    );
            }