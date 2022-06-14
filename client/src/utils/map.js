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
}

let map = new Map();

//right now i'm hardcoding the map here so I have something to test.
map.addNode({ name: "bedroom_east_wall_test.jpg", north: -1, south: -1, east: 1, west: 3 });
map.addNode({ name: "bedroom_south_wall_test.jpg", north: -1, south: -1, east: 2, west: 0 });
map.addNode({ name: "bedroom_west_wall_test.jpg", north: -1, south: -1, east: 3, west: 1 });
map.addNode({ name: "bedroom_north_wall_test.jpg", north: -1, south: -1, east: 0, west: 2 });
console.log("map about to be exported:  ",map);

export default map;