import "./App.css";
import Home from "./Home";
import Learn from "./Learn";
import Fight from "./Fight";
import { useState } from "react";

const App = () => {
  const [language, setLanguage] = useState();

  const changeLanguage = (newLangauge) => {
    setLanguage(newLangauge);
    console.log(newLangauge);
  };

  return (
    <div className="App">
      {!language && <Home onLanguageChange={changeLanguage} />}
      {language && <Learn language={language} />}
    </div>
  );
};

export default App;
