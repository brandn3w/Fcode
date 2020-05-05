
import React from "react";
import style from "../style.scss";


function Todo(props) {

  return (
    <div className={style.mainDiv}>
      <input type="checkbox" 
      checked={props.item.completed} 
      onChange={(event)=>props.handleChange}/>


        <p className={style.p}>{props.item.item}</p>
     
    </div>
  )
}
export default Todo;