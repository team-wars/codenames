import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from '../components/Board.jsx';
import Chatbox from '../components/Chatbox.jsx';
import ClueDisplay from '../components/ClueDisplay';

const mapStateToProps = state => ({
  sessionID: state.game.sessionID,
  newClue: state.game.newClue,
  currentClue: state.game.currentClue,
  guessesLeft: state.game.guessesLeft,
});

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // anymore methods, add here
  }

  render() {
    // in the middle of setting up Clue Display. passing down props
    const { sessionID, guessesLeft, currentClue, newClue } = this.props;
    return (
      <section className="game-container">
        <h2>
          {`Welcome to iSpy! Session: ${sessionID || 'TBD'}`}
        </h2>
        This is the Game Container
        <ClueDisplay guesses={guessesLeft} clue={currentClue}/>
        <Board />
        <Chatbox />
      </section>
    );
  }
}

export default connect(mapStateToProps, null)(GameContainer);
