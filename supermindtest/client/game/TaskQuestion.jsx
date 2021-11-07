import React from "react";

const problem_statement = "How can 5 people run a coffee shop on a busy city street corner?";
const problem_statement_A = "What kinds of interventions in the labor market \
or other parts of the economy might increase the employment of women and \
other groups that have been disproportionately disadvantaged by the COVID-19 pandemic?"

const activity_statement1 = "Below is an example problem statement for practice. \
    You will have [2 min] to create solutions. \
    You are encouraged to use your understanding of ";
const activity_statement3 = "Below is the same example problem statement for practice\
    as before. Again, you will have [2 min] to create solutions. \
    You are encouraged to use your understanding of ";
const activity_statement2 = " in your solutions."

const note = "Please note: while it is \
    acceptable to provide solutions that are based on past experiences or \
    previous knowledge, it is also acceptable to provide totally made-up \
    solutions that are at least plausible.";


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
        <p> Below is a problem statement that we want solutions for.
          In [5 min], please list as many creative solutions to the
          problem as you can think of. </p>
        <p>
          <b>Problem Statement</b>: <em>{problem_statement_A}</em>
        </p>

      </div>
    );
  }
}

class TaskStimulusFinal extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.player.stage.submit();
  };
  render() {
    const { round, stage, player } = this.props;
    return (

      <div className="task-stimulus">
        <h1> TASK </h1>
        <details>
          <summary className="summary"><b> Concept Recap </b></summary>
          <div className="collapse-content">
            <ul>
              <li><b>Hierarchies</b>: Where group decisions are made by delegating
                them to individuals in the group</li>
              <li><b>Democracies</b>: Where group decisions are made by voting</li>
              <li><b>Markets</b>: Where group decisions are the sum of all the pairwise
                agreements between individual buyers and sellers</li>
              <li><b>Communities</b>: Where group decisions are made by a kind of
                informal consensus based on shared norms and reputations</li>

            </ul>
          </div>
        </details>

        <br></br>
        <p> Below, we again give you the first problem statement. 
          You now have [5 min] to think of as many creative solutions 
          to the problem as you can.  </p>
          <p>This time, you are encouraged to use 
          your understanding of <b>hierarchies, democracies, 
          communities </b>, and <b>markets</b> in your solutions. 
          While it is common to use only one concept for 
          each individual solution that you create, you are welcome 
          to use two or more in each individual solution.
 </p>
        <p>
          <b>Problem Statement</b>: <em>{problem_statement_A}</em>
        </p>

      </div>
    );
  }
}



class TaskStimulusH_collapsed extends React.Component {
  render() {
    const { round, stage, player } = this.props;
    const task_name = "hierarchy"

    return (
      <div className="task-stimulus">
        <h1> {task_name.toUpperCase()} TASK </h1>
        <details>
          <summary className="summary"><b> Concept Recap </b></summary>
          <div className="collapse-content">
            <p> In <b>hierarchies</b>, group decisions are made
              by delegating them to individuals in the group. </p>
            <p> When you are trying
              to think of new solutions to a problem, try asking a question like
              “how would the same group of people organized in a hierarchy try to
              solve this problem?” In our earlier problem about improving access to healthy
              food, one solution could be:
              <em> The Pope of the Catholic Church could direct regional bishops to use
                funds to send weekly shipments of healthy food to the town.</em>
            </p>
          </div>
        </details>
        <br></br>

        <p>
          <b>Activity</b>: {activity_statement1}<b>{task_name}</b> {activity_statement2}
        </p>

        <img src="images/hierarchies.png" width='150px' className="center" /><br></br>
        <p className="end-test">
          <b>Problem Statement</b>: <em>{problem_statement}</em>
        </p>
      </div>
    );
  }
}


class TaskStimulusD_collapsed extends React.Component {
  render() {
    const { round, stage, player } = this.props;
    const task_name = "democracy"

    return (
      <div className="task-stimulus">
        <h1> {task_name.toUpperCase()} TASK </h1>
        <details>
          <summary className="summary"><b> Concept Recap </b></summary>
          <div className="collapse-content">
            <p> In <b>democracies</b>, group decisions are made by voting. </p>
            <p> When you are trying to think of new solutions to a
              problem, try asking a question like “how would the same group of people
              organized in a democracy try to solve this problem?”
              In our earlier problem about improving access to healthy food,
              one solution could be:
              <em> Citizens of the town can vote to use local taxpayer money
                to fund the creation of local gardens.</em>
            </p>
          </div>
        </details>
        <br></br>
        <p>
          <b>Activity</b>: {activity_statement3}<b>{task_name}</b> {activity_statement2}
        </p>
        <p>{note}</p>
        <img src="images/democracies.png" width='150px' className="center" /><br></br>

        <p className="end-test">
          <b>Problem Statement</b>: <em>{problem_statement}</em>
        </p>

      </div>
    );
  }
}

