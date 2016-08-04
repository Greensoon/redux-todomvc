import React ,{Component} from 'react'
import {connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as TodoActions from '../actions/actions'

function mapStateToProps(state){
	return {
		todos : state.todos
	}
}

function mapDispatchToProps(dispatch){
	return {
		actions : bindActionCreators(TodoActions,dispatch)
	}
}

class TodoItem extends Component {
	constructor(state){
		super(state)
		this.delTodo = this.delTodo.bind(this)
	}

	delTodo(){
		const {todo,actions} = this.props
		console.log('delTodo:=========>',todo)
		actions.delTodo(todo.id)
	}

	render () {
		const {todo} = this.props
		return (
			<li >
				<div className="view" >
					<input className="toggle" type="checkbox" />
					<label >{todo.text}</label>
					<button className="destroy" onClick={this.delTodo}></button>
				</div>
			</li>
			)
	}
}

class TodoInput extends Component{
	constructor(state){
		super(state)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleSubmit(e){

		if(e.which===13){
			const {actions}=this.props
			let todoText = e.target.value;
			actions.addTodo({
				text : todoText
			})
			e.target.value = ''
		}
	}

	render (){

		return (
			<input className="new-todo" type="text" placeholder="What needs to be done?" onKeyDown={this.handleSubmit}/>
		)
	}
}

class App extends Component {
	
	componentDidMount(){

	}

	render (){
		const {todos,actions} = this.props
		return (
			<div>
				<header className="header" >
					<h1 >todos</h1>
					<TodoInput actions={actions}/>
				</header>

				<section className="main" >
					<input className="toggle-all" type="checkbox" />
					<ul className="todo-list" >
						{
							todos.map((todo,i)=>{
								return <TodoItem key={i} todo={todo} actions={actions}/>
							})
						}
					</ul>

					<footer className="footer" >
						<span className="todo-count" >
							<strong >1</strong>
							<span ></span>
							<span >item</span>
							<span > left</span>
						</span>

						<ul className="filters" >
							<li >
								<a className="selected" >All</a>
							</li>

							<li >
								<a >Active</a>
							</li>

							<li >
								<a >Completed</a>
							</li>
						</ul>
					</footer>

				</section>		
			</div>
		)
	}

}

App.props ={

}

export default connect(mapStateToProps,mapDispatchToProps)(App)