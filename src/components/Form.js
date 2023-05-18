import React ,{useState,useEffect}from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/todoapp";


function Form({editvis,edittodo,seteditvis}){
  const dispatch=useDispatch();
  const [todoValue,setTodovalue]=useState("");
  const[editvalue,seteditvalue]=useState("");

  useEffect(()=>{
    seteditvalue(edittodo.todo);
  },[edittodo])


  const handlesubmit=(ev)=>{
    ev.preventDefault();
    let date=new Date().getTime().toString();
    let todoObj={
      id:date,
      todo:todoValue,
      completed:false
    }
    setTodovalue("");
    dispatch(actionCreators.addtodo(todoObj))
  }

  const returnUpdate=()=>{
    seteditvis(false);
  }

  const editsubmit=(ev)=>{
    ev.preventDefault();
    let editedObj={
      id:edittodo.id,
      todo:editvalue,
      completed:false
    }
    dispatch(actionCreators.handleeditsubmit(editedObj));
  }

  return (
    <>
    {editvis===false?
    (<form onSubmit={handlesubmit}>
      <div className="main" >
      <h2>Add your todo-items</h2>
      <div>
        <input className="btn2" type="text" placeholder="add your task" required value={todoValue} onChange={(ev)=>setTodovalue(ev.target.value)}/>
        <button className="btn2" type="submit">ADD</button>
        </div>
      </div>
    </form>):
    (<form onSubmit={editsubmit}>
      <div className="main" >
      <h2>Update your todo-items</h2>
      <div>
        <input type="text" required placeholder="update your task" 
        // editvalue || "" is done to controlled the error of changing controlled input to uncontrolled ;
        value={editvalue || ""} onChange={(ev)=>seteditvalue(ev.target.value)}/>
        <button type="submit" >UPDATE</button>
        </div>
        <button type="button" onClick={returnUpdate}>RETURN</button>
      </div>
    </form>)}
    
    </>
  )
}

export default Form ;


