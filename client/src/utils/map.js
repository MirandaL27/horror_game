import graphNode from '../utils/graphNode'
// create a map class to hold the game map.
class Map {
    graph;
    constructor() {
        this.graph = [];
    }
    addNode(node) {
        let gNode = new graphNode();
        gNode.setFileName(node.name);
        gNode.setItems(node.items);
        gNode.setEdges(node.north, node.south, node.east, node.west);
        this.graph.push(gNode);
    }
    findNodeByFileName(name) {
        return this.graph.find(elem => elem.fileName = name);
    }
    findNodeByIndex(index) {
        return this.graph[index];
    }
    getNextNode(direction, nodeIndex){
        return this.graph[nodeIndex][direction];
    }
    getItems(index){
        return (this.graph[index]["items"] ? this.graph[index]["items"] : []);
    }
}

let map = new Map();

//right now i'm hardcoding the map here so I have something to test.
map.addNode({ name: "bedroom_east_wall_test.jpg", north: -1, south: -1, east: 1, west: 3 , items: [{name: "test", fileName: "test.jpg",pos: {x: 0, y: 0},scale: 40,zIndex: 1, isHidden: false, interactions: ['put back', 'take'], alt: "test item"}]});
map.addNode({ name: "bedroom_south_wall_test.jpg", north: -1, south: -1, east: 2, west: 0, items: [] });
map.addNode({ name: "bedroom_west_wall_test.jpg", north: -1, south: -1, east: 3, west: 1, items: [] });
map.addNode({ name: "bedroom_north_wall_test.jpg", north: -1, south: -1, east: 0, west: 2, items: [] });
console.log("map about to be exported:  ",map);

export default map;