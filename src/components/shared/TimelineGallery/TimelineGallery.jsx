import TimelineItem from "./TimelineItem/TimelineItem";
import SimpleBar from 'simplebar-react';
import './TimelineGallery.scss'

export default function TimelineGallery({characters}) {
    return (
        <div className="c-timeline-gallery">
            <SimpleBar style={{ maxHeight: 800, marginRight: 100}}>

                <div className="c-timeline-container">
                    {characters.map((character) => (
                        <TimelineItem character={character}/>
                    ))}
                </div>
            </SimpleBar>
        </div>
    )
}