export const addTodo=(data)=>{
    return{
        type:'todoList/addTodo',
        payload:  data
    }
}

export const searchFilter =(text)=>{
    return{
        type:'Filter/searchFilter',
        payload : text
    }
}

export const selectStatus = (status)=>{
    return{
        type:'Filter/selectStatus',
        payload:status
    }
}