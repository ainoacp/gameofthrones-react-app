import { Link } from "react-router-dom";


export default function NavComponent(){
    return (
    <div>
        <Link to="/characters" className="c-nav-link">Personajes</Link>
        <Link to="/houses" className="c-nav-link">Casas</Link>
        <Link to="/cronology" className="c-nav-link">Cronologia</Link>
    </div>
    )
}