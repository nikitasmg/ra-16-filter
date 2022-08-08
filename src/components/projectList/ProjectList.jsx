import React from 'react';
import s from './projectList.module.scss'

const ProjectList = ({projects}) => {

    const projectsList = projects.map((card, idx) =>
        <div
            className={s.card}
            key={card.img + idx}
        >
            <img
                className={s.img}
                src={card.img}
                alt={card.img}/>
        </div>
    )

    return (
        <div className={s.list}>
            {projectsList}
        </div>
    );
};

export default ProjectList;