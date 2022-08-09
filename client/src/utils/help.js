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
    searchFileSystem(topic){
        //return all of the help files that contain the topic string in their paths
        //order them by the depth of the match and then by lexicgraphical order
        let output = [];
        for(let i=0; i<this.helpFileSystem.length;i++){
            let path = this.helpFileSystem[i].getPath();
            if(!this.helpFileSystem[i].isDirectory() && path.includes(topic)){
                let arr = path.split("/");
                const match = arr.findLastIndex((element, index) => {
                    if (element.includes(topic)) {
                      return index;
                    }
                  });
                output.push({matchDepth: match, file: this.helpFileSystem[i]});
            }
        }
        output.sort((a,b) => {
            if(b.matchDepth === a.matchDepth){
                return a.file.getPath().localeCompare(b.file.getPath());
            }
            return b.matchDepth - a.matchDepth;
        });
        return output;
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
temp = new HelpDirectory();
temp.setDirectory("Controls", "/External Controls/Settings/Volume/");
help.addDirectory(temp);
temp = new HelpFile();
temp.setFile("Default Options","/External Controls/Settings/Controls/Default Options/","Control Options - Default","There are default control configuration presets for both right and left-handed players.  These can be found and selected from the presets dropdown on the controls section of the settings screen.");
help.addFile(temp);
temp = new HelpFile();
temp.setFile("Custom Options","/External Controls/Settings/Controls/Custom Options/","Control Options - Custom","Custom control configurations can be set up by selecting buttons from the dropdowns that correspond to each of the controls on the settings screen.");
help.addFile(temp);
temp = new HelpFile();
temp.setFile("Music Volume","/External Controls/Settings/Volume/Music Volume/","Volume - Music","Music volume can be configured by toggling the music volume bar on the settings screen.");
help.addFile(temp);
temp = new HelpFile();
temp.setFile("Sound Volume","/External Controls/Settings/Volume/Sound Volume/","Volume - Sound","Sound volume can be configured by toggling the sound volume bar on the settings screen.");
help.addFile(temp);

//console.log(help.searchFileSystem("Default"));
//console.log(help.searchFileSystem("Options"));
//console.log(help.searchFileSystem("Controls"));

export default help;