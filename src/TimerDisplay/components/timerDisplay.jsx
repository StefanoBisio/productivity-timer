import React, {Component} from 'react';
import * as timerStates from '../../timerStates';
import moment from 'moment';


/* function to prevent a display like "0:25:0" */
const leftPad = (val) => {
	if (val < 10) return `0${val}`;

	return `${val}`;
}

class timerDisplay extends Component {

	render() {
		if (this.props.timerState === timerStates.COMPLETE)
			return (
				alert("Good Job!"),

				<div className="header">		
			    	<h4 className="text-center">Your Productivity Timer</h4>
					<div className="row">	
					    <h1 className="text-center">
					    	{`${leftPad(this.props.currentTime.get('hours'))}:${leftPad(this.props.currentTime.get('minutes'))}:${leftPad(this.props.currentTime.get('seconds'))}`}
					    </h1>

					    <div className="overflow text-center">
							<h3>Take a Break!</h3>
							<div className="happydiv"></div>
						</div>	
					</div>
				</div>
				
			);
			
		return(
			<div className="header">		
			    <h4 className="text-center">Your Productivity Timer</h4>
				<div className="row">	
			    	<h1 className="text-center">
			    		{`${leftPad(this.props.currentTime.get('hours'))}:${leftPad(this.props.currentTime.get('minutes'))}:${leftPad(this.props.currentTime.get('seconds'))}`}
			    	</h1>
				</div>

			</div>
		);
	}
}


export default timerDisplay;