import React, { useState, useEffect } from 'react';

const ItemModal = (props) => {
    const [image, setImage] = useState({});
    const { itemImageName, name, interactions, alt, setCanMove, setIsItemModalHidden ,setPlayerInventory, playerInventory} = props;

    useEffect(() => {
        async function getImage(name) {
            const res = await import(`../../assets/environment/items/${name}`);
            setImage(res);
        }
        getImage(itemImageName);
    }, [itemImageName]);

    const handleInteractionClick = (event) => {
        if(event.target.className === "put_back"){
            console.log("put back was clicked");
            //set isHidden on background item to false again.
            //set canMove to true - allow movement with the arrow keys again
            //set isItemModalHidden to true - close the item modal
            setIsItemModalHidden(true);
            setCanMove(true);
        }
        else if(event.target.className === 'take'){
            console.log("take was clicked");
            //add item to inventory
            //set canMove to true - allow movement with the arror keys again
            //set isItemModalHidden to true - close the item modal
            setIsItemModalHidden(true);
            setCanMove(true);
            playerInventory.addItemToInventory(itemImageName, name, false, alt);
        }
    }

    return (
        <div className='item-modal'>
            <div className="item-modal-content">
                <div>
                    <p>{name}</p>
                </div>
                <div>
                    <img src={image.default} alt={alt}></img>
                </div>
                <div>
                    {interactions.map((elem, index) => (
                        <button type="button" className={elem.replace(" ", "_")} key={`int${index}`} onClick={handleInteractionClick}>{elem}</button>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default ItemModal;