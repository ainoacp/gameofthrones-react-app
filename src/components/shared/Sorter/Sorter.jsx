import './Sorter.scss'

export default function Sorter({ sort }) {

    const sorting = (e) => {
        console.log(e.target.value)
        sort(e.target.value)
    }

    return (
        <div className='button-container'>
            <button onClick={sorting} className='circle'>18</button>
            <button onClick={sorting} className='circle'>999</button>
        </div>
    )
}