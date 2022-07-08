import { createSelector } from "reselect";
// export const todoListSelector =(state) =>{
//     const searchText = searchFilter(state);
//     const todoListHandle = state.todoList.filter(todo=>{
//         return todo.name.includes(searchText)

//     }
//     )
//     return todoListHandle;

// }

export const searchFilter = (state) => state.filters.search;
export const TodoListSelect = (state) => state.todoList;
export const statusSelect = (state) => state.filters.status;


//nếu 1 select phụ thuộc vào selector khác
export const todoListFilter = createSelector(
    TodoListSelect, 
    searchFilter, 
    (todoList,searchFilter) => {
    return todoList.filter((todo) => {
        return todo.name.includes(searchFilter) 

    }
    )
})

