import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = ({list}) => {
    return (
        <div className="itemListContainer">
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
                        />
                    </Link>
                ))
            }
        </div>
  );
};

export default ItemList;
