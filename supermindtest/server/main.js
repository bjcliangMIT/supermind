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

    var stage_list = ['Hierarchy', 'Democracy', 'Community', 'Ecosystem', 'Market']; 

    _.times(1, i => {
      const round = game.addRound();
      //const time = 5*60*10000;
      const stage_selected = stage_list[Math.floor(Math.random() * stage_list.length)];
      //const stage_selected = "Ecosystem"

      if(game.treatment.isGroupify==true){
        round.addStage({
          name: stage_selected+"_script",
          displayName: "Introduction",
          durationInSeconds: 5*60
        });
  
        round.addStage({
          name: stage_selected,
          displayName: "Practice",
          durationInSeconds: 1*60
        });

      }

      round.addStage({
        name: 'Complete',
        displayName: "Task",
        durationInSeconds: 5*60
      });
    });
  });

  
});
