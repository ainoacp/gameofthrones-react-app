import NavComponent from "../../components/shared/NavComponent/NavComponent";
import TranslatorNavComponent from "../../components/shared/TranslatorNavComponent/TranslatorNavComponent";
import "./HomePage.css"

export default function HomePage(){


    return (
        <>
        <div className="container">
            <TranslatorNavComponent className="translator-nav"></TranslatorNavComponent>
        
        
            <h1 className="title">GAMES OF TRONES</h1>
        
            <div className="nav-component">
                <NavComponent/>
            </div>
        </div>
        </>
    )
}