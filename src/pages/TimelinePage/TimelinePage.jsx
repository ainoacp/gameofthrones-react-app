import HomeLink from "../../components/shared/HomeLink/HomeLink";
import TranslatorNavComponent from "../../components/shared/TranslatorNavComponent/TranslatorNavComponent";
import NavComponent from '../../components/shared/NavComponent/NavComponent'
import axios from "axios";
import { useEffect, useState } from "react";
import TimelineGallery from "../../components/shared/TimelineGallery/TimelineGallery";
import Sorter from "../../components/shared/Sorter/Sorter";
import './TimelinePage.scss'

export default function TimelinePage() {

    const [characters, setCharacters] = useState([]);
    const [sort, setSort] = useState('Ascending');
    const [age, setAge] = useState(0);

    const getCharacters = async () => {
        const res = await axios.get(`https://api.got.show/api/show/characters/`);

        const sortedCharacters = sortCharacters(res.data);
        
        setCharacters(sortedCharacters);
    }

    const sortCharacters = (characters) => {
        let sortedCharacters = [];

        const resAgeNoNull = characters.filter((item) => item?.age?.age !== null && item?.age !== null && item?.age?.age);
        if(sort === 'Ascending'){
            sortedCharacters = resAgeNoNull.sort((a, b) => (a.age.age > b.age.age) ? 1 : -1);
        } else if (sort === 'Descending') {
            sortedCharacters = resAgeNoNull.sort((a, b) => (a.age.age > b.age.age) ? -1 : 1);
        }

        setAge(sortedCharacters[0].age.age);
        
        return sortedCharacters;
    }

    useEffect(() => {
        getCharacters()
    }, [sort]);

    return (
        <div className="c-timeline-page">
            <div className="c-timeline-header">
                <HomeLink/>
                <TranslatorNavComponent/>
            </div>
            <div className="c-timeline-main">
                <Sorter setSort={setSort} sort={sort} age={age}></Sorter>
                <TimelineGallery characters={characters}></TimelineGallery>
            </div>
            <div className="c-characters-footer">
                <NavComponent/>
            </div>
        </div>
    )
}