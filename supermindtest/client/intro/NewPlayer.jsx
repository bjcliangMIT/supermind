import React, { Component } from 'react'
import { Centered } from "meteor/empirica:core";

export default class NewPlayer extends Component {
  state = { id: "" };

  handleUpdate = event => {
    const { value, name } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { handleNewPlayer } = this.props;
    const { id } = this.state;
    handleNewPlayer(id);
  };

  render() {
    const { id } = this.state;

    return (
      <Centered>
        <div className="instructions">
          <form onSubmit={this.handleSubmit}>
            <h2>Please create your username below. </h2>
            <div className="comment">
              <p>This username is created only as a key for you to restore your progress
              if you are accidently dropped off the experiment. It does not have to include any of your personal information.</p>
              </div>
            <br></br>

            <input
              dir="auto"
              type="text"
              name="id"
              id="id"
              value={id}
              onChange={this.handleUpdate}
              required
              autoComplete="off"
            />

            <button type="submit">Submit</button>

          </form>
        </div>
      </Centered>
    )
  }
}