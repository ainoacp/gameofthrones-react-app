import "./HouseCard.scss"

export default function HouseCard({house}){

    return (
    <li className="card-container" key={house._id}>
        <img className="image" alt="logo" src={house.image}/>
        <p className="house-name">{house.name}</p>
    </li>
    );
}