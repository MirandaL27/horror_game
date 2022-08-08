import React from 'react';
import Button from '../Button';
const Extras = (props) => {
    const { setCurrentScreen} = props;


    return (
        <div>
            <h1>Extras: </h1>
            <Button text="Back" className = "title" setCurrentScreen = {setCurrentScreen} isDisabled={false} isShowing={true} height={100} width={400}></Button>
        </div>

    );
}

export default Extras;