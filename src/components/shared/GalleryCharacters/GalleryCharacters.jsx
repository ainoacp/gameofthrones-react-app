import { Link } from "react-router-dom";
import './GalleryCharacters.scss'
import SimpleBar from 'simplebar-react';


export default function GalleryCharacters({characters}) {
    return (
        <SimpleBar style={{ maxHeight: 800, marginRight: '200px'}}>
            <div className="gallery">
            {characters.map((character) => (
            <figure character={character} key={character._id} className="card">
                <img src={character.image || 'https://i.pinimg.com/736x/1f/26/0e/1f260eab90fab5cb5df68937981a8994.jpg'} alt={character.name}/>
                <figcaption>
                    <Link to={`/characters/${character.name}`}>{character.name}</Link>
                </figcaption>
            </figure>))}
        </div>
        </SimpleBar>
    )
}