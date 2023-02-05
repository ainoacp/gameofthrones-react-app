//import { t } from "i18next";
import { useContext } from "react";
import NavComponent from "../../components/shared/NavComponent/NavComponent";
import TranslatorNavComponent from "../../components/shared/TranslatorNavComponent/TranslatorNavComponent";
import { Context } from "../../context/Context";
import "./HomePage.css"

export default function HomePage(){
    const {t} = useContext(Context);

    return (
        <>
            <div className="container">
                <TranslatorNavComponent/>
                <div className="div-title">
                    <h1 className="title">{t("games of thrones")}</h1>
                </div>
                <NavComponent/>
            </div>
        </>
    )
}