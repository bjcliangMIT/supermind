import React from "react";

import Timer from "./Timer.jsx";

export default class PlayerProfile extends React.Component {
  renderProfile() {
    const { player } = this.props;
    return (
      <div className="player-profile">
        <h3>Your Profile</h3>
        <p>User Name: {player.id}</p>
        <p>ID: {player._id}</p>
        <img src={player.get("avatar")} className="profile-avatar" />
      </div>
    );
  }


  renderSolution() {
    const { player } = this.props;
    return (
      <div className="profile-score">
        <h4>Last Solution</h4>
        <span>{player.get("score")}</span>
      </div>
    );
  }

  renderOutline() {
    const { player } = this.props;
    return (
      <div className="profile-score">
        <h4>Goal of the Research</h4>
        <p>Explore ways to Generate Creative Ideas.</p>
      </div>
    );
  }

  render() {
    const { stage } = this.props;

    return (
      <aside className="player-profile">
        <Timer stage={stage} />
      </aside>
    );
  }
}
