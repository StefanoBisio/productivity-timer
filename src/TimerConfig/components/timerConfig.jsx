import React, { Component } from 'react';
import moment from 'moment';

class timerConfig extends Component {

	constructor () {
		super();

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(ev) {
		const newBaseTime = this.props.baseTime;

		if (ev.target.id === 'hours') newBaseTime.subtract(newBaseTime.get('hours'), 'hours').add(parseInt(ev.target.value, 10), 'hours');
		if (ev.target.id === 'minutes') newBaseTime.subtract(newBaseTime.get('minutes'), 'minutes').add(parseInt(ev.target.value, 10), 'minutes');
		if (ev.target.id === 'seconds') newBaseTime.subtract(newBaseTime.get('seconds'), 'seconds').add(parseInt(ev.target.value, 10), 'seconds');

		this.props.setBaseTime(newBaseTime);
	}


	render() {
		return(
			<div className="inputs row text-center">	

		        <div className="row">	
			        		<label htmlFor="hours">Hours</label>

			        		<input 
				        		id="hours" 
				        		className="form-control text-center" 
				        		type="number" 
				        		min="0"
				        		defaultValue={this.props.baseTime.get('hours')} 
				        		onChange={this.handleChange}
				        		/>
		        </div>

		        <div className="row ">	
		        			<label htmlFor="minutes">Minutes</label>
		        			<input 
			        			id="minutes" 
			        			className="form-control text-center" 
			        			type="number" 
			        			min="0"
			        			defaultValue={this.props.baseTime.get('minutes')}
				        		onChange={this.handleChange}
			        			/> 
		        </div>

		        <div className="row ">	
		        			<label htmlFor="seconds">Seconds</label>
		        			<input
			        			id="seconds"
			        			className="form-control text-center"
			        			type="number"
			        			min="0"
			        			defaultValue={this.props.baseTime.get('seconds')}
				        		onChange={this.handleChange}
			        			/>
		        </div> 
			</div>
		);
	}
}
	 
export default timerConfig;


