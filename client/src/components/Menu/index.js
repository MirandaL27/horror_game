import React from "react";
import Background from '../Background';
import map from '../../utils/map';
import ItemModal from '../ItemModal';
const Menu = (props) => {
    const {nodeIndex, setIsItemModalHidden, isItemModalHidden, currentItem, setCurrentItem, setCanMove}  = props;
    let node = map.findNodeByIndex(nodeIndex);
    let itemArray = map.getItems(nodeIndex);
    let item = (currentItem !== -1 ? itemArray.itemArray[currentItem] : {});
    console.log(isItemModalHidden);
    return (
        <div style={{width:"100vw", height: '100vh'}}>
            <Background items = {itemArray.itemArray} backGroundImageName = {node.fileName} setIsItemModalHidden={setIsItemModalHidden} setCurrentItem={setCurrentItem} setCanMove={setCanMove}></Background>

            {!isItemModalHidden && <ItemModal itemImageName = {item.fileName} name = {item.name} interactions={item.interactions} alt={item.alt}></ItemModal>}
        </div>
    );
}

export default Menu;