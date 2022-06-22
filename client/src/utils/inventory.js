// create an items class for items in the inventory.
class Inventory {
    itemArray;
    constructor() {
        this.itemArray = [];
    }
    addItemToInventory(fileName, itemName, isEquipped, altText){
        this.itemArray.push({name: itemName, fileName: fileName, isEquipped: isEquipped, alt: altText});
    }
    deleteItemFromInventory(index){
        this.itemArray.splice(index, 1);
    }
    findItemByName(name){
        return this.itemArray.find(name);
    }
    equipItem(index){
        this.itemArray[index]['isEquipped'] = true;
    }
    unEquipItem(index){
        this.itemArray[index]['isEquipped'] = false;
    }
}

export default Inventory;