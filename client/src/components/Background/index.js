import React, { useState, useEffect } from 'react';
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
        //console.log(image);

    return (
        <div>
            <img src = {image.default}></img>
            {/*<img src={image}></img>*/}
        </div>
    );
}

export default Background;