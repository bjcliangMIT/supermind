import React from "react";

import { Centered } from "meteor/empirica:core";

export default class InstructionGroupify extends React.Component {
  render() {
    const { hasPrev, onNext, onPrev } = this.props;
    return (
      <Centered>
        <div className="instructions">
          <h1> Groupify Instructions </h1>
          <h3> WHAT IS <b>GROUPIFY DESIGN?</b> </h3>

          <p>
            The ‘groupify’ design move recognizes that, for many important problems in the world, multiple people must work together to adequately solve those problems. Whether they are 2 people or 2 million people, these people can be organized in five ways: via hierarchy, democracy, markets, community, or ecosystem. Definitions for each groupify type are listed below:
            <li> <b>Hierarchies</b>: Where group decisions are made by delegating them to individuals in the group </li>
            <li> <b>Democracies</b>: Where group decisions are made by voting </li>
            <li> <b>Markets</b>: Where group decisions are the sum of all the pairwise agreements between individual buyers and sellers </li>
            <li> <b>Communities</b>: Where group decisions are made by a kind of informal consensus based on shared norms and reputations </li>
            <li> <b>Ecosystems</b>: Where group decisions are made by the law of the jungle (whoever has the most power gets what they want) and the survival of the fittest </li>
          </p>

          <p>
            
            <button type="button" onClick={onNext}>
              Next
            </button>
            <button type="button" onClick={onPrev} disabled={!hasPrev}>
              Previous
            </button>
          </p>
        </div>
      </Centered>
    );
  }
}
