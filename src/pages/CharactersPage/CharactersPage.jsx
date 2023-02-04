import axios from "axios";
import './CharactersPage.scss'
import { useEffect, useState } from "react";
import GalleryCharacters from "../../components/shared/GalleryCharacters/GalleryCharacters";
import NavComponent from "../../components/shared/NavComponent/NavComponent";
import CharactersSearcher from "../../components/shared/CharactersSearcher/CharactersSearcher";
// import TranslatorNavComponent from "../../components/shared/TranslatorNavComponent/TranslatorNavComponent";
// import HouseLink from "../../components/shared/HouseLink/HouseLink";

export default function CharactersPage(){

    const [characters, setCharacters] = useState([])
    const [filteredCharacters, setFilterCharacters] = useState([])
    

    const getCharacters = async () => {
        const res = await axios.get(`https://api.got.show/api/show/characters/`);
        console.log(res);
        setCharacters(res.data);
        setFilterCharacters(res.data);
    }
    const filterCharacters = async (searchText) => {
        let newCharacters = characters.filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()))
        setFilterCharacters(newCharacters);
    }
    useEffect(() => {getCharacters('')}, [])
    return (
        <div className="c-characters-page">
            {/* <TranslatorNavComponent/>
            <HouseLink/> */}
            <CharactersSearcher onSubmit={filterCharacters}/>
            <GalleryCharacters characters={filteredCharacters}/>
            <NavComponent/>
        </div>
    )
} 