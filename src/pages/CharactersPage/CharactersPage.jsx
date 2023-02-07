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

    const imagesUrlsFail = [
        'https://vignette.wikia.nocookie.net/gameofthrones/images/a/a8/Davos_s8_ep2_infobox.jpg/revision/latest/scale-to-width-down/319?cb=20190422024848',
        'https://vignette.wikia.nocookie.net/gameofthrones/images/9/96/Oberyn-Martell-house-martell-37118334-2832-4256.jpg/revision/latest/scale-to-width-down/333?cb=20150815065729',
        'https://vignette.wikia.nocookie.net/gameofthrones/images/6/63/GENDRYAKOFTSK.PNG/revision/latest?cb=20190422030504',
        'https://vignette.wikia.nocookie.net/gameofthrones/images/1/1b/Grenn.jpg/revision/latest?cb=20180702193920',
        'https://vignette.wikia.nocookie.net/gameofthrones/images/a/af/Mossador-s5e1-v2.jpg.jpg/revision/latest/scale-to-width-down/265?cb=20150427224509',
        'https://vignette.wikia.nocookie.net/gameofthrones/images/e/eb/S06E05_-_Kinvara_%281%29.jpg/revision/latest/scale-to-width-down/339?cb=20160812222946'
    ]

    const getCharacters = async () => {
        const res = await axios.get(`https://api.got.show/api/show/characters/`);
        console.log(res);
        let fixedCharacter = res.data.map((character) => {
            if (imagesUrlsFail.includes(character?.image)) {
                console.log(character.image)
                character.image = null; 
                return character;
            } 
            return character;
        })
        setCharacters(fixedCharacter);
        setFilterCharacters(fixedCharacter);
    }

    const filterCharacters = async (searchText) => {
        let newCharacters = characters.filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()))
        setFilterCharacters(newCharacters);
    }
    useEffect(() => {getCharacters('')}, [])
    return (
        <div className="c-characters-page">
            <div className="c-characters-header">
                <div className="c-characters-form-container">
                    <Searcher search={filterCharacters}/>
                </div>
                <div className="c-characters-buttons">
                    <HomeLink/>
                    <TranslatorNavComponent/>
                </div>
            </div>
            <div className="c-characters-main">
                <GalleryCharacters characters={filteredCharacters}/>
            </div>
            <div className="c-characters-footer">
                <NavComponent/>
            </div>
        </div>
    )
} 