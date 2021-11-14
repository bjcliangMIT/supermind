import React from "react";
import { activity_statement } from "./utils";

const problem_statement = "How can 5 people run a coffee shop on a busy city street corner?";
const problem_statement_A = "What kinds of interventions in the labor market \
or other parts of the economy might increase the employment of women that\
 have been affected by the COVID-19 pandemic?"

class TaskStimulusF extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.player.stage.submit();
  };
  render() {
    const { game, round, stage, player } = this.props;
    return (
      <div className="task-stimulus">
        <h1> TASK </h1>
        <p> Below is a problem statement that we want solutions for.
          In <b>{game.treatment.taskTime} mins</b>, please list as many creative solutions to the
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
    const { game, round, stage, player } = this.props;
    return (

      <div className="task-stimulus">
        <h1> TASK </h1>
        <details>
          <summary className="summary"><b> Click here for Concept Recap </b></summary>
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
          You now have <b>{game.treatment.taskTime} mins</b> to think of as many creative solutions
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
    const { game, round, stage, player } = this.props;
    const task_name = "hierarchies"

    return (
      <div className="task-stimulus">
        <h1> {task_name.toUpperCase()} TASK </h1>
        <details>
          <summary className="summary"><b> Click here for Concept Recap </b></summary>
          <div className="collapse-content">
            <p> In <b>hierarchies</b>, group decisions are made
              by delegating decisions to individuals in the group. </p>
            <p> When you are trying
              to think of new solutions to a problem, try asking a question like
              “how would the same group of people organized in a hierarchy try to
              solve this problem?” We present an example below:</p>
            <p><em> <b> Problem Statement: </b> How can people living in a large
              rural town (~50,000) improve access to healthy food?</em></p>
            <p><em> <b> Example Solution: </b> The Pope of the Catholic Church could direct regional bishops to use
              funds to send weekly shipments of healthy food to the town.</em>
            </p>
          </div>
        </details>
        <br></br>

        {activity_statement(game.treatment.practiceTime, task_name)}

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
    const { game, round, stage, player } = this.props;
    const task_name = "democracies"

    return (
      <div className="task-stimulus">
        <h1> {task_name.toUpperCase()} TASK </h1>
        <details>
          <summary className="summary"><b> Click here for Concept Recap </b></summary>
          <div className="collapse-content">
            <p> In <b>democracies</b>, group decisions are made by voting. </p>
            <p> When you are trying to think of new solutions to a
              problem, try asking a question like “how would the same group of people
              organized in a democracy try to solve this problem?”
              We present an example below:</p>
            <p><em> <b> Problem Statement: </b> How can people living in a large
              rural town (~50,000) improve access to healthy food?</em></p>
            <p><em> <b> Example Solution: </b>Citizens of the town can vote to use local taxpayer money
              to fund the creation of local gardens.</em></p>
          </div>
        </details>
        <br></br>
        {activity_statement(game.treatment.practiceTime, task_name)}
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
    const { game, round, stage, player } = this.props;
    const task_name = "markets"

    return (
      <div className="task-stimulus">
        <h1> {task_name.toUpperCase()} TASK</h1>
        <details>
          <summary className="summary"><b> Click here for Concept Recap</b></summary>
          <div className="collapse-content">
            <p> In <b>markets</b>, group decisions are the sum of all the pairwise agreements between
              individual buyers and sellers.</p>
            <p> When you are trying to think of new solutions to a problem,
              try asking a question like “how would the same group of people organized
              in a market try to solve this problem?” We present an example below:</p>
            <p><em> <b> Problem Statement: </b> How can people living in a large
              rural town (~50,000) improve access to healthy food?</em></p>
            <p><em> <b> Example Solution: </b>Townspeople who grow their own food can sell or barter that food
              at a weekend neighborhood market.</em></p>
          </div>
        </details>

        <br></br>

        {activity_statement(game.treatment.practiceTime, task_name)}

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
    const { game, round, stage, player } = this.props;
    const task_name = "communities"

    return (
      <div className="task-stimulus">
        <h1> {task_name.toUpperCase()} TASK</h1>

        <details>
          <summary className="summary"><b> Click here for Concept Recap </b></summary>
          <div className="collapse-content">
            <p> In <b>communities</b>, group decisions are made by a kind of
              informal consensus based on shared norms and reputations</p>
            <p> When you are trying to think of
              new solutions to a problem, try asking a question like
              “how would the same group of people organized in a community
              try to solve this problem?” We present an example below:</p>
            <p><em> <b> Problem Statement: </b> How can people living in a large
              rural town (~50,000) improve access to healthy food?</em></p>
            <p>
              <em> <b> Example Solution: </b> Some people can donate time, food, or money to a collectively
                managed vegetarian soup kitchen.</em>
            </p>

          </div>
        </details>
        <br></br>
        {activity_statement(game.treatment.practiceTime, task_name)}

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
    const { game, round, stage, player } = this.props;
    const task_name = "ecosystems"

    return (
      <div className="task-stimulus">
        <h1> {task_name.toUpperCase()} TASK </h1>
        <details>
          <summary className="summary"><b> Click here for Concept Recap </b></summary>
          <div className="collapse-content">
            <p> In <b>ecosystems</b>, group decisions are made by the law of the jungle
              (whoever has the most power gets what they want) and the survival of the fittest.</p>
            <p> When you are trying to think of new solutions to a problem,
              try asking a question like “how would the same group of people
              organized in an ecosystem try to solve this problem?”
              We present an example below:</p>
            <p><em> <b> Problem Statement: </b> How can people living in a large
              rural town (~50,000) improve access to healthy food?</em></p>
            <p>
              <em> <b> Example Solution: </b> Having the town’s information uploaded to an online ecosystem of
                grocery companies and food distributors will naturally lead to an
                increase in food access.</em>
            </p>
          </div>
        </details>

        <br></br>
        {activity_statement(game.treatment.practiceTime, task_name)}

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
