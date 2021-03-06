import { GET_TODOS, ADD_TODO, EDIT_TODO, DELETE_TODO, TITLE_CHANGED } from '../actions/Types'

const initialState = {
    items: [],
    title: ''
}

export default function (state = initialState, action) {
    var todos;
    switch (action.type) {
        case ADD_TODO:
            console.log(action.payload)
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        case GET_TODOS:
            return {
                ...state,
                items: action.payload
            }
        case EDIT_TODO:
            todos = [...state.items]
            let editedTodo = action.payload
            
            console.log(state.items)

            const index = todos.findIndex(todo => todo.id === editedTodo.id);
            if (index > -1) {
                todos[index] = editedTodo;
            }

            return {
                ...state,
                items: todos,
            }
        case DELETE_TODO:
            todos = [...state.items]
            todos = todos.filter(todo => todo.id !== action.payload)
            return {
                ...state,
                items: todos
            }

        case TITLE_CHANGED:
            return {
                ...state,
                title: action.payload
            }
        default:
            return state;
    }
}
