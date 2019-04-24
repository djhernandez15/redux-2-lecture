import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { getBadCharacters } from "../ducks/breakingBad";
import { getSwapiCharacters } from "../ducks/starWars";

class CharacterList extends Component {
  componentDidMount() {
    axios
      .get("https://www.breakingbadapi.com/api/character/random?limit=10")
      .then(response => {
        this.props.getBadCharacters(response.data);
      });

    this.props.getSwapiCharacters();
  }

  render() {
    console.log(this.props);
    return (
      <div style={{ display: "flex", borderBottom: "1px solid gray" }}>
        <aside style={{ borderRight: "1px solid gray" }}>
          <h1>Breaking Bad Characters</h1>
          <div>
            {this.props.breakingBad.loading && "Loading..."}
            {this.props.breakingBad.characters.map(character => (
              <p key={character.char_id}>{character.name}</p>
            ))}
          </div>
        </aside>
        <aside>
          <h1>Star Wars Characters</h1>
          <div>
            {this.props.starWars.loading && "Loading..."}
            {this.props.starWars.characters.map(character => {
              return <p key={character.name}>{character.name}</p>;
            })}
          </div>
        </aside>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    breakingBad: reduxState.breakingBad,
    starWars: reduxState.starWars
  };
};

export default connect(
  mapStateToProps,
  { getBadCharacters, getSwapiCharacters }
)(CharacterList);
