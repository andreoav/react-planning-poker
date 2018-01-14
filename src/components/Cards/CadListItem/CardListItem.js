import React from 'react';
import PropTypes from 'prop-types';

import classes from './CardListItem.css';

const card = (props) => {
    return (
        <div className={`${classes.CardList__Item} card`} onClick={() => props.onReveal(props.value)}>
            <div className={`card-content ${classes.CardList__Item__Content}`}>{props.value}</div>
        </div>
    );
};

card.propTyps = {
    value: PropTypes.string,
    onReveal: PropTypes.func,
};

export default card;
