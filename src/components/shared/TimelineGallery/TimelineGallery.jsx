import TimelineItem from "./TimelineItem/TimelineItem";
// import SimpleBar from 'simplebar-react';
import './TimelineGallery.scss'

export default function TimelineGallery({characters}) {
    return (
        // <SimpleBar style={{ maxHeight: 800, marginRight: 100}}>
        <>
        {/* <div onChange={(e) => setSort(e.target.value)}>
                <button className='circleAsc'>18</button>
                <button className='circleDsc'>999</button>
            </div> */}
            <button className='circle'>18</button>
            <div className="c-timeline-container">
                {characters.map((character) => (
                    <TimelineItem character={character}/>
                ))}
            </div>
        </>
// </SimpleBar>
    )
}