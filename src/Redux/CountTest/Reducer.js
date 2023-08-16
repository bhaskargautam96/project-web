

const IntialValue={
    count:0
}

export const CountReducer =(state = IntialValue ,action)=>{
    switch(action.type){
        case "INCREASEMENT":
            return {
                count:state.count+1
            }
            case "DECREASEMENT":
                return {
                    count:state.count-1   
                }
                default : return state
    }
   
}