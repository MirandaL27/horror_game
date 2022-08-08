import React from 'react';
import Button from '../Button';
import achievements from '../../utils/achievements';
import Achievement from '../Achievement';
const Achievements = (props) => {
    const { setCurrentScreen } = props;


    return (
        <div>
            <h1>Achievements: </h1>
            <div className="achievementsContainer">
                { achievements.achievementsArray.map((elem, index) =>
                (
                    <Achievement key = {`ach${index}`}name = {elem.name} iconFileName = {elem.iconFileName} description = {elem.description} isAchieved = {elem.achieved}></Achievement>
                ))}
            </div>
            <Button text="Back" className="title" setCurrentScreen={setCurrentScreen} isDisabled={false} isShowing={true} height={100} width={400}></Button>
        </div>

    );
}

export default Achievements;