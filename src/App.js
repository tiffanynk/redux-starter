import logo from './logo.svg';
import './App.css';
import { Component } from 'react'
import CharactersContainer from './components/CharactersContainer';

class App extends Component{

  state = {
    characters: []
  }

  componentDidMount(){
    fetch("https://rickandmortyapi.com/api/character/")
    .then(response => response.json())
    .then(({results}) => this.setState({characters: results}))
  }

  render(){
    return (
      <div className="App">
        <CharactersContainer characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
