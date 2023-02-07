import { Link } from "react-router-dom";
import './GalleryHouses.scss'
import SimpleBar from 'simplebar-react';
import HouseCard from "./HouseCard/HouseCard";
            
export default function GalleryHouses({houses}) {
    return (
        <div className="houses-page">
            <SimpleBar style={{ maxHeight: 800, marginRight: 100}}>
            <div className="gallery-houses">
                {houses.map((house)=> (
                    <Link key={house._id} to={`/houses/${house.name}`}>
                        <HouseCard house={house}/>
                    </Link>
                ))}
            </div>
            </SimpleBar>
        </div>
                    
    )
}