import './Item.css'

const Item = ({title, price, image}) => {
    return (

        <div class="cardItem">
            <img src={image} className="card-img-top" alt={title}/>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">${price}</p>
                </div>
        </div>
  )
};

export default Item;
