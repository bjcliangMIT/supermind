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


export default class ExitSurvey extends React.Component {
  static stepName = "ExitSurvey";
  state = {
    strength: "", fair: "", feedback: "", instruction: "",
    relevant: "", whyfeeling: "",
    feeling_nervous: "", feeling_confused: "",
    feeling_relaxed: "", feeling_excited: ""
  };


  handleChangeSlider = name => num => {
    console.log(name)
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
  };


  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  renderLabel = (val) => {
    if (val === 1) {
      return "Weak";
    }
    if (val === 5) {
      return "Strong";
    }
    return val
  };


  render() {
    const { player } = this.props;
    const { strength, fair, feedback, instruction, relevant,
      whyfeeling } = this.state;

    this.state.feeling_nervous = player.get("feeling_nervous")
    this.state.feeling_confused = player.get("feeling_confused")
    this.state.feeling_relaxed = player.get("feeling_relaxed")
    this.state.feeling_excited = player.get("feeling_excited")

    return (
      <Centered>

        <div className="exit-survey">

          <h1> Game Survey</h1>

          <p>
            Please answer the following short survey. You do not have to provide
            any information you feel uncomfortable with.
          </p>

          <form onSubmit={this.handleSubmit}>
            <ol type="1">
              <div >
                <label><li> In general, how hard was it for you to understand and
                  follow the instructions? &nbsp;</li> </label>
                <select name="instruction" id="instruction" value={instruction} onChange={this.handleChange}>
                  <option value="empty"> </option>
                  <option value="easy"> They are very straightforward and easy to understand. </option>
                  <option value="ok"> The level of difficulty is acceptable: not very easy,
                    but enough to understand. </option>
                  <option value="hard"> The instructions are not easy to follow, but I managed to do it. </option>
                  <option value="very hard"> The instructions are very hard to follow,
                    and I am not sure that I understood it correctly. </option>
                </select>
              </div>

              <div>
                <br></br>
                <p> <li>Throughout the experiment, as far as you recall,
                  what did you feel? Please rate the following feelings on a 1-5 scale. </li></p>

                <div className="form-line">
                  <div className='slider'>
                    <label htmlFor="feeling">Nervous
                      {this.renderSlider('feeling_nervous')}</label>
                  </div>

                  <div className='slider'>
                    <label htmlFor="feeling">Confused
                      {this.renderSlider("feeling_confused")}</label>
                  </div>
                </div>
                <div className="form-line">

                  <div className='slider'>
                    <label htmlFor="feeling">Relaxed
                      {this.renderSlider("feeling_relaxed")}</label>
                  </div>

                  <div className='slider'>
                    <label htmlFor="feeling">Excited
                      {this.renderSlider("feeling_excited")} </label>
                  </div>
                </div>
              </div>

              <div>
                <li><label> If your answer is "strong" to one or more
                  of the feelings above, could you please specify why? </label></li>
                <div>
                  <textarea
                    rows="4" 
                    cols="50"
                    id="whyfeeling"
                    name="whyfeeling"
                    value={whyfeeling}
                    onChange={this.handleChange}
                  />
                </div>
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

              <div className="form-line thirds">
                <div>
                  <label htmlFor="strength">
                    <li>How would you describe your strength in the experiment?</li>
                  </label>
                  <div>
                    <textarea
                      dir="auto"
                      id="strength"
                      name="strength"
                      value={strength}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
               
                <div>
                  <label htmlFor="feedback">
                    <li>Feedback, including problems you encountered.</li>
                  </label>
                  <div>
                    <textarea
                      dir="auto"
                      id="feedback"
                      name="feedback"
                      value={feedback}
                      onChange={this.handleChange}
                    />
                  </div>
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
