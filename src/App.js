import React, { Component } from 'react';
import './App.css';
import Timer from './Timer/components/Timer';

class App extends Component {
  render() {
    return (
	    	
			<div className="app-content">		
		      		<Timer />
		    </div>
    );
  }
}

export default App;
