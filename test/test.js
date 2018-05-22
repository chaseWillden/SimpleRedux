import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {SimpleRedux, RegisterAction} from '../src'


let value = 0;
RegisterAction('getValue', () => value);

class Test3 extends SimpleRedux {
	render(){
		const value = this.actions.getValue()
		return (
			<div>Test {value}</div>
		)
	}
}

class Test2 extends SimpleRedux {
	render(){
		return (
			<div>
				Test2
				<br />
				<Test3 />
			</div>
		)
	}
}

ReactDOM.render(
	<Test2 />,
	document.getElementById('root')
)