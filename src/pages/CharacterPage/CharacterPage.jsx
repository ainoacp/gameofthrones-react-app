import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CharacterPage() {
    
    let { name } = useParams();
    
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        async function getCharacter(){
            const res = await axios.get(`https://api.got.show/api/show/characters/${name}`);
            console.log(res.data)
            setCharacter(res.data[0]);
        }
        getCharacter();
    }, []);

    return (
        <div className="main">
            {/* <BackButton></BackButton> */}
            <div className="img-section">
                <img alt="img" src={character.image}/>
                <h3>{character.name}</h3>
            </div>
            <div className="info-section">
                <div className="info-container">
                    <h5>CASA</h5>
                    {/* <p>{character.logoURL}</p> */}
                </div>
                <div className="info-container">
                    <h5>ALIANZAS</h5>
                    <p>{character.seat}</p>
                </div>
                <div className="info-container">
                    <h5>APARICIONES</h5>
                    <p>{character.region}</p>                   
                </div>
                <div className="info-container">
                    <h5>PADRE</h5>
                    <p>{character?.allegiance?.map((item) => (<p>{item}</p>))}</p>
                </div>
                <div className="info-container">
                    <h5>RELIGIONES</h5>
                    <p>{character?.religion?.map((item) => (<p>{item}</p>))}</p>  
                </div>
            </div>
        </div>
    )
}