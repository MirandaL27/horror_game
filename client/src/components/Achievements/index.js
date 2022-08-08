import React from 'react';
import Button from '../Button';
const Achievements = (props) => {
    const { setCurrentScreen} = props;


    return (
        <div>
            <h1>Achievements: </h1>
            <Button text="Back" className = "title" setCurrentScreen = {setCurrentScreen} isDisabled={false} isShowing={true} height={100} width={400}></Button>
        </div>

    );
}

export default Achievements;