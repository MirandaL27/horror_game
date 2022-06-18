// create an items class for items on the map.
class Items {
    itemArray;
    constructor() {
        this.itemArray = [];
    }
    addItem(fileName, itemName, position, isHidden){
        this.itemArray.push({name: itemName, fileName: fileName, pos: position, isHidden: isHidden});
    }
    addItems(arr){
        for(let i=0;i<arr.length;i++){
            this.itemArray.push(arr[i]);
        }
    }
    findItemByName(name){
        return this.itemArray.find(name);
    }
}

export default Items;