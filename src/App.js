import './App.css';
import { Component } from 'react'
import CharactersContainer from './components/CharactersContainer';
import { connect } from 'react-redux';

class App extends Component{

  componentDidMount(){
    fetch("https://rickandmortyapi.com/api/character/")
    .then(response => response.json())
    .then(({results}) => this.props.setCharacters(results))
  }

  render(){
    return (
      <div className="App">
        <CharactersContainer characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    //whatever props we want to create
    setCharacters: (characters) => dispatch({type: 'SET_CHARACTERS', payload: characters}) 
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
