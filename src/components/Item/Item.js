import './Item.css'

const Item = ({title, price, pictureUrl}) => {
    return (
        <div className="itemContainer">
            <div>
                <img className="itemImg" src={pictureUrl} alt={title}/>
                <h2 className="itemTitle">{title}</h2>
                <p className="itemPrice">{price}</p>
            </div>
        </div>
  )
};

export default Item;
