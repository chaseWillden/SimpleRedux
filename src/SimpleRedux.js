import React, {Component} from 'react'
import {__DO_NOT_USE__store} from './Actions'

const store = {};

class SimpleRedux extends Component{

	constructor(props){
		super(props);
		const store = __DO_NOT_USE__store.__GET_STORE__();
		this.actions = store;
	}
}

export default SimpleRedux