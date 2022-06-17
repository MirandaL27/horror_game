// create an items class for items on the map.
class Items {
    itemArray;
    Items() {
        this.itemArray = [];
    }
    addItem(fileName, itemName, position, isHidden){
        this.itemArray.push({name: itemName, fileName: fileName, pos: position, isHidden: isHidden});
    }
    addItems(arr){
        for(let i=0;i<arr.length;i++){
            itemsArray.push(arr[i]);
        }
    }
    findItemByName(name){
        return this.itemArray.find(name);
    }
}

export default Items;