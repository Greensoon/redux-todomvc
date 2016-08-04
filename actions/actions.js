import * as types from './types'

export const addTodo = (todo) => {
	console.log('addTodo:====>>>',todo)
	return {
		type:types.ADD_TODO,
		text:todo.text
	}
}
export const delTodo = (id) => {
	console.log('delTodo action:',id)
	return {
		type : types.DEL_TODO,
		id
	}
}