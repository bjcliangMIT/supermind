import React from "react";

import { Centered } from "meteor/empirica:core";

export default class InstructionStepOne extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev } = this.props;

    return (
      <Centered>
        <div className="instructions">

          <h1> Introduction </h1>

          <p>  For this task, we will give you a few problem statements
            and we will ask you to find solutions for these problems. </p>
          <p>  Your task is to give us as many <b>creative solutions</b> as you can for solving these two problems. </p>
          <p>We will be providing suggestions for how to structure creative ideation.
            You are encouraged to use these suggestions for thinking of new solutions.
            We will also provide examples of how these suggestions can be used.</p>
          <p>This experiment will take you approximately <b>25 minutes</b>.
            It is a timed experiment. Please make sure that you have enought time set aside for completion.
          </p>

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
