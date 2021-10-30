import React from "react";
export default class TaskResponse extends React.Component {

  handleChange = num => {
    const { player } = this.props;
    player.round.set("value", num.target.value);
  };

  handleSubmit = event => {
    event.preventDefault();
    //console.log(this.props);
    //player.round.set("time", num.target.value);
    //alert('A name was submitted: ' + this.props.player.stage.value);
    this.props.player.stage.submit();
  };


  renderContent() {
    const { player } = this.props;
    console.log(player);
    //const value = player.round.get("value");
    return (
      <textarea
        dir="auto"
        rows="7" 
        cols = "70"
        placeholder = 'Enter your solution here.'
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
        
          {this.renderContent()}
          <p></p>
          
          <button type="submit">Submit</button>
        </form>
        
      </div>
    );
    
  }
}
