import React from "react";


const problem_statement = "How can people living in a mid-sized urban area clean a river \
    after two speedboats have collided and oil and debris have littered the water?";
const activity_statement1 = "On the next page, we will present you with one new problem statement. You will \
    have [1 min] to create solutions. You are encouraged to use the theoretical understanding of ";
const activity_statement2 = " in your solutions. Please note: while it is \
    acceptable to provide solutions that are based on past experiences or \
    previous knowledge, it is also acceptable to provide totally made-up \
    solutions that are at least plausible.";


class TaskStimulusH extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.player.stage.submit();
  };

  render() {
    const { round, stage, player } = this.props;
    const task_name = "hierarchy"


    return (
      <div className="task-stimulus">
        <h1> {task_name.toUpperCase()} </h1>

        <p>
        <b>Theoretical Information</b>: Many problems are not solved alone, 
        but by many humans who have organized themselves in one of five ways. 
        One way is through hierarchies, where group decisions are made 
        by delegating them to individuals in the group. When you are trying 
        to think of new solutions to a problem, try asking a question like 
        “how would the same group of people organized in a hierarchy try to 
        solve this problem?” In our earlier problem about improving access to healthy 
        food, one solution could be: 
        </p>

        <p>
        <em>The Pope of the Catholic Church could direct regional bishops to use 
        funds to send weekly shipments of healthy food to the town.</em>
        </p>

        <img src="images/hierarchies.png" width = '200px' className="center"/>

        <p>
        <b>Activity</b>: {activity_statement1}<b>{task_name}</b> {activity_statement2} 
        </p>

        <form onSubmit={this.handleSubmit}>
          <button type="submit">Next</button>
        </form>

      </div>
    );
  }
}


class TaskStimulusD extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.player.stage.submit();
  };
  render() {
    const { round, stage, player } = this.props;
    const task_name = "democracy"

    return (
      <div className="task-stimulus">
        <h1> {task_name.toUpperCase()} </h1>

        <p>
        <b>Theoretical Information</b>: Another way that humans can organize themselves is through democracies, where group decisions are made by voting. When you are trying to think of new solutions to a problem, try asking a question like “how would the same group of people organized in a democracy try to solve this problem?” In our earlier problem about improving access to healthy food, one solution could be: 

        </p>

        <p>
        <em>Citizens of the town can vote to use local taxpayer money to fund the creation of local gardens.</em>
        </p>

        <img src="images/democracies.png" width = '200px' className="center"/>

        <p>
        <b>Activity</b>: {activity_statement1}<b>{task_name}</b> {activity_statement2} 
        </p>

        <form onSubmit={this.handleSubmit}>
          <button type="submit">Next</button>
        </form>

      </div>
    );
  }
}

class TaskStimulusM extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.player.stage.submit();
  };
  render() {
    const { round, stage, player } = this.props;
    const task_name = "market"

    return (
      <div className="task-stimulus">
        <h1> {task_name.toUpperCase()} </h1>

        <p>
        <b>Theoretical Information</b>: Another way that humans can organize themselves is through markets, where group decisions are the sum of all the pairwise agreements between individual buyers and sellers. When you are trying to think of new solutions to a problem, try asking a question like “how would the same group of people organized in a market try to solve this problem?” In our earlier problem about improving access to healthy food, one solution could be: 

        </p>

        <p>
        <em>Townspeople who grow their own food can sell or barter that food at a weekend neighborhood market.</em>
        </p>

        <img src="images/markets.png" width = '200px' className="center"/>

        <p>
        <b>Activity</b>: {activity_statement1}<b>{task_name}</b> {activity_statement2} 
        </p>

        <form onSubmit={this.handleSubmit}>
          <button type="submit">Next</button>
        </form>

      </div>
    );
  }
}

class TaskStimulusC extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.player.stage.submit();
  };
  render() {
    const { round, stage, player } = this.props;
    const task_name = "community"

    return (
      <div className="task-stimulus">
        <h1> {task_name.toUpperCase()} </h1>

        <p>
        <b>Theoretical Information</b>: Another way that humans can organize themselves is through communities, where group decisions are made by a kind of informal consensus based on shared norms and reputations. When you are trying to think of new solutions to a problem, try asking a question like “how would the same group of people organized in a community try to solve this problem?” In our earlier problem about improving access to healthy food, one solution could be: 

        </p>

        <p>
        <em>Some people can donate time, food, or money to a collectively managed vegetarian soup kitchen.</em>
        </p>

        <img src="images/communities.png" width = '200px' className="center"/>

        <p>
        <b>Activity</b>: {activity_statement1}<b>{task_name}</b> {activity_statement2} 
        </p>

        <form onSubmit={this.handleSubmit}>
          <button type="submit">Next</button>
        </form>

      </div>
    );
  }
}

class TaskStimulusE extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.player.stage.submit();
  };
  render() {
    const { round, stage, player } = this.props;
    const task_name = "ecosystem"

    return (
      <div className="task-stimulus">
        <h1> {task_name.toUpperCase()} </h1>
        <p>
        <b>Theoretical Information</b>: Another way that humans can organize themselves is through ecosystems, where group decisions are made by the law of the jungle (whoever has the most power gets what they want) and the survival of the fittest. When you are trying to think of new solutions to a problem, try asking a question like “how would the same group of people organized in an ecosystem try to solve this problem?” In our earlier problem about improving access to healthy food, one solution could be: 

        </p>

        <p>
        <em>Having the town’s information uploaded to an online ecosystem of grocery companies and food distributors will naturally lead to an increase in food access.</em>
        </p>

        <img src="images/ecosystem.png" width = '200px' className="center"/>

        <p>
        <b>Activity</b>: {activity_statement1}<b>{task_name}</b> {activity_statement2} 
        </p>

        <form onSubmit={this.handleSubmit}>
          <button type="submit">Next</button>
        </form>

      </div>
    );
  }
}

class TaskStimulusF extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.player.stage.submit();
  };
  render() {
    const { round, stage, player } = this.props;
    return (
      <div className="task-stimulus">
        <h1> TASK </h1>
        
        <p>
        Now, you will have 
        [5 min] to think of as many creative solutions to the problem. </p>
        <p>
        <b>Problem Statement</b>: <em>{problem_statement}</em>
        </p>

      </div>
    );
  }
}


class TaskStimulusComplete extends React.Component {
  render() {
    const { round, stage, player } = this.props;
    return (
      <div className="task-stimulus">
        <h1> FINAL TASK </h1>
        <img src="images/total.png" width = '700px' className="center"/>
        
        <p>
        Now, we will give you one last problem statement. This time, you will have 
        [5 min] to think of as many creative solutions to the problem. For this problem statement, 
        you are encouraged to use all five ways of organizing: <b>hierarchy, 
        democracy, market, community, and ecosystem</b>. This will be your last task.   </p>

      </div>
    );
  }
}



export{
  TaskStimulusH,
  TaskStimulusD, 
  TaskStimulusC,
  TaskStimulusM,
  TaskStimulusE,
  TaskStimulusF,

}
