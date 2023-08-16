

const IntialStateVal={
    cart:[],
    cartdetail:[],
    loading:false
}

const AddReducer=( state =IntialStateVal,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            return  {
                ...state,
                cart:[...state.cart,action.payload]
               
            }
            case "DELET_CART":
                return{
                    ...state,
                    cart:state.cart.filter(item=>item.id !==action.payload)
                }
                case "VIEWDETAIL":
                    return{
                        ...state,
                        cartdetail:[...state.cartdetail,action.payload]
                    }
            default : return state
    }
}

export default AddReducer