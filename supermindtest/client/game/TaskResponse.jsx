import React from "react";
export default class TaskResponse extends React.Component {
  state = { solutions: [''] }

  handleText = i => e => {
    let solutions = [...this.state.solutions]
    solutions[i] = e.target.value
    this.setState({ solutions })
    const { player, stage } = this.props;
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
    //console.log(player.get("answer"))
    this.props.player.stage.submit(this.state);
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

  render() {
    const { player, stage } = this.props;

    return (
      <div className="task-response">
        <form onSubmit={this.handleSubmit}>
          <button type="add" onClick={this.addSolution}>Add a New Solution</button>
          <br></br><br></br><br></br>

          {this.state.solutions.map((solutions, index) => (
            <div key={index}>
              <textarea
                dir="auto"
                rows="3"
                cols="100"
                placeholder='Enter your solution here.'
                value={solutions}
                onChange={this.handleText(index)}
              />
              <button type="delete" onClick={this.handleDelete(index)}>Delete</button>
            </div>
          ))
          }
          <br></br><br></br>
          <button type="submit">Submit and Proceed to the Next Page</button>
        </form>
      </div>
    );

  }
  appendInput() {
    var newInput = `input-${this.state.inputs.length}`;
    this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
  }
}

