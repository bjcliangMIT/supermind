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
            and we will ask you to find solutions for these problems.
            Your task is to give us as many <b>creative solutions</b> as you
            can for solving these two problems. We will be providing suggestions
            for how to structure creative ideation.
            You are encouraged to use these suggestions for thinking of new solutions.
            We will also provide examples of how these suggestions can be used.</p>

          <p> <b>We will give a $10 bonus to the best solutions that are submitted.
            We will be rating the quality of solutions based on whether there are many solutions
            and whether those solutions are very creative. </b> </p>

          <h3> &#8594; Time </h3>
          <p>This experiment will take you approximately <b>25 minutes</b>.
            It is a timed experiment. Please make sure that you have enought time set aside for completion.
          </p>

          <h3> &#8594; Requirements </h3>

          <p> Solutions must address the problem statement and you 
            are <b>not</b> allowed to use the internet to find solutions.
            If we find evidence that answers were taken from an outside source,
            or that answers are incomplete, we reserve the right to deny payment. <b>Answers
              must be your own original ideas</b>.</p>
          <p>Example: If our problem statement is "I want to improve how we teach Calculus in my high school,"
            then two example solutions could be </p>
          <ul>
            <li>(1) "teachers could specialize in which Calculus subjects
              they teach, like with one teacher focusing on derivatives, and another teacher
              focusing on integrals," and </li>
            <li>(2) "the school principal can divert school funding to have more public computers so
              that students can use online resources for extra teaching and practice problems."</li>
          </ul>

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
