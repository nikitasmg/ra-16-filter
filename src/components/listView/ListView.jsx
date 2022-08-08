import React from 'react';
import ItemCard from "../itemCard/ItemCard";

const ListView = ({items}) => {
    return (
        <div>
            {items.map(item => <ItemCard card={item} key={item.img}/>)}
        </div>
    );
};

export default ListView;