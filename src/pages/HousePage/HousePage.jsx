//import { ErrorResponse } from "@remix-run/router";
import axios from "axios";
import { useState,useEffect } from "react";
import "./HousePage.scss";
import { useParams } from 'react-router-dom';
import BackButton from "../../components/shared/BackButton/BackButton";
import TranslatorNavComponent from "../../components/shared/TranslatorNavComponent/TranslatorNavComponent";
import HomeLink from "../../components/shared/HomeLink/HomeLink";

export default function HousePage(){

    const {name} = useParams();

    const [house, setHouse] = useState([]);

    useEffect(() => {
        async function getHouse(){
            const res = await axios.get(`https://api.got.show/api/book/houses/${name}`);
            console.log(res.data)
            setHouse(res.data[0]);
        }
        getHouse();
    }, []);

    return (
        <>
            <div className="c-house-header">
                    <BackButton/>
                    <HomeLink/>
                    <TranslatorNavComponent/>
            </div>
            <div className="main">
                <div className="logo-section">
                    <img alt="logo" src={house.image}/>
                    <h3>{house.name}</h3>
                </div>
                <div className="info-section">
                    <div className="info-container">
                        <h5>LEMA</h5>
                        <p>{house.words}</p>
                    </div>
                    <div className="info-container">
                        <h5>SEDE</h5>
                        <p>{house.seat}</p>
                    </div>
                    <div className="info-container">
                        <h5>REGION</h5>
                        <p>{house.region}</p>                   
                    </div>
                    <div className="info-container">
                        <h5>ALIANZAS</h5>
                        <p>{house?.allegiance?.map((item) => (<p>{item}</p>))}</p>
                    </div>
                    <div className="info-container">
                        <h5>RELIGIONES</h5>
                        <p>{house?.religion?.map((item) => (<p>{item}</p>))}</p>  
                    </div>
                </div>
            </div>
        </>
    )
}