export const  addtodo=(payload)=>{
  return {
    type:"ADDTODO",
    payload
  }

}

export const deleteall=()=>{
  return {
    type :"DELETE_ALL"
  }
}

export const deletetodo=(payload)=>{
  return {
    type :"DELETETODO",
    payload
  }
  
}

export const handleeditsubmit=(payload)=>{
  return {
    type:"UPDATETODO",
    payload
  }
}

export const handlecheckbox=(payload)=>{
  return {
    type:"CHECKTODO",
    payload
  }
}