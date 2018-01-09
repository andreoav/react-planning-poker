import React, { Component } from 'react';

import Card from './Card/Card';
import styles from './App.css';

const cards = ['0', '1/2', '1', '2', '3', '5', '8', '13', '20', '40', '100', 'Inf.', '?', 'Café'];

class App extends Component {
  reveal(card) {
    alert(card);
  }

  render() {
    return (
      <div className={styles.app}>
        {cards.map((card, index) => <Card key={index} value={card} />)}
      </div>
    );
  }
}

export default App;
