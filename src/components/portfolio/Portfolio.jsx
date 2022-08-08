import React, {useMemo, useState} from 'react';
import ToolBar from "../toolBar/ToolBar";
import ProjectList from "../projectList/ProjectList";
import {cards} from "../../data/cards";
import s from './portfolio.module.scss'

const Portfolio = () => {

    const [filter, setFilter] = useState('Websites')

    const activeItems = useMemo(() => {
        if (filter === 'All') {
            return cards
        } else {
            return cards.filter(el => el.category === filter)
        }
    }, [filter])

    return (
        <div className={s.container}>
            <ToolBar filters={["All", "Websites", "Flayers", "Business Cards"]}
                     selected={filter}
                     onSelectFilter={(filter) => {
                         setFilter(filter)
                     }}/>
            <ProjectList projects={activeItems}/>
        </div>
    );
};

export default Portfolio;
