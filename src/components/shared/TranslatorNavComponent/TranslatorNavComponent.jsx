import React, { useContext } from "react";
import { Context } from "../../../context/Context";
import "./TranslatorNavComponent.css"


const TranslatorNavComponent = () => {

  const {t, changeLanguaje} = useContext(Context);

  return (

    <div className="nav-translate">

        <button className="button2" onClick={() => changeLanguaje('en')}>{t("")}</button>
        <button className="button1" onClick={() => changeLanguaje('es')}>{t("")}</button>
      
    </div>
  );
};

export default TranslatorNavComponent;

