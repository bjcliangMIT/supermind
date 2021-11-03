import React from "react";
export default class TaskResponse extends React.Component {
  state = { questions: [''] }

  handleText = i => e => {
    let questions = [...this.state.questions]
    questions[i] = e.target.value
    this.setState({questions})
    const { player, stage } = this.props;
    player.round.set("value", this.state.questions);
  }

  handleDelete = i => e => {
    e.preventDefault()
    let questions = [
      ...this.state.questions.slice(0, i),
      ...this.state.questions.slice(i + 1)
    ]
    this.setState({questions})
  }

  addQuestion = e => {
    e.preventDefault()
    let questions = this.state.questions.concat([''])
    this.setState({questions})
    
  }

  handleSubmit = event => {
    event.preventDefault();
    const { player } = this.props;
    player.round.set("value", this.state.questions);
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
        <button type="add" onClick={this.addQuestion}>Add a New Solution</button>
          {this.state.questions.map((question, index) => (
            
            <div key={index}>
              <textarea 
                dir="auto"
                rows="3"
                cols="80"
                placeholder='Enter your solution here.'
                value={question}
                onChange={this.handleText(index)}
              />
              <button type="delete" onClick={this.handleDelete(index)}>Delete</button>
            </div>
          ))
          }
          
          <button type="submit">Submit</button>
        </form>
      </div>
    );

  }
  appendInput() {
    var newInput = `input-${this.state.inputs.length}`;
    this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
  }
}

