import React, { useContext } from "react";

const LanguageContext = React.createContext({
  language: "en",
  setLanguage: () => {},
});

const DisplayLanguage = () => {
  const { language } = useContext(LanguageContext);
  return <h1>Selected language: {language}</h1>;
};

const LanguageSelector = () => {
  const [language, setLanguage] = useState("en");
  return (
    <div>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
      </select>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <DisplayLanguage />
      </LanguageContext.Provider>
    </div>
  );
};

export default LanguageSelector;
