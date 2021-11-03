import React from "react";

import { Centered } from "meteor/empirica:core";

const Radio = ({ selected, name, value, label, onChange }) => (
  <label class="radio-control">
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

export default class IntroSurvey extends React.Component {
  static stepName = "IntroSurvey";
  state = {
    age: "NA", gender: "", education: "", race: "",
    employed: "", government: "", polviews: "", relevant: ""
  };

  handleChange = event => {
    const { player } = this.props;
    const el = event.currentTarget;
    this.setState({ [el.name]: el.value });
    player.set(el.name, el.value);
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.age < 18 || this.state.age > 100) {
      alert("Please try again and enter a valid age.");
    } else {
      //this.props.onNext();
      this.props.onSubmit(this.state);
    }
  };

  render() {
    const { player } = this.props;
    const { age, gender, education, race, employed, government, polviews, relevant } = this.state;
    console.log(player);

    return (
      <Centered>
        <div className="intro-survey">
          <h1> Demographics Survey </h1>
          <p>
            Please answer the following short survey. You do not have to provide
            any information you feel uncomfortable with.
          </p>
          <form onSubmit={this.handleSubmit}>
            <ol type="1">
              <div className="form-line">
                <li><label> What is your age? &nbsp;</label> </li>
                <input
                  id="age"
                  type="number"
                  step="1"
                  dir="auto"
                  name="age"
                  value={age}
                  onChange={this.handleChange}
                />
              </div>

              <div>
                <li><label>To which gender identity do you most identify? &nbsp;</label></li>
                <select name="gender" id="gender" value={gender} onChange={this.handleChange}>
                  <option value="empty"> </option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Non-Binary, or Others</option>
                </select>
              </div>

              <div>
                <li><label>Please specify your ethnicity: &nbsp;</label></li>
                <select name="race" id="race" value={race} onChange={this.handleChange}>
                  <option value="empty"> </option>
                  <option value="white">White</option>
                  <option value="black">Black or African American</option>
                  <option value="hispanic">Hispanic or Latino</option>
                  <option value="native">Native American or American Indian</option>
                  <option value="asian">Asian or Pacific Islander</option>
                  <option value="other">Others</option>
                </select>
              </div>

              <div>
                <li><label>What is the highest degree or level of school you have completed?
                  If currently enrolled, highest degree received. </label></li>
                <select name="education" id="education" value={education} onChange={this.handleChange}>
                  <option value="empty"> </option>
                  <option value="high-school">High School or below</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master’s or Professional degree, or higher</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <li><label>Last week, were you working full time, part time,
                  going to school, keeping house, or what? </label></li>
                <select name="employed" id="employed" value={employed} onChange={this.handleChange}>
                  <option value="empty"> </option>
                  <option value="full-time"> Full Time </option>
                  <option value="part-time"> Part Time</option>
                  <option value="school"> Going to School</option>
                  <option value="house"> Keeping House</option>
                  <option value="other"> Other</option>
                </select>
              </div>

              <div>
                <li><label>If you were working last week, which type of industry did you work for?</label></li>
                <select name="government" id="government" value={government} onChange={this.handleChange}>
                  <option value="empty"> </option>
                  <option value="profit"> For-Profit </option>
                  <option value="nonprofit"> Non-Profit </option>
                  <option value="government"> Government</option>
                  <option value="other"> Other</option>
                </select>
              </div>

              <div>
                <li><label>We hear a lot of talk these days about liberals and conservatives.
                  Below is a seven-point scale on which the political views that people
                  might hold are arranged from extremely liberal to extremely conservative.
                  Where would you place yourself on this scale?</label></li>

                <select name="polviews" id="polviews" value={polviews} onChange={this.handleChange}>
                  <option value="empty"> </option>
                  <option value="1"> Extremely Liberal </option>
                  <option value="2"> Liberal </option>
                  <option value="3"> Slightly Liberal </option>
                  <option value="4"> Moderate, Middle of the Road </option>
                  <option value="5"> Slightly Conservative </option>
                  <option value="6"> Conservative </option>
                  <option value="7"> Extremely Conservative</option>
                </select>
              </div>

            </ol>
            <button type="submit">Submit</button>
          </form>
        </div>
      </Centered>
    );
  }
}