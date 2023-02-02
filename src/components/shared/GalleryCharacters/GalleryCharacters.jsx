import { Link } from "react-router-dom";
import './GalleryCharacters.scss'
export default function GalleryCharacters({characters}) {
    return (
        <div className="gallery">
            {characters.map((character) => (
            <figure character={character} key={character._id} className="card">
                <img src={character.image} alt={character.name}/>
                <figcaption>
                    <Link to={`/characters/${character.name}`}>{character.name}</Link>
                    {/* <p>{character.house}</p>
                    <Link to={`/characters/${character.origin}`}>{character.origin}</Link> */}
                </figcaption>
            </figure>))}
        </div>
    )
}