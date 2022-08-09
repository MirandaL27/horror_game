import React from 'react';
import Button from '../Button';
import help from '../../utils/help';
const Help = (props) => {
    const { setCurrentScreen} = props;

    const handleHelpSearchButtonClick = () => {
        console.log("searching...");
    }
    return (
        <div>
            <h1>Help: </h1>
            <div>
                <label htmlFor='helpsearchbar'>Search Topics: </label>
                <input className="helpersearchbar" id="helpsearchbar" type="text"></input>
                <Button onClick = {handleHelpSearchButtonClick} text = "Search" className="helpSearch" isDisabled = {false} isShowing={true} height={50} width={200}></Button>
            </div>
            <div>

            </div>
            <Button text="Back" className = "title" setCurrentScreen = {setCurrentScreen} isDisabled={false} isShowing={true} height={100} width={400}></Button>
        </div>

    );
}

export default Help;