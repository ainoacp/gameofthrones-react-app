import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../context/Context";
import "./TranslatorNavComponent.css"


const TranslatorNavComponent = () => {
  //const { t, changeLanguaje } = useContext(MyContext);
  const {t, changeLanguaje} = useContext(Context)
  return (

    <div className="nav-translate">
       
        <button className="button1" onClick={() => changeLanguaje('es')}>{t("lang_es")}</button>
        <button onClick={() => changeLanguaje('en')}>{t("lang_en")}</button>
      {/* <button className="button1" onClick={() => changeLanguaje('es')}>{t("lang_es")}</button>
       */}
      
    </div>
  );
};

export default TranslatorNavComponent;