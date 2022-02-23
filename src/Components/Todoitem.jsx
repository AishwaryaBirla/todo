/** @format */

import React from "react";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckIcon from "@material-ui/icons/Check";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
function ToDoItem(props) {
  function click(){
    if(props.done===false){
      props.onChecked(props.text, props.id);}
    }
  function icon() {
    if (props.done === false)
      return (
           <CheckBoxOutlineBlankIcon
          className="icon"
          fontSize="small"
          
        />
      );
    else if(onmouseover){
      return(<CheckBoxIcon />)
    }
    else return <CheckIcon className="icon" />;
  }
  return (
    <div >
      <li  onClick={click}>
        {icon() }
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
