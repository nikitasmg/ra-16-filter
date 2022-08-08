import React from 'react';
import ShopCard from "../shopCard/ShopCard";
import s from './cardView.module.scss'

const CardsView = ({cards}) => {
    return (
        <div className={s.list}>
            {cards.map(card => <ShopCard key={card.img} card={card}/>)}
        </div>
    );
};

export default CardsView;