import React from "react";
import Background from '../Background';
import map from '../../utils/map';
const Menu = (props) => {
    const {nodeIndex}  = props;
    //console.log(nodeIndex);
    let node = map.findNodeByIndex(nodeIndex);
    console.log(node);
    let itemArray = map.getItems(nodeIndex);
    return (
        <div style={{width:"100vw", height: '100vh'}}>
            <Background items = {itemArray.itemArray} backGroundImageName = {node.fileName}></Background>
        </div>
    );
}

export default Menu;