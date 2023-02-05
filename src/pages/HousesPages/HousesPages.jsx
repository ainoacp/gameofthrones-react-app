import { useEffect, useState } from "react";
import axios from "axios";
import NavComponent from "../../components/shared/NavComponent/NavComponent";
import TranslatorNavComponent from "../../components/shared/TranslatorNavComponent/TranslatorNavComponent";
import "./HousesPages.scss";
import HouseCard from "./components/HouseCard/HouseCard";
import { Link } from "react-router-dom";
import Searcher from "../../components/shared/Searcher/Searcher";
import SimpleBar from 'simplebar-react';

export default function HousesPage(){
    
    const [houses, setHouses] = useState([]);
    const [filteredHouses, setFilterHouses] = useState([])

    useEffect(() => {
        async function getHouses(){
            const res = await axios.get('https://api.got.show/api/book/houses');
            //Filter 1
            const resFiltered = res.data.filter((item) => typeof item.image === 'string');
            // //Filter 2
            // const resFiltered2 = [];
            // for (let item of resFiltered){
            //     if(imageExists(item.logoURL)){
            //         resFiltered2.push(item);
            //     }
            // }
            setHouses(resFiltered);
            // setHouses(res.data);
            // console.log(res.data)
            setFilterHouses(resFiltered);
        }
        getHouses();
    }, []);

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

    return (
        <div className="houses-main">
            <div className="header-houses">
                <Searcher onSubmit={filterHouses}/>
                <div className="header-houses-lang">
                    <TranslatorNavComponent/> 
                </div>
            </div>
            <div className="card-section">
                <SimpleBar style={{ maxHeight: 800, marginRight: 20}}>
                    <ul className="card-list"> 
                        {filteredHouses.map((house)=> (
                            <Link key={house._id} to={`/houses/${house.name}`}>
                                <HouseCard house={house}/>
                            </Link>
                        ))}
                    </ul>
                </SimpleBar>
            </div>
            <div className="nav-houses">
                <NavComponent className="searcher-hoouses"/>
            </div>
        </div>
    )
}