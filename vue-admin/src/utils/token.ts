
export const SET_TOKEN= (token:string)=>{
    localStorage.setItem("TOKEN",token)
}


export const GET_TOKEN= (key:string)=>{
    return localStorage.getItem(key)
}

export const REMOVE_TOKEN= (key:string)=>{
    return localStorage.removeItem(key)
}