import React, { useState, useEffect } from 'react';
import Item from '../Item'
//import image from '../../assets/environment/backgrounds/bedroom_east_wall_test.jpg';

const Background = (props) => {
    const [image, setImage] = useState({}); 
    const {items, backGroundImageName} = props;
    //console.log(backGroundImageName);
    useEffect(() => {
        async function getImage(name) {
            const res = await import(`../../assets/environment/backgrounds/${name}`);
            console.log(res);
            setImage(res);
        }
        getImage(backGroundImageName);
        },[backGroundImageName]);
        const shownItems = items.filter((elem) => !elem.ishidden);
    return (
        <div>
            <img src = {image.default}></img>
            <div>
                {shownItems.map((elem, index) => (
                    <Item key = {index} itemImageName = {elem.fileName} posX = {elem.pos.x} posY = {elem.pos.y}></Item>
                ))}
            </div>
        </div>
    );
}

export default Background;