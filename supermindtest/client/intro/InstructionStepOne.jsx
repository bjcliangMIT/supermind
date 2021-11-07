import React from "react";

import { Centered } from "meteor/empirica:core";

export default class InstructionStepOne extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev } = this.props;

    return (
      <Centered>
        <div className="instructions">

          <h1> Introduction </h1>
          <p>  For this task, we will tell you two problems that we want to
            find solutions for. </p>
            <p> Your goal is to give us as many <b>creative solutions</b> as you can
            for solving these two problems.</p>  
            <p> We will be providing suggestions 
            for how to structure your thinking that you are
            encouraged to use for thinking of new solutions. We will also provide examples of
            how these suggestions can be used.</p>

          <div className="form-line">

            <button type="button" onClick={onNext}>
              Next
            </button>

          </div>
        </div>
      </Centered>
    );
  }
}
