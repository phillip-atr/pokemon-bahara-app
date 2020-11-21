import React from 'react'
import {List} from '../Pokemons';
import axios from 'axios';

export class Home extends React.Component {
  
  state = {
    cards: [],
    isLoading: true
  }

  async componentDidMount() {
    const response = await axios.get('https://api.pokemontcg.io/v1/cards');
    this.setState({ cards: response.data });
    this.setState({ isLoading: false });
  }

  render() {

    if (this.state.isLoading) {
      return <h1>Loading...</h1>
    }

    if (!this.state.isLoading) {
      return (
        <div className="container mx-auto max-w-screen-xl">
          <div className="my-10">
            <List cards={this.state.cards} />
          </div>
        </div>
      )
    }
  }
}