import React, {useMemo, useState} from 'react';
import IconSwitch from "../iconSwitch/IconSwitch";
import CardsView from "../cardsView/CardsView";
import ListView from "../listView/ListView";
import {products} from "../../data/products";
import s from './store.module.scss'
import cn from "classnames";
const Store = () => {
    const [isCardView, setIsCardView] = useState(true)

    const currenView = useMemo(() => {
        if (isCardView) {
            return <CardsView cards={products}/>
        } else {
            return <ListView items={products}/>
        }
    }, [isCardView])

    return (
        <div className={s.container}>
            <IconSwitch
                className={cn(s.switcher, 'material-icons')}
                icon={isCardView ? 'view_module' : 'view_list'}
                onSwitch={() => setIsCardView(!isCardView)}/>
            {currenView}
        </div>
    );
};

export default Store;