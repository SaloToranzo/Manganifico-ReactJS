import Item from "../Item/Item";

const ItemList = ({list}) => {
    return (
        <div className="itemListContainer">
            {
                list.map((product) =>(
                    <Item
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    pictureUrl={product.pictureUrl}
                    />
                ))
            }
        </div>
  );
};

export default ItemList;
