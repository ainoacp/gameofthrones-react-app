import { Link } from "react-router-dom";
import './GalleryCharacters.scss'
import SimpleBar from 'simplebar-react';


export default function GalleryCharacters({characters}) {
    return (
        <SimpleBar style={{ maxHeight: 800}}>
            <div className="gallery">
            {characters.map((character) => (
            <figure character={character} key={character._id} className="card">
                <img src={character.image} alt={character.name}/>
                <figcaption>
                    <Link to={`/characters/${character.name}`}>{character.name}</Link>
                </figcaption>
            </figure>))}
        </div>
        </SimpleBar>
    )
}