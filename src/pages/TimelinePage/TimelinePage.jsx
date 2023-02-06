import HomeLink from "../../components/shared/HomeLink/HomeLink";
import TranslatorNavComponent from "../../components/shared/TranslatorNavComponent/TranslatorNavComponent";
import NavComponent from '../../components/shared/NavComponent/NavComponent'
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import TimelineGallery from "../../components/shared/TimelineGallery/TimelineGallery";
import './TimelinePage.scss'

export default function TimelinePage() {

    const [characters, setCharacters] = useState([])
    // const [sort, setSort] = useState(['default'])

    const getCharacters = async () => {
        const res = await axios.get(`https://api.got.show/api/show/characters/`);
        console.log(res);
        setCharacters(res.data);
        // setSort(res.data.age.age);
    }
    // const sorting = [...characters].sort((characterOlder, characterYoungest) => {
    //     return characterYoungest[sort] - characterOlder[sort]});

    // const sorting = characters
    //     .filter(character => character.age && character.age.age)
    //     .sort((prev, next) => {
    //     return next.age - prev.age;
    // })

    // const sortAge = async (res) => {
    //     let result = res.data;
    //     if (sort === 'descending') {
    //         result = [...res.data].sort((a, b) => {
    //             return b.age.localeCompare(a.age);
    //         });
    //     } else if (sort === "ascending") {
    //         result = [...res.data].sort((a, b) => {
    //             return a.age.localeCompare(b.age)
    //         });
    //     }
    //     return result;
    // };

    useEffect(() => {getCharacters('')}, [])
    return (
        <div className="c-timeline-page">
            <div className="c-timeline-header">
                <HomeLink/>
                <TranslatorNavComponent/>
            </div>
            <div className="c-timeline-main">
                <TimelineGallery characters={characters}></TimelineGallery>
            </div>
            <div className="c-characters-footer">
                <NavComponent/>
            </div>
        </div>
    )
}