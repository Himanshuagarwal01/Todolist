const initialState=[
  
  //  {id:1,todo:'Buy Laptop',completed:false},
  
  
]

export const operations=(state=initialState,action)=>{
  switch(action.type){
    case "ADDTODO":
       return[...state,action.payload];
    
    case "DELETETODO":
      const newArray=state.filter((elem)=>elem.id!==action.payload);
      return newArray;

    case "DELETE_ALL":
      return [];

    case "UPDATETODO":
      let data=action.payload;
      const Editarrary=[];
      state.map((item)=>{
        if(item.id===data.id){

          item.id=data.id
          item.todo=data.todo;
          item.completed=data.completed;
        }
        Editarrary.push(item);
      })
        return  Editarrary;

    case "CHECKTODO":
          let todoarray=[];
          state.map((ele)=>{
            if(ele.id===action.payload){
              ele.completed=!ele.completed
            }
            todoarray.push(ele);
      })
      return todoarray;
    
    default:return state;
  }
}