import ReducerFilter from "../components/Filters/ReducerFilter";
import reducerAddtodo from "../components/TodoList/ReduceAddtodo";
import { combineReducers } from 'redux'


//{} để truy caaoj vào object filter
const rootReducer = combineReducers(
    {
        filters: ReducerFilter,
        todoList: reducerAddtodo
    }

)

export default rootReducer;