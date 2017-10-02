import React, { Component } from 'react';
import * as timerStates from '../../timerStates';

class timerButton extends Component {

constructor(){
	super();

		this.getButton = this.getButton.bind(this);
}

getButton() {
	if (this.props.timerState === timerStates.NOT_SET)
		return (
			<button className="btn btn-primary btn-lg" onClick={this.props.startTimer}>Start</button>
			)
	if (this.props.timerState === timerStates.RUNNING)
			return (
				<button className="btn btn-danger btn-lg" onClick={this.props.stopTimer}>Interrupt</button>
			)
	if (this.props.timerState === timerStates.COMPLETE)
			return (
				<button className="btn btn-info btn-lg" onClick={this.props.stopTimer}>Cycle completed! Reset</button>
			)
}

render () {
	return(
		<div className="button row text-center">	
	    {this.getButton()}
		</div>
 		);
	}
}

export default timerButton;