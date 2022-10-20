import './ItemCount.css'

const ItemCount = ({ count, setCount, stock }) =>{
    const sum = () => {
        count < stock ? setCount(count +1) : alert('No hay más stock')
    }

    const substract = () =>{
        count > 0 ? setCount(count -1) : alert('El carrito esta vacio')
    }
    
    
    
    return (
        <div className="itemCount">
            <div className='buttonContainer'>
                <button onClick={substract} className="counterButton">-</button>
                <h2 className='counter'>{count}</h2>
                <button onClick={sum} className="counterButton">+</button>
            </div>
        </div>
    )

}

export default ItemCount;