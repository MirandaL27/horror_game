import React, { useState, useEffect } from 'react';
import checked from "../../assets/achievementIcons/achievement_checkbox_checked.jpg";
import unChecked from "../../assets/achievementIcons/achievement_checkbox_unchecked.jpg";
const Achievement = (props) => {
    const [image, setImage] = useState({});
    const { name, iconFileName,  description, isAchieved} = props;

    useEffect(() => {
        async function getImage(name) {
            const res = await import(`../../assets/achievementIcons/${name}`);
            setImage(res);
        }
        getImage(iconFileName);
    }, [iconFileName]);

    return (
        <div className="achievement">
            <img className="icon" src={image.default}></img>
            <div className="achievementText">
                <h2 className="achievementTitle">{name}</h2>
                <p className="achievementDescription">{description}</p>
            </div>
            {isAchieved ? 
            <img className="achievement checkbox" src = {checked}></img> : 
            <img className="achievement checkbox" src = {unChecked}></img> 
            }
        </div>
    );
}

export default Achievement;