//class for help topics 
const {HelpDirectory, HelpFile} = require("./helpObjects");
class Help {
    helpFileSystem;
    constructor() {
        this.helpFileSystem = [];
    }
    addDirectory(directory){
        this.helpFileSystem.push(directory);
    }
    addFile(file){
        this.helpFileSystem.push(file);
    }
    getRoot() {
        //console.log(this.helpFileSystem);
        for(let i=0;i<this.helpFileSystem.length;i++){
            if(this.helpFileSystem[i].getPath().match(/[\/]{1}(.)+[\/]{1}/)){
                return this.helpFileSystem[i];
            }
        }
        return null;
    }
    searchFileSystem(topic){
        //return all of the help files that contain the topic string in their names
        let output = [];
        this.searchHelper(topic, output, this.getRoot(), 1);
        return output;
    }
    searchHelper(topic, output, current, depth){
        //console.log(current);
        if(!current.isDirectory()){
            //we're at the end of a path
            if(current.getName().includes(topic)){
                output.push(current);
            }
            return;
        }
        //go to all the paths 
        //console.log(this.helpFileSystem[0].getPath().split("/").length);
           let temp = this.helpFileSystem.filter((elem) =>
                 elem.getPath().includes(current.getPath()) && elem.getPath().split("/").length > depth + 2);
           console.log(temp);
           for(let i=0;i<temp.length;i++){
            this.searchHelper(topic, output, temp[i], depth+1);
           } 
           return; 
    }
}

//test cases
let help = new Help();
let temp = new HelpDirectory();
temp.setDirectory("External Controls","/External Controls/");
help.addDirectory(temp);
temp = new HelpDirectory();
temp.setDirectory("Settings","/External Controls/Settings/");
help.addDirectory(temp);
temp = new HelpDirectory();
temp.setDirectory("Controls", "/External Controls/Settings/Controls/");
help.addDirectory(temp);
temp = new HelpFile();
temp.setFile("Default Options","/External Controls/Settings/Controls/Default Options/","Control Options - Default","The default option for in-game control configuration is the arrow keys for navigation, and mouse clicks for everything else.");
help.addFile(temp);

console.log(help.searchFileSystem("Default"));


export default help;