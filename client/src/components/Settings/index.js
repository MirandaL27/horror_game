import React from 'react';
import Button from '../Button';
const Settings = (props) => {
    const { setCurrentScreen} = props;


    return (
        <div>
            <h1>Settings: </h1>
            <Button text="Back" className = "title" setCurrentScreen = {setCurrentScreen} isDisabled={false} isShowing={true} height={100} width={400}></Button>
        </div>

    );
}

export default Settings;