import React from 'react';
import Button from '../Button';
const Title = (props) => {
    const { currentScreen, setCurrentScreen, setGameIsStarted} = props;
    //need to check if there's a saved game for this person in the database
    //need to check if this person has gotten all of the achievements 
    let haveSavedGame = false;
    //if haveSavedGame is true: have resume game and new game buttons
    //else: have new game button
    return (
        <div>
            {/*title image - <img></img>*/}
            <div>
                {haveSavedGame && <Button text="Resume Game" className = "resume" setGameIsStarted = {setGameIsStarted} setCurrentScreen = {setCurrentScreen} isDisabled={false} isShowing={true} height={100} width={400}></Button>}
                <Button text="New Game" className = "new" setGameIsStarted = {setGameIsStarted} setCurrentScreen = {setCurrentScreen} isDisabled={false} isShowing={true} height={100} width={400}></Button>
                <Button text="Settings" className = "settings" setCurrentScreen = {setCurrentScreen} isDisabled={false} isShowing={true} height={100} width={400}></Button>
                <Button text="Help" className="help" setCurrentScreen = {setCurrentScreen} isDisabled={false} isShowing={true} height={100} width={400}></Button>
                <Button text="Achievements" className = "achievements" setCurrentScreen = {setCurrentScreen} isDisabled={false} isShowing={true} height={100} width={400}></Button>
                <Button text="Extras" className = "extras" setCurrentScreen = {setCurrentScreen} isDisabled={false} isShowing={true} height={100} width={400}></Button>
            </div>
        </div>

    );
}

export default Title;