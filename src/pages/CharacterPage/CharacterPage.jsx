import axios from "axios"; 
import './CharacterPage.scss'
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import BackButton from "../../components/shared/BackButton/BackButton";
import TranslatorNavComponent from "../../components/shared/TranslatorNavComponent/TranslatorNavComponent";
import HomeLink from "../../components/shared/HomeLink/HomeLink";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Context } from "../../context/Context";

export default function CharacterPage() {
    const {t} = useContext(Context) 
    let { name } = useParams();
    
    const [character, setCharacter] = useState([]);
    const [house, setHouse] = useState([]);

    const getCharacter = async () => {
        const res = await axios.get(`https://api.got.show/api/show/characters/${name}`);
        // console.log(res.data)
        setCharacter(res.data);
        getBadge(res.data.house);
    }
    
    const getBadge = async (house) => {
        const res = await axios.get(`https://api.got.show/api/book/houses/${house}`);
        // console.log(res.data[0].image);
        setHouse(res.data[0]);
    }

    useEffect(() => { 
        getCharacter();
    }, [name]);
    //Ponemos name para que cuando cambie el parametro de name de la url se ejecute la funcion otra vez

    return (
        <div className="c-character-page">
            <div className="c-character-header">
                    <BackButton/>
                <div className="c-character-buttons">
                    <HomeLink/>
                    <TranslatorNavComponent/>
                </div>
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
                        <h5>{t("CASA")}</h5>
                        <img alt="logo" src={house?.image}/> 
                    </div>
                    <div className="ch-info-container">
                        <h5>{t("ALIANZAS")}</h5>
                        <SimpleBar style={{ maxHeight: 130}}>
                            {character?.allegiances?.map((item,index) => (<Link key={index} to={`/houses/${item}`}>{item}</Link>))}
                        </SimpleBar> 
                    </div>
                    <div className="ch-info-container">
                        <h5>{t("APARICIONES")}</h5>
                        <SimpleBar style={{ maxHeight: 130}}>
                            {character?.appearances?.map((item,index) => (<p key={index}>{item}</p>))} 
                        </SimpleBar>                
                    </div>
                    <div className="ch-info-container">
                        <h5>{t("PADRE")}</h5>
                        <Link to={`/characters/${character?.father}`}>{character?.father}</Link>
                        {/* <p>{character?.father}</p> */}
                    </div>
                    <div className="ch-info-container">
                        <h5>{t("HERMANOS")}</h5>
                        <SimpleBar style={{ maxHeight: 130 }}>
                            {character?.siblings?.map((item,index) => (<Link key={index} to={`/characters/${item}`}>{item}</Link>))}
                        </SimpleBar>
                    </div>
                    <div className="ch-info-container">
                        <h5>{t("TITULOS")}</h5>
                        <SimpleBar style={{ maxHeight: 130 }}>
                        {character?.titles?.map((item,index) => (<p key={index}>{item}</p>))}
                        </SimpleBar>  
                    </div>
                </div>
            </div>
        </div>
    )
}