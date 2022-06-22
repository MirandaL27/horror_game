import React, { useState, useEffect } from 'react';

const Item = (props) => {
    const [image, setImage] = useState({});
    const {index, itemImageName, posX, posY, scale, isHidden, interactions, alt, setIsItemModalHidden, setCurrentItem, setCanMove} = props;

    useEffect(() => {
        async function getImage(name) {
            const res = await import(`../../assets/environment/items/${name}`);
            setImage(res);
        }
        getImage(itemImageName);
    }, [itemImageName]);
    const handleItemClick = (event) => {
        setIsItemModalHidden(false);
        setCurrentItem(index);
        setCanMove(false);
        //need to hide the item in the background

    }

    return (
        <div style={{ position: 'absolute', left: `${posX}}px`, bottom: `${posY}px`, border: '2px solid green', maxWidth: `${scale}%`, height: 'auto', padding: '0px'}}>
            {!isHidden && <button className="clickable" onClick={handleItemClick} style= {{background: 'transparent' }}>
                <img style={{ width: '100%', height: '100%' }} src={image.default} alt = {alt}></img>
            </button>}
        </div>
    );
}

export default Item;