export const UserAdd=(cartdetail)=>{
    return (
        {type:"ADD_TO_CART",
        payload:cartdetail}
    )
}

export const CartDel=(id)=>{
    return (
        {type:"DELET_CART",
        payload:id}
    )
}

export const ViewDetail=(singledetail)=>{
    return (
        {
        type:'VIEWDETAIL',
        payload: singledetail,
    })
}