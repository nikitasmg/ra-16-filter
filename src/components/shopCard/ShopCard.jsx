import React from 'react';
import s from './shopCard.module.scss'

const ShopCard = ({card}) => {
    return (
        <div className={s.card} >
            <h2 className={s.name}>{card.name}</h2>
            <span className={s.color}> {card.color}</span>
            <img className={s.img} src={card.img} alt={card.name}/>
            <div className={s.info}>
                <span className={s.price}>${card.price}</span>
                <button className={s.button}>Add to cart</button>
            </div>
        </div>
    );
};

export default ShopCard;