import React from "react";
import { Centered } from "meteor/empirica:core";

function RandomChoice(max) {
  const set = new Set();
  while (set.size < max) {
    set.add(Math.floor(Math.random() * max));
  }
  var listset = [...set];
  return listset;
}

const indices = RandomChoice(4);

const Radio = ({ selected, value, label, onChange }) => (
  <div className="radio">
    <input
      type="radio"
      value={value}
      checked={selected === value}
      onChange={onChange}
    />
    <span>{label}</span>

  </div>
);


function displayM(selected, labels, onChange) {
  var rows = [];
  var values = ['A', 'B', 'C', 'D'];
  indices.forEach(i => {
    console.log(i, values[i], labels[i])
    rows.push(
      <Radio
        value={values[i]}
        label={labels[i]}
        selected={selected}
        onChange={onChange}
      />
    )
  });
  return rows;
}


class CThierarchy extends React.Component {

  constructor() {
    super();
    this.state = { name: "" };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({ ct_hierarchy: event.target.value });
    const { player } = this.props;
    player.round.set("value", "[" + event.target.value + "]");
  }

  formSubmit(event) {
    event.preventDefault();
    const { player } = this.props;
    console.log(this.state.ct_hierarchy)
    if (this.state.ct_hierarchy) {
      this.props.player.stage.submit();
      player.round.set("value", "[" + event.target.value + "]");
    } else {
      alert("Please select an answer");
    }

  }

  render() {
    const A = " A faculty member will appoint one of the students as the leader of \
    the group. Then that student will divide the other students into teams and assign \
    each team to clean a different part of the river.";
    const B = " Students can vote for whether they would like to clean the river early \
    in the morning before classes or in the afternoon on the weekends."
    const C = " Each student could donate $50 to a river clean-up fund which is then \
    distributed back to the students via a proportion that is based on how much of \
    the river each student cleaned."
    const D = " Students can chat after class to decide when some of them will go to clean the river."

    var scrips = [A, B, C, D];

    return (

      <form onSubmit={this.formSubmit}>
        <div className="task-stimulus">
          <h3> Practice Question </h3>
          <p> How can a group of 50 freshmen university students clean
            a small river that has a lot of litter from the city?
          </p>

          {displayM(this.state.ct_hierarchy, scrips, this.onValueChange)}

          <br></br>
          <div className="comment"> If you would like extra practice, try thinking of other ways that
            hierarchies could be used to solve this problem. You can put your
            practice solutions in the text boxes below. Please click ‘submit’
            only when you feel confident in your understanding of the concept.
          </div>
          <br></br>
        </div>
        <button type="submit">Next</button>
      </form >
    );
  }
}


class CTDemocracy extends React.Component {

  constructor() {
    super();
    this.state = { name: "" };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({ ct_hierarchy: event.target.value });
    const { player } = this.props;
    player.round.set("value", "[" + event.target.value + "]");
  }

  formSubmit(event) {
    event.preventDefault();
    const { player } = this.props;
    console.log(this.state.ct_hierarchy)
    if (this.state.ct_hierarchy) {
      this.props.player.stage.submit();
      player.round.set("value", this.state.solutions);
    } else {
      alert("Please select an answer");
    }

  }

  render() {

    const A = " One person can be the ‘manager’ and tell the other 4 people what to do based on their skills.";
    const B = " Every month, employees could discuss the problems with their coffee shop, \
    generate possible solutions, and then vote on which potential solutions to use."
    const C = " Each employee could be compensated for each individual task, \
    like getting 10% of the profit for each drink made, or getting a few dollars \
    every time that person cleans the floor."
    const D = " These 5 people could run the shop based on consensus \
    with all decisions requiring all 5 people to agree."

    var scrips = [A, B, C, D];

    return (

      <form onSubmit={this.formSubmit}>
        <div className="task-stimulus">
          <h3> Practice Question </h3>
          <p> How can 5 people run a coffee shop on a busy city street corner?
          </p>
          {displayM(this.state.ct_hierarchy, scrips, this.onValueChange)}
          <br></br>
          <div className="comment"> If you would like extra practice, try thinking of other ways that
            democracies could be used to solve this problem. You can put your
            practice solutions in the text boxes below. Please click ‘submit’
            only when you feel confident in your understanding of the concept.
          </div>
          <br></br>
          <button type="submit">Next</button>
        </div>
      </form>
    );
  }
}


