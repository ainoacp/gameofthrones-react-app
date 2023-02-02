import { useForm } from "react-hook-form";
import './CharactersSearcher.scss'

export default function CharactersSearcher({ onSubmit }) {
    
    const { register, handleSubmit } = useForm();

    const submit = ({text}) => {
        console.log(text)
        onSubmit(text)
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" {...register("text")} placeholder="Buscar..."/>
        </form>
    )
}