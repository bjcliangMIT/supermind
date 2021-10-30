import React from "react";

import { Centered } from "meteor/empirica:core";

export default class InstructionStepOne extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, game } = this.props;

    return (
      <Centered>
        <div className="instructions">

          <h1> Introduction </h1>
          <p>Thank you for participating. </p>
          <p>  For this task, we will tell you a problem that we want to
            find solutions for. Your goal is to give us as many <b>creative solutions</b> as you can
            for solving this problem.  We will be providing theoretical information that you are
            encouraged to use for thinking of new solutions. We will also provide examples of
            how this theoretical information can be used.</p>

          <img src="images/light.jpg" width='300px' />
          <p>
            <button type="button" onClick={onPrev} disabled={!hasPrev}>
              Previous
            </button>
            <button type="button" onClick={onNext} disabled={!hasNext}>
              Next
            </button>
          </p>
        </div>
      </Centered>
    );
  }
}
