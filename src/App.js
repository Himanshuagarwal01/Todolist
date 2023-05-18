import React from "react";
import { useState } from "react";
import Form from "./components/Form"
import {useDispatch,useSelector} from "react-redux";
import './App.css';
import Todos from "./components/Todos";
import { actionCreators } from "./redux/todoapp";


function App() {
  const dispatch=useDispatch();
  const todos = useSelector((state) => state.operations);
  const [editvis,seteditvis]=useState(false);
  const [edittodo,setedittodo]=useState("");
  const handleEdit=(todo)=>{
    seteditvis(true);
    setedittodo(todo)
  }
  return (
    <>
   <div className="wrapper">  
    <br></br>
    
    <Form  editvis={editvis} edittodo={edittodo} seteditvis={seteditvis}/>
    <Todos handleEdit={handleEdit} editvis={editvis}/>
    {/* <Todos/> */}
    
    {todos.length>1&&(<button onClick={()=>dispatch(actionCreators.deleteall())} className="box">DELETE ALL</button>)}
   </div>
   </>
  );
}

export default App;
