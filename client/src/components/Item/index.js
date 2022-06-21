import React, { useState, useEffect } from 'react';

const Item = (props) => {
    const [image, setImage] = useState({}); 
    const {itemImageName, posX, posY} = props;

    useEffect(() => {
        async function getImage(name) {
            const res = await import(`../../assets/environment/items/${name}`);
            console.log(res);
            setImage(res);
        }
        getImage(itemImageName);
        },[itemImageName]);

    return (
        <div className = "clickable" style={{position: 'absolute', left: `${posX}}px`, bottom: `${posY}px`, border: '2px solid green'}}>
            <img src = {image.default}></img>
        </div>
    );
}

export default Item;