class CTMarket extends React.Component {

  constructor() {
    super();
    this.state = { name: "" };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({ ct_hierarchy: event.target.value });
    const { player } = this.props;
    player.round.set("value", "[" + event.target.value + "]");
  }

  formSubmit(event) {
    event.preventDefault();
    const { player } = this.props;
    console.log(this.state.ct_hierarchy)
    if (this.state.ct_hierarchy) {
      this.props.player.stage.submit();
      player.round.set("value", this.state.solutions);
    } else {
      alert("Please select an answer");
    }

  }

  render() {

    const A = " The elderly person with the most professional chef experience could select \
    and edit the recipes from all the others and send out the final collection.";
    const B = " For each country, the 10 elderly people could vote for their favorite \
    recipes and then send the winning recipes to everyone in the group."
    const C = " Each elderly person could receive credit for each recipe that \
    they upload onto an online site, and then use that credit to look at other recipes."
    const D = " Elderly people could talk to each other about the recipes they \
    like best and the recipes that others have recommended to them. \
     In this way, the popular recipes would become widely known in the overall group."

    var scrips = [A, B, C, D];

    return (

      <form onSubmit={this.formSubmit}>
        <div className="task-stimulus">
          <h3> Practice Question </h3>
          <p> How can 80 elderly people from 8 different countries (10 from each country) find ways to share their favorite recipes with one another?
          </p>
          {displayM(this.state.ct_hierarchy, scrips, this.onValueChange)}
          <br></br><br></br>
          <div className="comment">  If you would like extra practice, try thinking of other ways that
            markets could be used to solve this problem. You can put your
            practice solutions in the text boxes below. Please click ‘submit’
            only when you feel confident in your understanding of the concept.
          </div>
          <br></br>
        </div>
        <button type="submit">Next</button>

      </form >


    );
  }
}


class CTCommunity extends React.Component {

  constructor() {
    super();
    this.state = { name: "" };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({ ct_hierarchy: event.target.value });
    const { player } = this.props;
    player.round.set("value", "[" + event.target.value + "]");
  }

  formSubmit(event) {
    event.preventDefault();
    const { player } = this.props;
    console.log(this.state.ct_hierarchy)
    if (this.state.ct_hierarchy) {
      this.props.player.stage.submit();
      player.round.set("value", this.state.solutions);
    } else {
      alert("Please select an answer");
    }

  }

  render() {
    const A = " One neighbor could take charge and tell the other neighbors what to do. \
    For instance, that person might tell some neighbors to buy lumber and tools, others \
    to cut the boards, and still others to assemble the materials into dog houses.";
    const B = " Neighbors can find dog house designs online and then take a majority \
    vote for which doghouse design to use for every doghouse."
    const C = " Each neighbor would pay other neighbors to do different parts \
    of the work of constructing the first neighbor’s dog house.  For instance, \
    some neighbors might specialize in acquiring and selling lumber and other \
    supplies to all the others.  Other neighbors might specialize in actually \
    constructing the dog houses using these materials."
    const D = " People could work together informally, with small groups \
    agreeing on what to do as they go along."

    var scrips = [A, B, C, D];

    return (

      <form onSubmit={this.formSubmit}>
        <div className="task-stimulus">
          <h3> Practice Question </h3>
          <p> How can 20 neighbors who all have dogs build 20 dog houses for their dogs?
          </p>

          {displayM(this.state.ct_hierarchy, scrips, this.onValueChange)}
          <br></br>
          <div className="comment"> If you would like extra practice, try thinking of other ways that
            communities could be used to solve this problem. You can put your
            practice solutions in the text boxes below. Please click ‘submit’
            only when you feel confident in your understanding of the concept.
          </div>
          <br></br>
        </div>
        <button type="submit">Next</button>
      </form >
    );
  }
}

export {
  CThierarchy, CTCommunity, CTDemocracy, CTMarket
}