const initSate ={
    filters:{
        search:"",
        status:'All',
        priority:[]
    },
    todoList:[
        {
            id:1,
            name:'learn redux',
            completed:false,
            priority:'Medium'

        },
            {
                id:2,
                name:'learn html',
                completed:true,
                priority:'High'

            }
    ]
}
const rootReducer =(state=initSate,action)=>{
        switch(action.type){
            case 'todoList/addTodo':
            return {
                ...state,
                todoList:[
                    ...state.todoList,
                    action.payload

                ]
            }
            default:
              return state;
        }
}

export default rootReducer;