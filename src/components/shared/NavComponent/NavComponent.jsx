import { Link } from "react-router-dom";

export default function NavComponent(){
    return (
    <div>
        <Link to="/characters">Personajes</Link>
        <Link to="/houses">Casas</Link>
        <Link to="/cronology">Cronologia</Link>
    </div>
    )
}