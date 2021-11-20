import './App.css';
import React , {useState} from 'react';
const App = () => {
  const [text , setText] = useState('');
  const [list , setList] = useState([]);
 
  return (
    <div className="wrapper">
      <header className="header">
        <h1 className="title">
          To do list
        </h1>
      </header>
      <main>
        <div className="center">
         <form>
            <label for="add-task">Add task</label>
            <input type="text" id="add-task" name="add-task" value={text} onChange={(e)=> setText(e.target.value)}/>
              <button onClick={(e) => { 
                e.preventDefault();
                setList([...list, text]);
                setText('');
              }}>
              Submit
              </button>
         </form> 
         <ul>
            {list.map((elem) =>
               <li>{elem}</li>
           )}
         </ul>
        </div>
      </main>
    </div> 
  );
}

export default App;

