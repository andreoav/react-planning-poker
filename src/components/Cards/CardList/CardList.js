import React from 'react';
import { shuffle } from 'lodash-es';

import Card from '../CadListItem/CardListItem';
import classes from './CardList.css';

const animation = 'animated fadeIn';

const componentName = (props) => {
    return (
        <div className={`${classes.CardList} ${animation}`}>
            {props.cards.map((card) => (
                <Card key={card} value={card} onReveal={props.onReveal}/>
            ))}
        </div>
    );
};

export default componentName;
