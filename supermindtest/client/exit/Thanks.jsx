import React from "react";

import { Centered } from "meteor/empirica:core";

export default class Thanks extends React.Component {
  static stepName = "Thanks";

  render() {
    const { player } = this.props;
    return (
      <div className="exit-survey">
        <div>
          <br></br>
          <h2>Finished!</h2>

          <p>
            Please submit the following code on MTurk to receive your bonus:{" "}<strong>{player._id}</strong>.
          </p>
          <p>
            You final <strong>bonus</strong> is in addition of the{" "}
            <strong>1 base reward</strong> for completing the HIT.
          </p>
          <br />

          <p>Thank you for participating!</p>
        </div>
      </div>
    );
  }
}
