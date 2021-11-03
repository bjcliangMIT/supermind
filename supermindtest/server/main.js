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


    var stage_list = ['Hierarchy', 'Democracy', 'Community', 'Market']; 

    _.times(1, i => {
      const round = game.addRound();
      //const time = 5*60*10000;
      //const stage_selected = stage_list[Math.floor(Math.random() * stage_list.length)];
      //const stage_selected = "Ecosystem"

      if(game.treatment.isGroupify==true){
        
        round.addStage({
          name: 'IntroTask',
          displayName: "IntroTask",
          durationInSeconds: 10
        });

        stage_list.forEach((selected) => {
          round.addStage({
            name: selected+"_script",
            displayName: selected,
            durationInSeconds: 2*60
          });
          round.addStage({
            name: selected, 
            displayName: " ", 
            durationInSeconds: 10
          });
        });

        round.addStage({
          name: 'ExitTask',
          displayName: "ExitTask",
          durationInSeconds: 10
        });
        
      }

      
    });
  });

  
});
