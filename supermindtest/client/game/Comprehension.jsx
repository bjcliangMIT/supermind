import React from "react";
import { Centered } from "meteor/empirica:core";


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
    return (

      <form onSubmit={this.formSubmit}>
        <div className="task-stimulus">
          <h3> Practice Question </h3>
          <p> How can a group of 50 freshmen University students clean a small river that has a lot of litter from the city?
          </p>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="A"
                checked={this.state.ct_hierarchy === "A"}
                onChange={this.onValueChange}
              />
            </label>
            <span> Students can be divided into teams of 10 students, the teams could split up the
              river into 5 parts, and the team with the students who have the highest average biology
              test scores would clean the dirtiest part of the river, and the team with the students
              who have the lowest average biology test scores would clean the least dirtiest part of
              the river.</span>

          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="B"
                checked={this.state.ct_hierarchy === "B"}
                onChange={this.onValueChange}
              />
            </label>
            <span> Students can vote for whether they would like to clean the
              river early in the morning before classes or in the afternoon on the weekends.
            </span>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="C"
                checked={this.state.ct_hierarchy === "C"}
                onChange={this.onValueChange}
              />
            </label>
            <span> Each student could donate $50 to a collective river fund which is 
              then distributed back to the students via a proportion that is 
              based on how much of the river they cleaned.
            </span>
          </div>

          <div className="radio">
            <label>
              <input
                type="radio"
                value="D"
                checked={this.state.ct_hierarchy === "D"}
                onChange={this.onValueChange}
              />
            </label>
            <span> Students can just chat after class to decide when some of them will 
              go to clean the river and also express gratitude to one another for 
              voluntarily going to clean.
            </span>

            <br></br><br></br>
            <div className="comment"> If you would like extra practice, try thinking of other ways that 
              hierarchies could be used to solve this problem. You can put your 
              practice solutions in the text boxes below. Please click ‘submit’ 
              only when you feel confident in your understanding of the concept.

               </div>
          </div>
          <button type="submit">Next</button>
        </div>
      </form>
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
    return (

      <form onSubmit={this.formSubmit}>
        <div className="task-stimulus">
          <h3> Practice Question </h3>
          <p> How can 5 people run a coffee shop on a busy city street corner?
         </p>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="A"
                checked={this.state.ct_hierarchy === "A"}
                onChange={this.onValueChange}
              />
            </label>
            <span> One person can be the ‘manager’ and tell the other 4 people what to do based on their skills.</span>

          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="B"
                checked={this.state.ct_hierarchy === "B"}
                onChange={this.onValueChange}
              />
            </label>
            <span> Every month, employees could collectively write out the problems they have with their coffee shop and take a majority vote for how to solve each problem.

            </span>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="C"
                checked={this.state.ct_hierarchy === "C"}
                onChange={this.onValueChange}
              />
            </label>
            <span> Each employee could be compensated for each individual task, like getting 10% of the profit for each drink made, or getting a few dollars every time that person cleans the floor once.    </span>
          </div>

          <div className="radio">
            <label>
              <input
                type="radio"
                value="D"
                checked={this.state.ct_hierarchy === "D"}
                onChange={this.onValueChange}
              />
            </label>
            <span> These 5 people could run the shop based on implicit norms that they share with one other.  </span>
          </div>
          <br></br><br></br>
            <div className="comment"> If you would like extra practice, try thinking of other ways that 
              democracies could be used to solve this problem. You can put your 
              practice solutions in the text boxes below. Please click ‘submit’ 
              only when you feel confident in your understanding of the concept.

               </div>


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
    return (

      <form onSubmit={this.formSubmit}>
        <div className="task-stimulus">
          <h3> Practice Question </h3>
          <p> How can 80 elderly people from 8 different countries (10 from each country) find ways to share their favorite recipes with one another?
</p>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="A"
                checked={this.state.ct_hierarchy === "A"}
                onChange={this.onValueChange}
              />
            </label>
            <span> The elderly person with the most professional chef experience could 
              rank and organize the other 79 people by years of cooking experience 
              and then share the recipes based on that rankings.</span>

          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="B"
                checked={this.state.ct_hierarchy === "B"}
                onChange={this.onValueChange}
              />
            </label>
            <span> For each country, the 10 elderly people could vote for their favorite recipe and 
              mail a copy of the recipe instructions to the 70 other elderly people.</span>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="C"
                checked={this.state.ct_hierarchy === "C"}
                onChange={this.onValueChange}
              />
            </label>
            <span> Each elderly person could receive credit for each recipe that they 
              upload onto an online site, and then use that credit to look at other recipes.</span>
          </div>

          <div className="radio">
            <label>
              <input
                type="radio"
                value="D"
                checked={this.state.ct_hierarchy === "D"}
                onChange={this.onValueChange}
              />
            </label>
            <span> Elderly people could call one another and share recipes over the phone, 
              and call new people based on references from the person they just talked to. </span>

<br></br><br></br>
            <div className="comment">  If you would like extra practice, try thinking of other ways that 
              markets could be used to solve this problem. You can put your 
              practice solutions in the text boxes below. Please click ‘submit’ 
              only when you feel confident in your understanding of the concept.

               </div>
          </div>
          <button type="submit">Next</button>
        </div>

      </form>

      
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
    return (

      <form onSubmit={this.formSubmit}>
        <div className="task-stimulus">
          <h3> Practice Question </h3>
          <p> How can 20 neighbors who all have dogs build 20 dog houses for their dogs?
</p>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="A"
                checked={this.state.ct_hierarchy === "A"}
                onChange={this.onValueChange}
              />
            </label>
            <span> Neighbors could be organized in a top-down way based on the value 
              of their human house (with the neighbor who owns the most expensive 
              house at the top, and the neighbor with the least expensive house 
              at the bottom), and then higher ranked neighbors can direct 
              the actions of those beneath them.</span>

          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="B"
                checked={this.state.ct_hierarchy === "B"}
                onChange={this.onValueChange}
              />
            </label>
            <span> Neighbors can find dog house designs online and then 
              take a majority vote for which doghouse design to use for every doghouse. </span>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="C"
                checked={this.state.ct_hierarchy === "C"}
                onChange={this.onValueChange}
              />
            </label>
            <span> One neighbor could divide the other neighbors into 
              teams for designing, purchasing materials, and building 
              based on their backgrounds, and different teams could sell 
              their labor to one another for different tasks in dog-house building. </span>
          </div>

          <div className="radio">
            <label>
              <input
                type="radio"
                value="D"
                checked={this.state.ct_hierarchy === "D"}
                onChange={this.onValueChange}
              />
            </label>
            <span> People could decide who does which work based on the 
              cultural expectations of the local community. </span>
              <br></br><br></br>
            <div className="comment"> If you would like extra practice, try thinking of other ways that 
              communities could be used to solve this problem. You can put your 
              practice solutions in the text boxes below. Please click ‘submit’ 
              only when you feel confident in your understanding of the concept.

               </div>
          </div>
          <button type="submit">Next</button>
        </div>
      </form>
    );
  }
}

export {
  CThierarchy, CTCommunity, CTDemocracy, CTMarket
}