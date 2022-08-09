//create help directory and file classes
 class HelpDirectory{
    path;
    name;

    constructor() {
        this.path = "";
        this.name = "";
    }
    setDirectory(name, path){
        this.name = name;
        this.path = path;
    }
    getName(){
        return this.name;
    }
    getPath(){
        return this.path;
    }
    isDirectory(){
        return true;
    }
}
 class HelpFile{
    name;
    path;
    topic;
    text;

    constructor() {
        this.path = "";
        this.name = "";
        this.topic = "";
        this.text = "";
    }
    setFile(name, path, topic, text){
        this.name = name;
        this.path = path;
        this.topic = topic;
        this.text = text;
    }
    getName(){
        return this.name;
    }
    getPath(){
        return this.path;
    }
    getTopic(){
        return this.topic;
    }
    getText(){
        return this.text;
    }
    isDirectory(){
        return false;
    }
}

module.exports = {HelpDirectory, HelpFile};