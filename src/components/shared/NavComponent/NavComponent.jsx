import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../context/Context";
import "./NavComponent.css";

export default function NavComponent(){
    const {t} = useContext(Context) //poner en cada pagina
    return (
    <div className="nav-component">
    {/* traerme la key de la traducción */}
        <Link to="/characters">{t("characters")}</Link>
        <Link to="/houses">{t("houses")}</Link>
        <Link to="/cronology">{t("cronology")}</Link>
    </div>
    )
}