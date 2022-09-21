import './ItemList.css'
import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = ({list}) => {
    return (
        <div className="itemList">
            {
                list.map((product) =>(
                    <Link
                        key={product.id}
                        to={'/detail/' + product.id}
                        style={{textDecoration: 'none'}}
                        >
                        <Item
                            title={product.title}
                            price={product.price}
                            pictureUrl={product.pictureUrl}
                            detail={product.detail}
                            category={product.category}
                            stock={product.stock}
                        />
                    </Link>
                ))
            }
        </div>
  );
};

export default ItemList;
