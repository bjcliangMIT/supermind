import Empirica from "meteor/empirica:core";
import "./bots.js";
import "./callbacks.js";

// gameInit is where the structure of a game is defined.
// Just before every game starts, once all the players needed are ready, this
// function is called with the treatment and the list of players.
// You must then add rounds and stages to the game, depending on the treatment
// and the players. You can also get/set initial values on your game, players,
// rounds and stages (with get/set methods), that will be able to use later in
// the game.
Empirica.gameInit(game => {
  game.players.forEach((player, i) => {
    player.set("avatar", `/avatars/jdenticon/${player._id}`);
    player.set("score", "");

    var list1 = ['Hierarchy', 'Democracy', 'Community', 'Market']; 
    var list2 = ['Hierarchy', 'Democracy', 'Market', 'Community']; 
    var list3 = ['Hierarchy', 'Community', 'Market', 'Democracy'];
    var list4 = ['Hierarchy', 'Community', 'Democracy', 'Market'];  
    var list5 = ['Hierarchy', 'Market', 'Democracy', 'Community']; 
    var list6 = ['Hierarchy', 'Market', 'Community', 'Democracy']; 
    var stage_list = [list1, list2, list3, list4, list5, list6]

    _.times(1, i => {
      const round = game.addRound();
      const multiplier = 1;
      const stage_selected = stage_list[Math.floor(Math.random() * stage_list.length)];
      const practicetime = game.treatment.practiceTime * 60;
      const tasktime = game.treatment.taskTime * 60;

      if(game.treatment.isGroupify==true){
        
        round.addStage({
          name: 'start',
          displayName: "Task",
          durationInSeconds: tasktime*multiplier
        });

        stage_selected.forEach((selected) => {
          round.addStage({
            name: selected+"_script",
            displayName: selected,
            durationInSeconds: 2*60*multiplier
          });
          round.addStage({
            name: selected, 
            displayName: " ", 
            durationInSeconds: practicetime*multiplier
          });
        });

        round.addStage({
          name: 'end',
          displayName: "Final Task",
          durationInSeconds: tasktime*multiplier
        });
        
      }

      
    });
  });

  
});
