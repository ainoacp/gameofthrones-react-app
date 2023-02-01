import { useEffect, useState } from "react";
import axios from "axios";
import NavComponent from "../../components/shared/NavComponent/NavComponent";
import "./HousesPages.scss";
import HouseCard from "./components/HouseCard/HouseCard";

export default function HousesPage(){
    
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        async function getHouses(){
            const res = await axios.get('https://api.got.show/api/show/houses');
            //Filter 1
            const resFiltered = res.data.filter((item) => typeof item.logoURL === 'string');
            // //Filter 2
            // const resFiltered2 = [];
            // for (let item of resFiltered){
            //     if(imageExists(item.logoURL)){
            //         resFiltered2.push(item);
            //     }
            // }
            // setHouses(resFiltered2);
            setHouses(resFiltered);
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

    return (
        <div className="houses-main">
            <header>
                <div>Buscador</div>
            </header>
            <main>
                <div className="card-section">
                    <ul className="card-list">
                        {houses.map((house)=> (
                            <HouseCard house={house}/>
                        ))}
                    </ul>
                </div>
            </main>
            <NavComponent/>
        </div>
    )
}