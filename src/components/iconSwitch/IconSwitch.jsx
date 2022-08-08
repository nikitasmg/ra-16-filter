import React from 'react';

const IconSwitch = ({icon, onSwitch ,className}) => {
    return (
        <span className={className} onClick={onSwitch}>
            {icon}
        </span>

    );
};

export default IconSwitch;