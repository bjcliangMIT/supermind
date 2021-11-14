import React from "react";
export default class TaskResponse extends React.Component {
  state = { solutions: [''] }

  handleText = i => async(e) => {
    let solutions = [...this.state.solutions]
    solutions[i] = e.target.value
    await this.setState({ solutions })
    const { player } = this.props;
    player.round.set("value", this.state.solutions);
  }

  handleDelete = i => e => {
    e.preventDefault()
    let solutions = [
      ...this.state.solutions.slice(0, i),
      ...this.state.solutions.slice(i + 1)
    ]
    this.setState({ solutions })
  }

  addSolution = e => {
    e.preventDefault()
    let solutions = this.state.solutions.concat([''])
    this.setState({ solutions })
  }

  handleSubmit = event => {
    event.preventDefault();
    const { player } = this.props;
    player.round.set("value", this.state.solutions);
    this.props.player.stage.submit();
  };

  renderContent() {
    const { player } = this.props;
    //const value = player.round.get("value");
    return (
      <textarea
        dir="auto"
        rows="2"
        cols="70"
        placeholder='Enter your solution here.'
        value={this.value}
        onChange={this.handleChange}
      />
    );
  }

  renderSubmit() {
    const { game, player, stage } = this.props;
    if (game.treatment.submitShow) {
      return (
        <div>
          <button type="submit"> Submit and Proceed to the Next Page </button>
          <span className="colorgrey">
            <p> Reminder: Please submit only when you finish answering.</p>
            <p> You cannot return to this page once you proceed.</p>
          </span>
        </div>
      )
    }
  }


  render() {
    const { game, player, stage } = this.props;
    
    return (
      <div className="task-response">
        <form onSubmit={this.handleSubmit}>
          {this.state.solutions.map((solutions, index) => (
            <div key={index}>
              <textarea
                dir="auto"
                rows="3"
                cols="90"
                placeholder='Enter your solution here.'
                value={solutions}
                onInput={this.handleText(index)}
              />

            </div>
          ))
          }
          <button type="add" onClick={this.addSolution}> Add a New Solution </button>
          <br></br><br></br>
          {this.renderSubmit()}

        </form>
      </div>
    );

  }
  appendInput() {
    var newInput = `input-${this.state.inputs.length}`;
    this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
  }
}

