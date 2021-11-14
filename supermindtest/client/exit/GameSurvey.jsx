import React from "react";
import Slider from "meteor/empirica:slider";
import { Centered } from "meteor/empirica:core";

const Radio = ({ selected, name, value, label, onChange }) => (
  <label className="radio-control">
    <input
      type="radio"
      name={name}
      value={value}
      checked={selected === value}
      onChange={onChange}
    />
    {label}
  </label>
);


export default class GameSurvey extends React.Component {
  static stepName = "ExitSurvey";
  state = {
    suggestion: "", fair: "", feedback: "", instruction: "",
    timer_ins: "", timer_solution: "", timer_suggestion: "",
    relevant: "",
  };

  handleChangeSlider = name => num => {
    const { player } = this.props;
    const value = Math.round(num * 100) / 100;
    this.setState({ [name]: value });
    player.set(name, value);
  };

  handleChange = event => {
    const { player } = this.props;
    const el = event.currentTarget;
    this.setState({ [el.name]: el.value });
    player.set(el.name, el.value);
  };


  renderSlider(name) {
    const { player } = this.props;
    //console.log(this.state.current_name, current_name);
    return (
      <Slider
        min={1}
        max={5}
        stepSize={1}
        labelStepSize={1}
        onChange={this.handleChangeSlider(name)}
        value={player.get(name)}
        labelRenderer={this.renderLabel}
        hideHandleOnEmpty
      />
    );
  }



  handleSubmit = event => {
    event.preventDefault();
    if (this.state.instruction && this.state.timer_solution &&
      this.state.timer_ins && this.state.relevant) {
      this.props.onSubmit(this.state);
    }
    else {
      alert("Please answer the first four questions!");
    }
  };



  renderLabel = (a, b, c) => (val) => {
    if (val === 1) {return a;}
    if (val === 3) {return b;}
    if (val === 5) {return c;}
    return val
  };


  render() {
    const { player } = this.props;
    const { instruction, relevant, timer_ins, timer_solution,
      timer_suggestion, suggestion, feedback } = this.state;

    this.state.instruction = player.get("instruction")
    this.state.relevant = player.get("relevant")
    this.state.timer_ins = player.get("timer_ins")
    this.state.timer_solution = player.get("timer_solution")

    return (
      <Centered>

        <div className="exit-survey">

          <h1> Experiment Survey</h1>

          <p>
            Please answer the following short survey. Only the first four questions are required.
          </p>

          <form onSubmit={this.handleSubmit}>
            <ol type="1">
              <div>
                <label><li> In general, how hard was it for you to understand and
                  follow the instructions? (required) &nbsp;</li> </label>
                  </div>
              <div className="form-slider">
                <Slider 
                  width= {100}
                  min={1}
                  max={5}
                  stepSize={1}
                  labelStepSize={1}
                  onChange={this.handleChangeSlider("instruction")}
                  value={player.get("instruction")}
                  labelRenderer={this.renderLabel('easy', 'ok', 'hard')}
                  hideHandleOnEmpty
                />
              </div>

              <div>
                <li><label> As far as you can recall, have you ever been thinking
                  about how to solve a similar problem as the one you just saw? </label></li>
                <select name="relevant" id="relevant" value={relevant} onChange={this.handleChange}>
                  <option value="empty"> </option>
                  <option value="always"> Yes, I think about it all the time. </option>
                  <option value="sometimes"> Yes, sometimes. </option>
                  <option value="once"> Hard to tell, maybe once or twice. </option>
                  <option value="never"> Not really. </option>
                </select>
              </div>

  

              <div>
                <li><label> Do you think the time given for you to read the instructions was enough? (required) </label></li>
              </div>
              <div className="form-slider">
                <Slider 
                  width= {100}
                  min={1}
                  max={5}
                  stepSize={1}
                  labelStepSize={1}
                  onChange={this.handleChangeSlider("timer_ins")}
                  value={player.get("timer_ins")}
                  labelRenderer={this.renderLabel('too little', 'ok', 'too much')}
                  hideHandleOnEmpty
                />
              </div>

              <div>
                <li><label> Do you think the time given for you to think of solutions was enough? (required) </label></li>
              </div>
              <div className="form-slider">
                <Slider 
                  width= {100}
                  min={1}
                  max={5}
                  stepSize={1}
                  labelStepSize={1}
                  onChange={this.handleChangeSlider("timer_solution")}
                  value={player.get("timer_solution")}
                  labelRenderer={this.renderLabel('too little', 'ok', 'too much')}
                  hideHandleOnEmpty
                />
              </div>

              <div>
                <label htmlFor="timer_suggestion">
                  <li> Is there anything else about the pace of this experiment that you wish to comment on?</li>
                </label>
                <div>
                  <textarea
                    rows="3"
                    cols="70"
                    dir="auto"
                    id="timer_suggestion"
                    name="timer_suggestion"
                    value={timer_suggestion}
                    onChange={this.handleChange}
                  />
                </div>
              </div>




              <div>
                <label htmlFor="suggestion">
                  <li> Could you please give us some suggestions on
                    how to improve the experience of this experiment?</li>
                </label>
                <div>
                  <textarea
                    rows="3"
                    cols="70"
                    dir="auto"
                    id="suggestion"
                    name="suggestion"
                    value={suggestion}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="feedback">
                  <li>Please feel free to provide any other feedback,
                    including about any problems that you encountered.</li>
                </label>
                <div>
                  <textarea
                    rows="3"
                    cols="70"
                    dir="auto"
                    id="feedback"
                    name="feedback"
                    value={feedback}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </ol>
            <button type="submit">Submit</button>
          </form>
        </div>

      </Centered>
    );
  }
}
