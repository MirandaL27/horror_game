// create an items class for items on the map.
class Items {
    itemArray;
    constructor() {
        this.itemArray = [];
    }
    addItem(fileName, itemName, position, size, depth, isHidden, interactions){
        this.itemArray.push({name: itemName, fileName: fileName, pos: position, scale: size,zIndex: depth, isHidden: isHidden, interactions: interactions});
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