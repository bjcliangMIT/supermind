import React from "react";

import TaskResponse from "./TaskResponse";
import {TaskStimulusH, TaskStimulusD, TaskStimulusM, TaskStimulusC, 
  TaskStimulusE, TaskStimulusF} from "./TaskStimulus";

import {TaskStimulusH_collapsed,
  TaskStimulusD_collapsed, 
  TaskStimulusC_collapsed,
  TaskStimulusM_collapsed,
  TaskStimulusE_collapsed,} from "./TaskStimulus2";
  

class TaskH extends React.Component {
  render() {
    return (
      <div className="task">
        <TaskStimulusH_collapsed {...this.props} />
        <TaskResponse {...this.props} />
      </div>
    );
  }
}
class TaskH_intro extends React.Component {
  render() {
    return (
      <div className="task">
        <TaskStimulusH {...this.props} />
      </div>
    );
  }
}



class TaskF extends React.Component {
  render() {
    return (
      <div className="task">
        <TaskStimulusF {...this.props} />
        <TaskResponse {...this.props} />
      </div>
    );
  }
}

class TaskD extends React.Component {
  render() {
    return (
      <div className="task">
        <TaskStimulusD_collapsed {...this.props} />
        <TaskResponse {...this.props} />
      </div>
    );
  }
}
class TaskD_intro extends React.Component {
  render() {
    return (
      <div className="task">
        <TaskStimulusD {...this.props} />
      </div>
    );
  }
}

class TaskM extends React.Component {
  render() {
    return (
      <div className="task">
        <TaskStimulusM_collapsed {...this.props} />
        <TaskResponse {...this.props} />
      </div>
    );
  }
}
class TaskM_intro extends React.Component {
  render() {
    return (
      <div className="task">
        <TaskStimulusM {...this.props} />
      </div>
    );
  }
}

class TaskC extends React.Component {
  render() {
    return (
      <div className="task">
        <TaskStimulusC_collapsed {...this.props} />
        <TaskResponse {...this.props} />
      </div>
    );
  }
}
class TaskC_intro extends React.Component {
  render() {
    return (
      <div className="task">
        <TaskStimulusC {...this.props} />
      </div>
    );
  }
}

class TaskE extends React.Component {
  render() {
    return (
      <div className="task">
        <TaskStimulusE_collapsed {...this.props} />
        <TaskResponse {...this.props} />
      </div>
    );
  }
}
class TaskE_intro extends React.Component {
  render() {
    return (
      <div className="task">
        <TaskStimulusE {...this.props} />
      </div>
    );
  }
}





export {
  TaskIntro,
  TaskH,
  TaskD,
  TaskM,
  TaskC,
  TaskE,
  TaskF,
  TaskH_intro,
  TaskD_intro,
  TaskM_intro,
  TaskC_intro,
  TaskE_intro,

}


