import React from "react";

import TaskResponse from "./TaskResponse";

import {
  CThierarchy, CTCommunity, CTDemocracy, CTMarket 
} from "./Comprehension";



import {
  TaskStimulusH, 
  TaskStimulusD, 
  TaskStimulusM, 
  TaskStimulusC,
  TaskStimulusE, 
} from "./TaskScripts";

import {
  TaskStimulusH_collapsed,
  TaskStimulusD_collapsed,
  TaskStimulusC_collapsed,
  TaskStimulusM_collapsed,
  TaskStimulusE_collapsed,
  TaskStimulusF,
  TaskStimulusFinal
} from "./TaskQuestion";

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

class TaskFinal extends React.Component {
  render() {
    return (
      <div className="task">
        <TaskStimulusFinal {...this.props} />
        <TaskResponse {...this.props} />
      </div>
    );
  }
}


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
        <CThierarchy {...this.props} />
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
        <CTDemocracy {...this.props} />
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
        <CTMarket {...this.props} />
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
        <CTCommunity {...this.props} />
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
  TaskH,
  TaskD,
  TaskM,
  TaskC,
  TaskE,
  TaskF,
  TaskFinal,
  TaskH_intro,
  TaskD_intro,
  TaskM_intro,
  TaskC_intro,
  TaskE_intro,

}


