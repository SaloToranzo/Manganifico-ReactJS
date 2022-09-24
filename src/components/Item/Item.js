import './Item.css'

const Item = ({title, price, image}) => {
    return (
        <div className="itemContainer">
            <div>
                <img className="itemImg" src={image} alt={title}/>
                <h2 className="itemTitle">{title}</h2>
                <p className="itemPrice">{price}</p>
            </div>
        </div>
  )
};

export default Item;
