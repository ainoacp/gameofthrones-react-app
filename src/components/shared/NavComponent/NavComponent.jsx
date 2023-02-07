import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../context/Context";
import "./NavComponent.css";

export default function NavComponent(){
    const {t} = useContext(Context) //poner en cada pagina
    return (
    <div className="nav-component">
        <Link to="/characters" className="nav-link">{t("characters")}</Link>
        <Link to="/houses" className="nav-link">{t("houses")}</Link>
        <Link to="/timeline" className="nav-link">{t("cronology")}</Link>
    </div>
    )
}