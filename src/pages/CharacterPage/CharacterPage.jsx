import axios from "axios"; 
import './CharacterPage.scss'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import BackButton from "../../components/shared/BackButton/BackButton";
import TranslatorNavComponent from "../../components/shared/TranslatorNavComponent/TranslatorNavComponent";
import HomeLink from "../../components/shared/HomeLink/HomeLink";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export default function CharacterPage() {
    
    let { name } = useParams();
    
    const [character, setCharacter] = useState([]);
    const [houseName, setHouseName] = useState([]);

    const getCharacter = async () => {
        const res = await axios.get(`https://api.got.show/api/show/characters/${name}`);
        console.log(res.data)
        setCharacter(res.data);
        let houseName = character.house;
        getBadge(houseName);
    }
    const getBadge = async (houseName) => {
        const res = await axios.get(`https://api.got.show/api/book/houses/${houseName}`);
        console.log(res.data)
        setHouseName(res.data[0]);
    }
    useEffect(() => { 
        getCharacter();
        // getBadge();
    }, [houseName]);

    return (
        <>
            <div className="c-character-header">
                <BackButton/>
                <HomeLink/>
                <TranslatorNavComponent/>
            </div>
            <div className="ch-main">
                <div className="ch-img-section">
                    <img alt="img" src={character?.image}/>
                    <h3>{character?.name}</h3>
                </div>
                <div className="ch-info-section">
                    <div className="ch-info-container">
                        <h5>CASA</h5>
                        <img alt="logo" src={houseName?.image}/> 
                        {/* FUNCIONA PERO HACE UNA PETICIÓN INFINITA, cómo puedo hacer para que al ver character.house vaya a houses y coja la imagen? */}
                    </div>
                    <div className="ch-info-container">
                        <h5>ALIANZAS</h5>
                        <SimpleBar style={{ maxHeight: 230}}>
                            {character?.allegiances?.map((item) => (<p>{item}</p>))}
                        </SimpleBar> 
                    </div>
                    <div className="ch-info-container">
                        <h5>APARICIONES</h5>
                        <SimpleBar style={{ maxHeight: 230}}>
                            {character?.appearances?.map((item) => (<p>{item}</p>))} 
                        </SimpleBar>                
                    </div>
                    <div className="ch-info-container">
                        <h5>PADRE</h5>
                        <Link to={`/characters/${character?.father}`}>{character?.father}</Link>
                        {/* <p>{character?.father}</p> */}
                    </div>
                    <div className="ch-info-container">
                        <h5>HERMANOS</h5>
                        <SimpleBar style={{ maxHeight: 230 }}>
                            {character?.siblings?.map((item) => (<Link to={`/characters/${item}`}>{item}</Link>))}
                        </SimpleBar>
                    </div>
                    <div className="ch-info-container">
                        <h5>TITULOS</h5>
                        <SimpleBar style={{ maxHeight: 230 }}>
                        {character?.titles?.map((item) => (<p>{item}</p>))}
                        </SimpleBar>  
                    </div>
                </div>
            </div>
        </>
    )
}