import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { todoAdd } from './actions';

class ToDoTaskAddInner extends React.Component {
	constructor(props){
		super(props)
		
		this.state = {
			name: '',
			description: ''
		}
		
		this.onNameChange = this.onNameChange.bind(this);
		this.onDescriptionChange = this.onDescriptionChange.bind(this);
		this.onAddFormSubmit = this.onAddFormSubmit.bind(this);
	}

	onNameChange(e){
		e.preventDefault();
		
		this.setState({
			name: e.target.value
		});
	}
	
	onDescriptionChange(e){
		e.preventDefault();
		
		this.setState({
			description: e.target.value
		});
	}
	
	onAddFormSubmit(e){
		console.log(this.props.onTaskAdd);
		e.preventDefault();
		
		fetch('tasks', {
			method: 'POST',
			body: JSON.stringify({
				name: this.state.name,
				description: this.state.description
			}),
			headers:{
				'Content-Type': 'application/json'
			}
		}).then((res) => {
			return res.json();
		}).then((data) => {
			this.props.dispatch(todoAdd(data._id, data.name, data.description));
			this.props.history('/');
		});
	}
	
	render(){
		return(
		    <div className="Add">
			    <NavLink to='/'>Back to list</NavLink>
		        <form onSubmit={this.onAddFormSubmit}>
			        <input type="text" value={this.state.name} onChange={this.onNameChange} placeholder="Name" />
				    <input type="text" value={this.state.description} onChange={this.onDescriptionChange} placeholder="Description" />
				    <input type="submit" value="Add" />
			    </form>
			</div>
		)
	}

}

const ToDoTaskAdd = (props) => {
	return(
	    <ToDoTaskAddInner {...props} history={useNavigate()}/>
	)
}

export default connect() (ToDoTaskAdd);