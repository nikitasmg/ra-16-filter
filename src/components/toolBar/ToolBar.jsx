import React from 'react';
import s from './toolBar.module.scss'
import cn from 'classnames'

const ToolBar = ({filters, selected, onSelectFilter}) => {

    return (
        <ul className={s.list}>
            {
                filters.map(el =>
                    <li
                        className={cn(s.item, {[s.active]: selected === el})}
                        key={el}
                        onClick={() => onSelectFilter(el)}
                    >
                        {el}
                    </li>
                )
            }
        </ul>
    );
};

export default ToolBar;