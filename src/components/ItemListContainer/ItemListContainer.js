import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({greeting}) =>{
    return(
        <div className='greetingStyle'>
                {greeting}
                <ItemCount />
        </div>
    )
}
export default ItemListContainer;