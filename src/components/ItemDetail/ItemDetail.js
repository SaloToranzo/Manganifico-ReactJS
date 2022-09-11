import './ItemDetail.css'

const ItemDetail = ({product}) =>{
    console.log(product)
    return (
        <div className="itemDetailContainer">
            <h2 className="itemTitle">{product.title}</h2>
            <img src={product.pictureUrl} alt={product.title} className="itemImg"/>
            <h3 className="itemPrice">{product.price}</h3>
            <p className="itemDetail">{product.detail}</p>       
        </div>
    )
};

export default ItemDetail;