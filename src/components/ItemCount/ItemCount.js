import './ItemCount.css'

const ItemCount = ({ counter, setCounter, stock }) =>{
    const sum = () => {
        counter < stock ? setCounter(counter +1) : alert('No hay más stock')
    }

    const substract = () =>{
        counter > 0 ? setCounter(counter -1) : alert('El carrito esta vacio')
    }
    
    const onAdd = () =>{
        alert(`${counter} productos agregados al carrito`);
    }
    
    return (
        <div className="itemCount">
            <div className='buttonContainer'>
                <button onClick={substract} className="counterButton">-</button>
                <h2 className='counter'>{counter}</h2>
                <button onClick={sum} className="counterButton">+</button>
            </div>
            <div className='cartBtn'>
                <button className='addToCart' onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    )

}

export default ItemCount;