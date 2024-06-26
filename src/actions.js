export const TODO_ADD = 'TODO_ADD'
export const TODO_ADD_ALL = 'TODO_ADD_ALL'
export const TODO_DELETE = 'TODO_DELETE'
export const TODO_UPDATE = 'TODO_UPDATE'

export function mylibraryAdd (_id, name, description){
	return { type: TODO_ADD, _id, name, description};
}

export function mylibraryAddAll (todo_list){
	return { type: TODO_ADD_ALL, todo_list };
}

export function mylibraryDelete (_id){
	return { type: TODO_DELETE, _id };
}

export function mylibraryUpdate (_id){
	return { type: TODO_UPDATE, _id };
}