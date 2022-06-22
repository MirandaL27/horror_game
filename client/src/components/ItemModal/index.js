import React, { useState, useEffect } from 'react';

const ItemModal = (props) => {
    const [image, setImage] = useState({});
    const { itemImageName, name, interactions, alt } = props;

    useEffect(() => {
        async function getImage(name) {
            const res = await import(`../../assets/environment/items/${name}`);
            console.log(res);
            setImage(res);
        }
        getImage(itemImageName);
    }, [itemImageName]);

    const handleInteractionClick = (event) => {
        if(event.target.className === "put_back"){
            console.log("put back was clicked");
        }
        else if(event.target.className === 'take'){
            console.log("take was clicked");
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