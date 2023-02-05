import { Link } from "react-router-dom";
import './HomeLink.scss'

export default function HomeLink() {
    return (
        <>
            <Link to="/" className="c-link-home"></Link>
        </>
    )
}