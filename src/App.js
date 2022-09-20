import React from "react";
import { connect } from "react-redux";
import { incplayerone, decplayerone, incplayertwo, decplayertwo, playeroneownscore, playertwoownscore } from "./Actions";

const App = ({ playerone, playertwo, incplayerone, decplayerone, incplayertwo, decplayertwo, playeroneownscore, playertwoownscore }) => {
  return (
    <div>
      <center>
        <h1>Playerone Details</h1>
        <p>Name : {playerone.name} | Score : {playerone.score}</p>
        <button onClick={() => incplayerone()}>Increment </button> {''}
        <button onClick={() => decplayerone()}>Decrement</button> {' '}
        <button onClick={() => playeroneownscore(10)}>Payload ONE</button>
        <hr />
        <h2>Playertwo Details</h2>
        <p> Name : {playertwo.name} | Score : {playertwo.score} </p>
        <button onClick={() => incplayertwo()}>Increment</button>{' '}
        <button onClick={() => decplayertwo()}>Decrement</button> {' '}
        <button onClick={() => playertwoownscore(10)}>Payload TWO</button>

      </center>
    </div>
  );
}

const mapStateToProps = state => ({
  playerone: state.playerone,
  playertwo: state.playertwo
})
export default connect(mapStateToProps, { incplayerone, decplayerone, incplayertwo, decplayertwo, playeroneownscore, playertwoownscore })(App);
