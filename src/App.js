import React,{useState} from "react";
import Add from "./Components/Add";
import ToDoItem from "./Components/Todoitem";
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [done,setDone]= useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }
  

  function deleteItem(text,id) {
    setDone(prev=>{
      console.log("prevItems");
      return[...prev,text];
    }) 
    setItems(prevItems => {
      return prevItems.filter((item, index) => {

        return index !== id;
    });
    });
  }
  return (
    <div className="container">
      <div>
      <header className="header">
       <h1>TO-DO List</h1>
      </header>
      </div>
      <Add onAdd={addItem}/>
      <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
              done={false}
            />
          ))}
      </ul>
      <ul id="done">
          {done.map((todoItem, index) => (
            
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
              done={true}
            />
            
          ))}
        </ul>
    </div>
  );
}

export default App;
