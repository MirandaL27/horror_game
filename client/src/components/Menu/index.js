import React from "react";
import Background from '../Background';
import map from '../../utils/map';
const Menu = (props) => {
    const {nodeIndex}  = props;
    console.log(nodeIndex);
    let node = map.findNodeByIndex(nodeIndex);
    console.log(map);
    let itemArray = [];
    return (
        <div>
            <Background items = {itemArray} backGroundImageName = {node.fileName}></Background>
        </div>
    );
}

export default Menu;