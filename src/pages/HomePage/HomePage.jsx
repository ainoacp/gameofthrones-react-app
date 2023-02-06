//import { t } from "i18next";
import { useContext } from "react";
import NavComponent from "../../components/shared/NavComponent/NavComponent";
import TranslatorNavComponent from "../../components/shared/TranslatorNavComponent/TranslatorNavComponent";
import { Context } from "../../context/Context";
import "./HomePage.css"

export default function HomePage(){
    const {t} = useContext(Context);

    return (
        <div className="c-home-container">
            <div className="c-home-header">
                <div className="c-home-buttons">
                    <TranslatorNavComponent/>
                </div>
            </div>
            
            <div className="c-div-title">
                <h1 className="title">{t("games of thrones")}</h1>
            </div>

            <div className="c-home-footer">
                <NavComponent/>
            </div>
        </div>
    )
}