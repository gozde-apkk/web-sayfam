
import {useEffect, useState} from "react"
import ModeSwitch from './components/ModeSwitch';


import Header from "./components/Header";
import Skills from "./components/Skills";
import Bio from "./components/Bio";
import Profile from "./components/Profile";
import Footer from './components/Footer';

import './App.css';
function App() {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = () => {
    const newLanguage = language === "en" ? "tr" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  return (
    <div className="App ">
      <ModeSwitch  language={language} handleLanguageChange={handleLanguageChange}/>
      <Header  language={language} handleLanguageChange={handleLanguageChange} />
      <Bio language={language} />
      <div id="skills"></div>
      <Skills language={language}/>
      <Profile language={language}/>
      <div id= "projects"></div>
      <Footer language= {language}/>
     
    </div>
  );
}

export default App;
