import { useEffect, useState } from "react";
import axios from "axios";
import NavComponent from "../../components/shared/NavComponent/NavComponent";
import "./HousesPages.scss";
import Searcher from "../../components/shared/Searcher/Searcher";
import TranslatorNavComponent from "../../components/shared/TranslatorNavComponent/TranslatorNavComponent";
import HomeLink from "../../components/shared/HomeLink/HomeLink";
import GalleryHouses from "../../components/shared/GalleryHouses/GalleryHouses"

export default function HousesPage(){
    
    const [houses, setHouses] = useState([]);
    const [filteredHouses, setFilterHouses] = useState([])

    // useEffect(() => {
    //     async function getHouses(){
    //         const res = await axios.get('https://api.got.show/api/book/houses');
    //         //Filter 1
    //         const resFiltered = res.data.filter((item) => typeof item.image === 'string');
    //         // //Filter 2
    //         // const resFiltered2 = [];
    //         // for (let item of resFiltered){
    //         //     if(imageExists(item.logoURL)){
    //         //         resFiltered2.push(item);
    //         //     }
    //         // }
    //         setHouses(resFiltered);
    //         // setHouses(res.data);
    //         // console.log(res.data)
    //         setFilterHouses(resFiltered);
    //     }
    //     getHouses();
    // }, []);

    const getHouses = async () => {
        const res = await axios.get('https://api.got.show/api/book/houses');
        console.log(res);
        setHouses(res.data);
        setFilterHouses(res.data);
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
        <div className="houses-main">
            <div className="c-houses-header">
                    <HomeLink/>
                    <TranslatorNavComponent/>
            </div>
            <Searcher onSubmit={filterHouses}/>
            <GalleryHouses houses={filteredHouses}/>
            <NavComponent/>
        </div>
    )
}