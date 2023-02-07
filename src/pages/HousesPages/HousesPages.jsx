import { useEffect, useState } from "react";
import axios from "axios";
import NavComponent from "../../components/shared/NavComponent/NavComponent";
import TranslatorNavComponent from "../../components/shared/TranslatorNavComponent/TranslatorNavComponent";
import "./HousesPages.scss";
import Searcher from "../../components/shared/Searcher/Searcher";
import HomeLink from "../../components/shared/HomeLink/HomeLink";
import GalleryHouses from "../../components/shared/GalleryHouses/GalleryHouses";

export default function HousesPage(){
    
    const [houses, setHouses] = useState([]);
    const [filteredHouses, setFilterHouses] = useState([])

    const getHouses = async () => {
        const res = await axios.get('https://api.got.show/api/book/houses');
        const resFiltered = res.data.filter((item) => typeof item.image === 'string');
        setHouses(resFiltered);
        setFilterHouses(resFiltered);
    }

    function imageExists(image_url){
        var http = new XMLHttpRequest();
        http.open('HEAD', image_url, false);
        http.send();
        if(http.status !== 404){
            return true;
        } else {
            return false;
        }
    }

    const filterHouses = async (searchText) => {
        let newHouses = houses.filter((house) => house.name.toLowerCase().includes(searchText.toLowerCase()))
        setFilterHouses(newHouses);
    }
    useEffect(() => {getHouses('')}, [])
    
    return (
        <div className="c-houses-page">
            <div className="c-houses-header">
                <div className="c-houses-form-container">
                    <Searcher onSubmit={filterHouses}/>
                </div>
                <div className="c-houses-buttons">
                    <HomeLink/>
                    <TranslatorNavComponent/>
                </div>
            </div>
            <div className="c-houses-main">
                <GalleryHouses houses={filteredHouses}/>
            </div>
            <div className="c-footer-houses">
                <NavComponent/>
            </div>
        </div>
    )
}