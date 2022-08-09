import React from 'react';

const Button = (props) => {
    const {text, isDisabled, link, height, width, posX, posY, isShowing, className, setCurrentScreen, setGameIsStarted, onClick, help, search, setSearchResults} = props;
    
    const handleButtonClick = (event) => {
        if(event.target.className.includes("resume")){
            setGameIsStarted(true);
        }
        else if(event.target.className.includes("new")){
            setGameIsStarted(true);
        }
        else if(event.target.className.includes("settings")){
            setCurrentScreen("Settings");
        }
        else if(event.target.className.includes('help')){
            setCurrentScreen("Help");
        }
        else if(event.target.className.includes('achievements')){
            setCurrentScreen("Achievements");
        }
        else if(event.target.className.includes('extras')){
            setCurrentScreen("Extras");
        }
        else if(event.target.className.includes('title')){
            setCurrentScreen("Title");

        }

    }

    return (
        <div>
            {
                isShowing &&
                <button className={`clickable ${className}`} onClick = {!onClick? handleButtonClick: onClick} disabled = {isDisabled} style={{height: `${height}px`, width: `${width}px`}}>{text}
                </button>
            }
        </div>
    );
}

export default Button;
