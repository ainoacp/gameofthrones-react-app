// import '../../components/shared/NavComponent/NavComponent'
// import '../../components/shared/TranslatorNavComponent/TranslatorNavComponent'
// import '../../components/shared/HouseLink/HouseLink'
// import NavComponent from '../../components/shared/NavComponent/NavComponent'
import axios from "axios";
import { useEffect, useState } from "react";
import ChronologyGallery from "../../components/shared/ChronologyGallery/ChronologyGallery";

export default function CronologyPage(){
    const [characters, setCharacters] = useState([])
    const getCharacters = async () => {
        const res = await axios.get(`https://api.got.show/api/show/characters/`);
        console.log(res);
        setCharacters(res.data);
    }
    useEffect(() => {getCharacters('')}, [])
    return <div>
        <h1>Cronology</h1>
        <ChronologyGallery characters={characters}></ChronologyGallery>
    </div>
}