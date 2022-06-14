
// create a node class for the map graph.
class graphNode {
    fileName;
    north;
    south;
    east;
    west;
    graphNode() {
        this.fileName = "";
        this.north = -1;
        this.south = -1;
        this.east = -1;
        this.west = -1;
    }
    setFileName(name){
        this.fileName = name;
    }
    setEdges(north, south, east, west){
        this.north = north;
        this.south = south;
        this.east = east;
        this.west = west;
    }
}

export default graphNode;