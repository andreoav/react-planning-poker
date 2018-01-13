import React from 'react';

import Card from '../CadListItem/CardListItem';
import classes from './CardList.css';

const componentName = (props) => {
    return (
        <div className={classes.CardList}>
            {props.cards.map((card) => (
                <Card key={card} value={card} className={classes.CardList__Item} onReveal={props.onReveal}/>
            ))}
        </div>
    );
};

export default componentName;