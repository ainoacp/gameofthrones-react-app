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
    const [done, setDone] = useState(false);

    const getCharacter = async () => {
        const res = await axios.get(`https://api.got.show/api/show/characters/${name}`);
        console.log(res.data)
        setCharacter(res.data);
        const house = character.house;
        return house;
    }
    
    const getBadge = async (houseName) => {
        const res = await axios.get(`https://api.got.show/api/book/houses/${houseName}`);
        setHouseName(res.data[0]);
    }

    useEffect(() => { 
        getCharacter().then((house) => getBadge(house)).then(()=>{
            setDone(true);
        });
    }, [done, name]);
    //Variable done para que cuando se ejecuten las funciones vuelva a cargar la página
    //Ponemos también name para que cuando cambie el parametro de name de la url se ejecute la funcion otra vez

    return (
        <div className="c-character-page">
            <div className="c-character-header">
                <BackButton/>
                <HomeLink/>
                <TranslatorNavComponent/>
            </div>
            <div className="ch-main">
                <div className="ch-img-section">
                    <img alt="img" src={character?.image}/>
                    <div className="ch-img-section__name-container">
                        <h3>{character?.name}</h3>
                    </div>
                </div>
                <div className="ch-info-section">
                    <div className="ch-info-container">
                        <h5>CASA</h5>
                        <img alt="logo" src={houseName?.image}/>
                    </div>
                    <div className="ch-info-container">
                        <h5>ALIANZAS</h5>
                        <SimpleBar style={{ maxHeight: 130}}>
                            {character?.allegiances?.map((item,index) => (<Link key={index} to={`/houses/${item}`}>{item}</Link>))}
                        </SimpleBar> 
                    </div>
                    <div className="ch-info-container">
                        <h5>APARICIONES</h5>
                        <SimpleBar style={{ maxHeight: 130}}>
                            {character?.appearances?.map((item,index) => (<p key={index}>{item}</p>))} 
                        </SimpleBar>                
                    </div>
                    <div className="ch-info-container">
                        <h5>PADRE</h5>
                        <Link to={`/characters/${character?.father}`}>{character?.father}</Link>
                        {/* <p>{character?.father}</p> */}
                    </div>
                    <div className="ch-info-container">
                        <h5>HERMANOS</h5>
                        <SimpleBar style={{ maxHeight: 130 }}>
                            {character?.siblings?.map((item,index) => (<Link key={index} to={`/characters/${item}`}>{item}</Link>))}
                        </SimpleBar>
                    </div>
                    <div className="ch-info-container">
                        <h5>TITULOS</h5>
                        <SimpleBar style={{ maxHeight: 130 }}>
                        {character?.titles?.map((item,index) => (<p key={index}>{item}</p>))}
                        </SimpleBar>  
                    </div>
                </div>
            </div>
        </div>
    )
}