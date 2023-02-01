import axios from "axios";
import { useState,useEffect } from "react";
import "./HousePage.scss";

export default function HousePage(){

    const [house, setHouse] = useState([]);

    useEffect(() => {
        async function getHouse(){
            const res = await axios.get('https://api.got.show/api/show/houses/House%20Stark');
            setHouse(res.data[0]);
        }
        getHouse();
    }, []);

    return (
        <div className="main">
            <div className="logo-section">
                <img alt="logo" src={house.logoURL}/>
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
    )
}