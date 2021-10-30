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
  state = { strength: "", fair: "", feedback: "", instruction:"" ,
  feeling_nervous:"", feeling_satisfied:"", feeling_relaxed:"", feeling_excited:""};


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
    if(val === 1){
      return "Weak";
    }
    if(val === 5){
      return "Strong";
    }
    return val
  };


  render() {
    const { player } = this.props;
    const { strength, fair, feedback, instruction} = this.state;
    
    this.state.feeling_nervous = player.get("feeling_nervous")
    this.state.feeling_satisfied = player.get("feeling_satisfied")
    this.state.feeling_relaxed = player.get("feeling_relaxed")
    this.state.feeling_excited = player.get("feeling_excited")

    return (
      <Centered>
        
        <div className="exit-survey">
        
          <h1> Exit Survey </h1>
          
          <p>
          Please submit the following code to receive your bonus:{" "}<strong>{player._id}</strong>.
          </p>
          <p>
            You final <strong>bonus</strong> is in addition of the{" "}
            <strong>1 base reward</strong> for completing the HIT.
          </p>
          <br />
          <p>
            Please answer the following short survey. You do not have to provide
            any information you feel uncomfortable with.
          </p>

          
          <form onSubmit={this.handleSubmit}>

          <ol type = "1">
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
                  <label htmlFor="feeling">Satisfied
                  {this.renderSlider("feeling_satisfied") }</label>
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
                <label htmlFor="fair"> <li>Do you feel the pay was fair?</li></label>
                <div>
                  <textarea
                    dir="auto"
                    id="fair"
                    name="fair"
                    value={fair}
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
