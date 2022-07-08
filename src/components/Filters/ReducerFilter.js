const initSate ={
        search:"",
        status:'All',
        priority:[]
}
const ReducerFilter =(state=initSate,action)=>{
        switch(action.type){
            case 'Filter/searchFilter':
            return {
                        // lưu dữ liệu cũ và ép dữ liệu mới
                        ...state,
                        search:action.payload
            }
            case 'Filter/statusFilter':
                return {
                            // lưu dữ liệu cũ và ép dữ liệu mới
                            ...state,
                            status:action.payload
                }
            default:
              return state;
        }
}



export default ReducerFilter;