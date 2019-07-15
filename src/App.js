//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import styled from 'styled-components';

const TeamColor = styled.div`
background: blue; 
`
const SecondTeamColor = styled.div`
background: red; 
`

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
const [awayScore, setawayScore] = useState(0); 
const [homeScore, sethomeScore] = useState(0); 

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <TeamColor> 
            <h2 className="home__name">Seahawks</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
            </TeamColor>
          <div className="timer">00:03</div>
          <SecondTeamColor>
            <h2 className="away__name">Patriots</h2>
            <div className="away__score">{awayScore}</div>
            </SecondTeamColor>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => sethomeScore(homeScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => sethomeScore(homeScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setawayScore(awayScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setawayScore(awayScore + 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
