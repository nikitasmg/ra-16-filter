import React from 'react';
import s from './itemCard.module.scss'

const ItemCard = ({card}) => {
    return (
        <div className={s.card}>
            <img className={s.img} src={card.img} alt=""/>
            <h2 className={s.name}>{card.name}</h2>
            <span className={s.color}>{card.color}</span>
            <span className={s.price}>${card.price}</span>
            <button className={s.button}>Add to cart</button>
        </div>
    );
};

export default ItemCard;