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
    timer_ins:"", timer_solution:"", timer_suggestion:"",
    relevant: "", whyfeeling: "",
    feeling_nervous: "", feeling_confused: "",
    feeling_relaxed: "", feeling_excited: ""
  };

  handleChangeSlider = name => num => {
    const { player } = this.props;
    const value = Math.round(num * 100) / 100;
    player.set(name, value);
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

  handleChange = event => {
    const el = event.currentTarget;
    this.setState({ [el.name]: el.value });
    player.set(el.name, el.value);
  };


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

  

  renderLabel = (val) => {
    if (val === 1) {
      return "Not at all";
    }
    if (val === 5) {
      return "Very";
    }
    return val
  };


  render() {
    const { player } = this.props;
    const { suggestion, feedback, instruction, relevant, timer_ins,
      timer_solution, timer_suggestion, whyfeeling } = this.state;

    this.state.feeling_nervous = player.get("feeling_nervous")
    this.state.feeling_confused = player.get("feeling_confused")
    this.state.feeling_relaxed = player.get("feeling_relaxed")
    this.state.feeling_excited = player.get("feeling_excited")

    return (
      <Centered>

        <div className="exit-survey">

          <h1> Game Survey</h1>

          <p>
            Please answer the following short survey. Only the first four questions are required.
          </p>

          <form onSubmit={this.handleSubmit}>
            <ol type="1">
              <div >
                <label><li> In general, how hard was it for you to understand and
                  follow the instructions? (required) &nbsp;</li> </label>
                <select name="instruction" id="instruction" value={instruction} onChange={this.handleChange}>
                  <option> </option>
                  <option value="easy"> The instructions were very straightforward and easy to understand. </option>
                  <option value="ok"> The instructions were straightforward enough; not very easy but understandable. </option>
                  <option value="hard"> The instructions were not easy to follow, but I managed to do it. </option>
                  <option value="very hard"> The instructions were very hard to follow, and I am not sure that I understood them correctly. </option>
                </select>
              </div>

              <div>
                <li><label> As best as you can recall, in the past month, have you ever thought about how to solve
                  problems that are very similar to the three problems that you just saw? (required) </label></li>
                <select name="relevant" id="relevant" value={relevant} onChange={this.handleChange} >
                  <option>  </option>
                  <option value="always"> Yes, I think about it all the time. </option>
                  <option value="sometimes"> Yes, sometimes. </option>
                  <option value="once"> Hard to tell, maybe once or twice. </option>
                  <option value="never"> Not really. </option>
                </select>
              </div>

              <div>
                <li><label> Do you think the time given for you to read the instructions was enough? (required) </label></li>
                <select name="timer_ins" id="timer_ins" value={timer_ins} onChange={this.handleChange} >
                  <option>  </option>
                  <option value="fast"> No, I had to rush and was barely able to read thoroughly. </option>
                  <option value="ok"> About right. </option>
                  <option value="too_much"> I didn't need this much time to read the instructions. </option>
                </select>
              </div>

              <div>
                <li><label> Do you think the time given for you to think of solutions was enough? (required) </label></li>
                <select name="timer_solution" id="timer_solution" value={timer_solution} onChange={this.handleChange}> 
                  <option> </option>
                  <option value="fast"> No, I had to rush and was barely able to think thoroughly. </option>
                  <option value="ok"> About right. </option>
                  <option value="too_much"> I didn't need this much time to think of solutions. </option>
                </select>
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
