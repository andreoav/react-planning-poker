import React from 'react';

const withCardBoard = (Component) => (props) => {
    return function EnhancedComponent({ currentCard, ...props }) {
        if (currentCard) {
            return <Component card={currentCard} />
        }

        return '';
    };
};

export default withCardBoard;