const initSate = 
   [
        {
            id: 1,
            name: 'learn redux',
            completed: false,
            priority: 'Medium'

        },
        {
            id: 2,
            name: 'learn html',
            completed: true,
            priority: 'High'

        }
    ]

const reducerAddtodo = (state = initSate, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            // add todo mới
            return [...state, action.payload]
        default:
            return state;
    }
}

export default reducerAddtodo;