class TaskStimulusM_collapsed extends React.Component {
  render() {
    const { round, stage, player } = this.props;
    const task_name = "market"

    return (
      <div className="task-stimulus">
        <h1> {task_name.toUpperCase()} TASK</h1>
        <details>
          <summary className="summary"><b> Concept Recap</b></summary>
          <div className="collapse-content">
            <p> In <b>markets</b>, group decisions are the sum of all the pairwise agreements between
              individual buyers and sellers.</p>
            <p> When you are trying to think of new solutions to a problem,
              try asking a question like “how would the same group of people organized
              in a market try to
              solve this problem?” In our earlier problem about improving access to
              healthy food, one solution could be:
              <em> Townspeople who grow their own food can sell or barter that food
                at a weekend neighborhood market.</em>
            </p>
          </div>
        </details>

        <br></br>

        <p>
          <b>Activity</b>: {activity_statement3}<b>{task_name}</b> {activity_statement2}
        </p>
        <p>{note}</p>

        <img src="images/markets.png" width='150px' className="center" /><br></br>
        <br></br>
        <p className="end-test">
          <b>Problem Statement</b>: <em>{problem_statement}</em>
        </p>

      </div>
    );
  }
}

class TaskStimulusC_collapsed extends React.Component {
  render() {
    const { round, stage, player } = this.props;
    const task_name = "community"

    return (
      <div className="task-stimulus">
        <h1> {task_name.toUpperCase()} TASK</h1>

        <details>
          <summary className="summary"><b> Concept Recap </b></summary>
          <div className="collapse-content">
            <p> In <b>communities</b>, group decisions are made by a kind of
              informal consensus based on shared norms and reputations</p>
            <p> When you are trying to think of
              new solutions to a problem, try asking a question like
              “how would the same group of people organized in a community
              try to solve this problem?” In our earlier problem about
              improving access to healthy food, one solution could be:
              <em> Some people can donate time, food, or money to a collectively
                managed vegetarian soup kitchen.</em>
            </p>

          </div>
        </details>
        <br></br>
        <p>
          <b>Activity</b>: {activity_statement3}<b>{task_name}</b> {activity_statement2}
        </p>
        <p>{note}</p>

        <img src="images/communities.png" width='150px' className="center" /><br></br>

        <p className="end-test">
          <b>Problem Statement</b>: <em>{problem_statement}</em>
        </p>

      </div>
    );
  }
}

class TaskStimulusE_collapsed extends React.Component {
  render() {
    const { round, stage, player } = this.props;
    const task_name = "ecosystem"

    return (
      <div className="task-stimulus">
        <h1> {task_name.toUpperCase()} TASK </h1>
        <details>
          <summary className="summary"><b> Concept Recap </b></summary>
          <div className="collapse-content">
            <p> In <b>ecosystems</b>, group decisions are made by the law of the jungle
              (whoever has the most power gets what they want) and the survival of the fittest.</p>
            <p> When you are trying to think of new solutions to a problem,
              try asking a question like “how would the same group of people
              organized in an ecosystem try to solve this problem?”
              In our earlier problem about improving access to healthy food,
              one solution could be:
              <em> Having the town’s information uploaded to an online ecosystem of
                grocery companies and food distributors will naturally lead to an
                increase in food access.</em>
            </p>
          </div>
        </details>

        <br></br>
        <p>
          <b>Activity</b>: {activity_statement3}<b>{task_name}</b> {activity_statement2}
        </p>
        <p>{note}</p>

        <img src="images/ecosystem.png" width='150px' className="center" /><br></br>

        <p className="end-test">
          <b>Problem Statement</b>: <em>{problem_statement}</em>
        </p>

      </div>
    );
  }
}


export {
  TaskStimulusH_collapsed,
  TaskStimulusD_collapsed,
  TaskStimulusC_collapsed,
  TaskStimulusM_collapsed,
  TaskStimulusE_collapsed,
  TaskStimulusF,
  TaskStimulusFinal
}
