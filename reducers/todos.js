import {ADD_TODO,DEL_TODO} from '../actions/types'

const initialState = [{
	id : 0,
	text : 'Redux Text',
	isCompleted : false
}]

export default function todos (state = initialState,action ){
	switch(action.type){
		case ADD_TODO :
		return [{
			id : state.reduce((maxId,todo) => {Math.max(todo.id,maxId)},-1)+1,
			isCompleted: false,
			text : action.text
		},
		...state
		]

		case DEL_TODO :
		console.log('DEL_TODO:',state,action)
		return state.filter(todo=>!todo.id==action.id)

		default:
		return state
	}
}