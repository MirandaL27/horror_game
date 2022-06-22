import React, { useState, useEffect } from 'react';

const Item = (props) => {
    const [image, setImage] = useState({});
    const { itemImageName, posX, posY, scale, isHidden, interactions} = props;

    useEffect(() => {
        async function getImage(name) {
            const res = await import(`../../assets/environment/items/${name}`);
            console.log(res);
            setImage(res);
        }
        getImage(itemImageName);
    }, [itemImageName]);
    const handleItemClick = (event) => {
        console.log("clicked on item");
        //need to change the size of the item button to the whole screen so that a close up of the item is shown
        //need to hide the item on the background behind the close up.
        //need to render some buttons for interacting with the items
    }

    return (
        <div style={{ position: 'absolute', left: `${posX}}px`, bottom: `${posY}px`, border: '2px solid green', maxWidth: `${scale}%`, height: 'auto', padding: '0px'}}>
            {!isHidden && <button className="clickable" onClick={handleItemClick} style= {{background: 'transparent' }}>
                <img style={{ width: '100%', height: '100%' }} src={image.default}></img>
            </button>}
        </div>
    );
}

export default Item;