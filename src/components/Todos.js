import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../redux/todoapp";

const Todos = ({handleEdit,editvis}) => {
  const todos = useSelector((state) => state.operations);
  // console.log(todos)
  const dispatch=useDispatch();
  return  todos.map((currEle) => (
    <div className="container" key={currEle.id}>
      <div className="checkbox">
        {editvis===false&&(<input type="checkbox" checked={currEle.completed} onChange={()=>dispatch(actionCreators.handlecheckbox(currEle.id))}/>)}
      <p style={currEle.completed===true?{textDecoration:"line-through"}:{textDecoration:"none"}}>{currEle.todo}</p>
      <div className="action">
        {/* This is the edit button */}
        {
          editvis===false&&(
            <>
            <button className="btn" onClick={()=>handleEdit(currEle)}>EDIT</button>
            <button className="btn" onClick={()=>dispatch(actionCreators.deletetodo(currEle.id))}>DELETE</button>
            
            </>
          )
        }

      {/* this is the delete button */}
      </div>
    </div>
    </div>

  ));
};

export default Todos;
