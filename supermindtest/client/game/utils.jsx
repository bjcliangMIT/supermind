
import React from "react";


const activity_statement1 = "Below is an example problem statement for practice. \
You have";
const activity_statement2 = "Below is the same example problem statement that we \
presented to you before. Again, you have";
const activity_statement3 = "to create as many creative solutions as you can. \
You are encouraged to use your understanding of ";
const activity_statement4 = " in your solutions.";

export const activity_statement = (timenum, name)=> {
  time = "";
  if(timenum === 1){
    time = timenum.toString() + " min";
  }else{
    time = timenum.toString() + " mins";
  }

  if (name === "hierarchies") {
    return (
      <p>{activity_statement1} <b> {time} </b> {activity_statement3}  <b>{name}</b> {activity_statement4}</p>
    );
  }else{
    return (
      <p>{activity_statement2}<b> {time} </b> {activity_statement3}  <b>{name}</b> {activity_statement4}</p>
    );
  }

}
