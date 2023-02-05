import { useForm } from "react-hook-form";
import './Searcher.scss'

export default function CharactersSearcher({ onSubmit }) {
    
    const { register, handleSubmit } = useForm();

    const submit = ({text}) => {
        console.log(text)
        onSubmit(text)
    }
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit(submit)}>
                <img alt="lupa" src="./images/lupa.png"></img>
                <input type="text" {...register("text")} placeholder="Buscar..."/>
            </form>
        </div>
    )
}