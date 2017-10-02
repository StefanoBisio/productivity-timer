import React, { Component } from 'react';
import moment from 'moment';
import TimerDisplay from '../../TimerDisplay/components/timerDisplay';
import TimerButton from '../../TimerButton/components/timerButton';
import TimerConfig from '../../TimerConfig/components/timerConfig';
import * as timerStates from '../../timerStates';

class Timer extends Component {

constructor(){
	super();

	this.state = {
		currentTime : moment.duration(25, 'minutes'),
		baseTime : moment.duration(25, 'minutes'),
		timerState: timerStates.NOT_SET,
		timer:null,
	};

	this.setBaseTime = this.setBaseTime.bind(this);
	this.startTimer = this.startTimer.bind(this);
	this.stopTimer = this.stopTimer.bind(this);
	this.reduceTimer = this.reduceTimer.bind(this);
}

setBaseTime(newBaseTime) {

	this.setState({
		baseTime: newBaseTime,
		currentTime: newBaseTime,
	})
}

startTimer(){
	this.setState({
		timerState: timerStates.RUNNING,
		timer: setInterval(this.reduceTimer, 1000),
	})
}

stopTimer() {
	clearInterval(this.state.timer);

	this.setState({
		timerState: timerStates.NOT_SET,
		timer: null,
		currentTime: this.state.baseTime,
	})
}

reduceTimer(){
	if (this.state.currentTime.get('hours') === 0
		&& this.state.currentTime.get('minutes') === 0
		&& this.state.currentTime.get('seconds') === 0) {

		this.completeTimer();
		return;
	}

	const newTime = moment.duration(this.state.currentTime);
	newTime.subtract(1, 'second');

	this.setState({
		currentTime: newTime,
	})
}

completeTimer(){
	clearInterval(this.state.timer);

	this.setState({
		timerState: timerStates.COMPLETE,
		timer: null,
	})
}

render() {
	return (
		<div className="">
			<TimerDisplay 
				currentTime={this.state.currentTime}
				timerState={this.state.timerState}

			/>
			<TimerButton
				startTimer={this.startTimer}
				stopTimer={this.stopTimer}
				timerState={this.state.timerState}
			/>
			{
				(this.state.timerState !== timerStates.COMPLETE && this.state.timerState !== timerStates.RUNNING)
				&&
				(<TimerConfig 
					baseTime={this.state.baseTime}
					setBaseTime={this.setBaseTime} 
				/>)
			}	
		</div>
	);
		}
}
	


export default Timer;

