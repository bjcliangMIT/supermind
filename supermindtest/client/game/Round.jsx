import React from "react";

import PlayerProfile from "./PlayerProfile.jsx";
import {TaskH, TaskD,TaskC,TaskM,TaskE, TaskF, 
  TaskH_intro, TaskD_intro, TaskC_intro, TaskM_intro, TaskE_intro} from "./Task.jsx";

export default class Round extends React.Component {
  render() {
    const { round, stage, player, game } = this.props;
    //treatment.isGroupify==true

    if(game.treatment.isGroupify==true){
      return (
        <div className="round">
          <div className="content">
            <PlayerProfile player={player} stage={stage} game={game} />
            {stage.name === "Hierarchy"  && <TaskH game={game} round={round} stage={stage} player={player} />}
            {stage.name === "Democracy"  && <TaskD game={game} round={round} stage={stage} player={player} />}
            {stage.name === "Community"  && <TaskC game={game} round={round} stage={stage} player={player} />}
            {stage.name === "Market"  && <TaskM game={game} round={round} stage={stage} player={player} />}
            {stage.name === "Ecosystem"  && <TaskE game={game} round={round} stage={stage} player={player}/>}
            {stage.name === "Hierarchy_script"  && <TaskH_intro game={game} round={round} stage={stage} player={player} />}
            {stage.name === "Democracy_script" && <TaskD_intro game={game} round={round} stage={stage} player={player} />}
            {stage.name === "Community_script" && <TaskC_intro game={game} round={round} stage={stage} player={player} />}
            {stage.name === "Market_script" && <TaskM_intro game={game} round={round} stage={stage} player={player} />}
            {stage.name === "Ecosystem_script" && <TaskE_intro game={game} round={round} stage={stage} player={player} />}
  
            {stage.name === "Complete" && <TaskF game={game} round={round} stage={stage} player={player} />}
          </div>
        </div>
      );
    }else{
      return (
        <div className="round">
          <div className="content">
            <PlayerProfile player={player} stage={stage} game={game} />
            {stage.name === "Complete" && <TaskF game={game} round={round} stage={stage} player={player} />}
          </div>
        </div>
      );
    }
  }
}
