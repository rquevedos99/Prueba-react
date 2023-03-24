import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import './MiApi.css';

class MiApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      searchTerm: '',
    };
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => this.setState({ characters: data.results }));
  }

  render() {
    const filteredCharacters = this.state.characters.filter(character =>
      character.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
    const sortedCharacters = filteredCharacters.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    return (
      <div className="mi-api">
        <div className="search">
          <input
            type="text"
            placeholder="Search characters"
            onChange={e => this.setState({ searchTerm: e.target.value })}
          />
        </div>
        <div className="character-list">
          {sortedCharacters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </div>
    );
  }
}

export default MiApi;

