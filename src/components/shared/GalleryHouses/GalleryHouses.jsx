import { Link } from "react-router-dom";
import './GalleryHouses.scss'
import SimpleBar from 'simplebar-react';
import HouseCard from "./HouseCard/HouseCard";
            
export default function GalleryHouses({houses}) {
    return (
        <SimpleBar style={{ maxHeight: 800, marginRight: 100}}>
        <div className="gallery">
            {houses.map((house)=> (
                <Link key={house._id} to={`/houses/${house.name}`}>
                    <HouseCard house={house}/>
                </Link>
            ))}
        </div>
        </SimpleBar>
                    
    )
}