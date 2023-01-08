export const increment = (number)=>{
  return {
    type: "INCREMENT",
    payload: number
  }
}

export const decrement = (number)=>{
  return {
    type: "DECREMENT",
    payload: number
  }
}


export const logInUser=()=>{
  return {
    type: "SIGN_IN",
  }
}

export const logOutUser=()=>{
  return {
    type: "SIGN_OUT",
  }
}
