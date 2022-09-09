import './Item.css'

const Item = ({title, price, pictureUrl}) => {
    return (
        <div className="itemContainer">
            <img className="itemImg" src={pictureUrl} alt={title}/>
            <h2 className="itemTitle">{title}</h2>
            <h3 className="itemPrice">{price}</h3>
        </div>
  )
};

export default Item;
