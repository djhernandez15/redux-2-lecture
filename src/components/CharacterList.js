import React, { Component } from "react";
import { connect } from "react-redux";
import { setLoading, getCharacters } from "../ducks/breakingBad";
import { setStarWarsLoading, getStarWarsCharacters } from "../ducks/starWars";


class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakingBad: [],
      starWars: []
    };
  }

  componentDidMount() {
    this.props.getCharacters();
    // .then(response => {
    //   this.setState({
    //     breakingBad: response.data
    //   });
    //   this.props.setLoading(false);
    // });

    this.props.getStarWarsCharacters();
    // .then(response => {
    //   this.setState({
    //     starWars: response.data.results
    //   });
    //   this.props.setStarWarsLoading(false);
    // });
  }

  render() {
    console.log(this.props);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly"
        }}
      >
        <aside>
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
  { setLoading, setStarWarsLoading, getCharacters, getStarWarsCharacters }
)(CharacterList);
