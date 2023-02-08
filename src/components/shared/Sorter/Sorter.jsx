import './Sorter.scss'

export default function Sorter({sort, setSort, age }) {

    const sorting = (e) => {
        if(sort==='Ascending'){
            setSort('Descending');
        } else if (sort==='Descending'){
            setSort('Ascending');
        }
    }

    return (
        <>
            <div className='button-container'>
                <button onClick={sorting} className='circle'>{age}</button>
                <div className='line'>
                    {sort==='Ascending' && <div className='flecha'>{'>'}</div>}
                    {sort==='Descending' && <div className='flecha'>{'<'}</div>}
                </div>
            </div>
            
        </>
        
    )
}