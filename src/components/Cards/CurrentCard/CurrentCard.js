import React from 'react';
import PropTypes from 'prop-types';
import classes from './CurrentCard.css';

const animation = 'animated flipInY';

const currenCard = props => {
  return (
    <div className={`${classes.CurrentCard} ${animation}`} onClick={props.onReset}>
      <span className={classes.CurrentCard__Value}>{props.value}</span>
    </div>
  );
};

currenCard.propTypes = {
    value: PropTypes.string,
    onReset: PropTypes.func,
};

export default currenCard;
