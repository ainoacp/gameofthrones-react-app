import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';

import "./BackButton.scss";

export default function BackButton(){

    const [prevUrl,setPrevUrl] = useState('');

    useEffect(() => {
        //Obtain  path url and split it by "/"
        const urlArray = window.location.pathname.split('/');
        //Eliminate last element after "/"
        urlArray.pop()
        //Create variable prevUrlArray
        const prevUrlArray = [...urlArray]
        //Join prevUrlArray by "/" to get prevUrl
        const prevUrl = prevUrlArray.join('/');
        //Set prevUrl
        setPrevUrl(prevUrl)
    }, []);

    return (
        <div className="back-button-container">
            <Link to={prevUrl}>
                <button> Volver</button>
            </Link>
        </div>
    )
}