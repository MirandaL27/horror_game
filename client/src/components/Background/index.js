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
        <div style={{position: 'relative', height: '100%', width: '100%', border: '2px solid black'}}>
            <img style = {{border: '2px solid red', height: '100%', width: 'auto'}} src = {image.default}></img>
            <div style={{position: 'absolute', left: '0px', bottom: '0px', border: '2px solid blue', height:"100%", width:'100%'}}>
                {shownItems.map((elem, index) => (
                    <Item key = {index} itemImageName = {elem.fileName} posX = {elem.pos.x} posY = {elem.pos.y} scale = {elem.scale} isHidden = {elem.isHidden} interactions = {elem.interactions}></Item>
                ))}
            </div>
        </div>
    );
}

export default Background;