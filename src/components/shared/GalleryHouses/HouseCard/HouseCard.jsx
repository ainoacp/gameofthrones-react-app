import "./HouseCard.scss"

export default function HouseCard({house}){

    return (
    <figure className="card-container" key={house._id}>
        <img className="image" alt="logo" src={house.image}/>
        <p className="house-name">{house.name}</p>
    </figure>
    );
}