import './Searcher.scss'

export default function CharactersSearcher({ search }) {

    const change = (e) => {
        console.log(e.target.value)
        search(e.target.value)
    }
    return (
        <div className="form-container">
            <form className="form">
                <img alt="lupa" src="./images/lupa.png"/>
                <input type="text" onChange={change} placeholder="Buscar..."/>
            </form>
        </div>
    )
}