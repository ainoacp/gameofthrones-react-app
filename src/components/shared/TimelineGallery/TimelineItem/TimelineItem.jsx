import './TimelineItem.scss'

export default function TimelineItem({character}) {
    return (
        <div key={character._id} className="c-timeline-item">
            <figure className="c-timeline-item_content">
                <p>{character?.age?.age}</p>
                <p>{character.name}</p>
                <img className="c-timeline-img" src={character.image} alt="character" width={20}/>
            </figure>
        </div>
    )
}