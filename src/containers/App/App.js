import React, { Component } from 'react';

import CardList from '../../components/Cards/CardList/CardList';
import CurrentCard from '../../components/Cards/CurrentCard/CurrentCard';

import classes from './App.css';

const cards = [
  '0', '1/2', '1', '2', '3', '5', '8', '13', '20', '40', '100', '?', 'Café',
];

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = { currentCard: null, cards };
    
    this.revealCard = this.revealCard.bind(this);
    this.resetBoard = this.resetBoard.bind(this);
  }

  revealCard(card) {
    this.setState({
      currentCard: card,
    });
  }

  resetBoard() {
    this.setState({
      currentCard: null,
    });
  }

  render() {
    return (
      <div className={classes.container}>
        {this.state.currentCard ? <CurrentCard value={this.state.currentCard} onReset={this.resetBoard} />
                                : <CardList cards={this.state.cards} onReveal={this.revealCard}/>}
      </div>
    );
  }
}

export default App;
