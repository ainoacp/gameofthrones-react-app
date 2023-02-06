import axios from "axios";
import './CharactersPage.scss'
import { useEffect, useState } from "react";
import GalleryCharacters from "../../components/shared/GalleryCharacters/GalleryCharacters";
import NavComponent from "../../components/shared/NavComponent/NavComponent";
import TranslatorNavComponent from "../../components/shared/TranslatorNavComponent/TranslatorNavComponent";
import Searcher from "../../components/shared/Searcher/Searcher";
import HomeLink from "../../components/shared/HomeLink/HomeLink";


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
            <div className="c-characters-header">
                <HomeLink/>
                <TranslatorNavComponent/>
            </div>
            <div className="c-characters-main">
                <Searcher search={filterCharacters}/>
                <GalleryCharacters characters={filteredCharacters}/>
            </div>
            <div className="c-characters-footer">
                <NavComponent/>
            </div>
        </div>
    )
} 