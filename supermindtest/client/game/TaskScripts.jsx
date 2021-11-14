import React from "react";

class TaskStimulusH extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.player.stage.submit();
  };

  render() {
    const { round, stage, player } = this.props;
    const task_name = "hierarchies"


    return (
      <div className="task-stimulus">
        <h1> {task_name.toUpperCase()} </h1>

        <p>
          Many problems are not solved alone,
          but by many humans who have organized themselves in different ways.
          One way is through <b>hierarchies</b>, where group decisions are made
          by delegating decisions to individuals in the group. When you are trying
          to think of new solutions to a problem, try asking a question like
          “how would the same group of people organized in a hierarchy try to
          solve this problem?” 
        </p>

        <p>
        To better understand how to use the concept of hierarchy for creating solutions, 
        we have provided a second problem statement and an example of a hierarchy 
        that can solve that problem. Note that while the example is plausible, 
        it is not necessarily based on past experience.
        </p>

        <p><b>Problem statement</b>: How can people living in a large rural town (~50,000) 
        improve access to healthy food?</p>

        <p><b>Example solution</b>: <em>The Pope of the Catholic Church could direct regional 
        bishops to use funds to send weekly shipments of healthy food to the town.</em></p>

        <img src="images/hierarchies.png" width='200px' className="center" />

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
    const task_name = "democracies"

    return (
      <div className="task-stimulus">
        <h1> {task_name.toUpperCase()} </h1>

        <p> Another way that two or more people can solve problems is through 
           <b> democracies</b>, where group decisions are made by voting. 
          When you are trying to think of new solutions to a problem, 
          try asking a question like “how would the same group of people 
          organized in a democracy try to solve this problem?” We present an example below: </p>


        <p><b>Problem statement</b>: How can people living in a large rural town (~50,000) 
        improve access to healthy food?</p>

        <p><b>Example solution</b>: <em>Citizens of the town can vote to use 
          local taxpayer money to fund the creation of local gardens.</em>
        </p>

        <img src="images/democracies.png" width='200px' className="center" />


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
    const task_name = "markets"

    return (
      <div className="task-stimulus">
        <h1> {task_name.toUpperCase()} </h1>

        <p>
        Another way that two or more people can solve problems is through
          <b> markets</b>, where group decisions are the sum of all the pairwise 
          agreements between individual buyers and sellers. 
          When you are trying to think of new solutions to a problem, 
          try asking a question like “how would the same group of people 
          organized in a market try to solve this problem?” We present an example below:
        </p>

        <p><b>Problem statement</b>: How can people living in a large rural town (~50,000) 
        improve access to healthy food?</p>

        <p><b>Example solution</b>: <em> Townspeople who grow their own food can sell or 
          barter that food at a weekend neighborhood market.</em>
        </p>

        <img src="images/markets.png" width='200px' className="center" />


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
    const task_name = "communities"

    return (
      <div className="task-stimulus">
        <h1> {task_name.toUpperCase()} </h1>

        <p>
        Another way that two or more people can solve problems is through
          <b> communities</b>,  where group decisions are made by a kind of 
          informal consensus based on shared norms and reputations. 
          When you are trying to think of new solutions to a problem, 
          try asking a question like “how would the same group 
          of people organized in a community try to solve this problem?” 
          We present an example below:
        </p>

        <p><b>Problem statement</b>: How can people living in a large rural town (~50,000) 
        improve access to healthy food?</p>

        <p><b>Example solution</b>: <em> Some people can donate time, food, or money to a collectively managed vegetarian soup kitchen.</em>
        </p>

        <img src="images/communities.png" width='200px' className="center" />


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
    const task_name = "ecosystems"

    return (
      <div className="task-stimulus">
        <h1> {task_name.toUpperCase()} </h1>
        <p>
        Another way that two or more people can solve problems is through
          <b> ecosystems</b>,  where group decisions are made by the law of the jungle 
          (whoever has the most power gets what they want) and the survival of the fittest. 
          When you are trying to think of new solutions to a problem, try asking a question 
          like “how would the same group of people organized in an ecosystem try to solve 
          this problem?” We present an example below:

        </p>
        <p><b>Problem statement</b>: How can people living in a large rural town (~50,000) 
        improve access to healthy food?</p>
        <p>
          <em>Having the town’s information uploaded to an online ecosystem of grocery companies and food distributors will naturally lead to an increase in food access.</em>
        </p>

        <img src="images/ecosystem.png" width='200px' className="center" />


        <form onSubmit={this.handleSubmit}>
          <button type="submit">Next</button>
        </form>

      </div>
    );
  }
}






export {
  TaskStimulusH,
  TaskStimulusD,
  TaskStimulusC,
  TaskStimulusM,
  TaskStimulusE,
}
