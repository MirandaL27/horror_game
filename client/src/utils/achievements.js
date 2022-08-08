//create a class for achievements
//each achievement must consist of: 
//  1. filename of achievement icon - string
//  2. achievement name - string 
//  3. achievement description - string
//  4. whether it has been achieved or not - boolean
class Achievements{
    achievementsArray;

    constructor(){
        this.achievementsArray = [];
    }

    addAchievement(achievement){
        this.achievementsArray.push(achievement);
    }
    addAchievements(achievements){
        for(let i=0;i<achievements.length;i++){
            this.achievementsArray.push(achievements);
        }
    }

}

let achievements = new Achievements();

achievements.addAchievement({iconFileName: "achievement_icon_placeholder.jpg", name: "Purple Heart", description: "For making plenty of fatal errors.", achieved: true});
achievements.addAchievement({iconFileName: "achievement_icon_placeholder.jpg", name: "Serial Snacker", description: "For makaking and eating copious amounts of food.", achieved: false});
achievements.addAchievement({iconFileName: "achievement_icon_placeholder.jpg", name: "Dog's best friend", description: "For playing with Fred a lot.", achieved: false});
achievements.addAchievement({iconFileName: "achievement_icon_placeholder.jpg", name: "Explorer", description: "For seeing everything there is to see", achieved: false});

export default achievements;