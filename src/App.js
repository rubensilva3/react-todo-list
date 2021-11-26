import './App.css';
import React , {useState, useEffect} from 'react';
const App = () => {
  const [text , setText] = useState('');
  const [list , setList] = useState([]);
  const [hasItens, setHasItens] = useState(false);
  
  useEffect(()=> {
    if(list.length > 0) {
      setHasItens(true);
    }else{
      setHasItens(false);
    }
  }, [list])
 
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
            <input type="Text" id="add-task" name="add-task" value={text} onChange={(e)=> setText(e.target.value)}/>
              <button onClick={(e) => { 
                e.preventDefault();
                if(text===''){ 
                  return;
                }
                
                const newItem = {
                  value:text,
                  checked:false,
                };
                setList([...list,newItem]);
                setText('');
              }}>
              Submit
              </button>
              <button onClick={(e) => {
                e.preventDefault();
                setList([]);          
              }}>Clear all</button>

               { hasItens && <>
                  <button onClick={(e) => {
                    e.preventDefault();
                    setList(list.map((elem,i) =>{          
                              return {
                                value: elem.value,
                                checked: true
                              }    
                        })
                    )}}>Check All</button>

                  <button onClick={(e) => {
                    e.preventDefault();
                    setList(list.map((elem,i) =>{          
                              return {
                                value: elem.value,
                                checked: false
                              }    
                        })
                    )}}>Uncheck All</button>    
                  </>     
                }
         </form> 

         <ul>
            {list.map((elem,index) =>
              <li>
                <input checked={elem.checked} 
                    onChange={()=>{
                      setList(list.map((elem,i) =>{
                          if(i===index){
                            return {
                              value: elem.value,
                              checked:!elem.checked
                            }
                          }
                          return elem;
                      }))
                    }}
                    type="checkbox" />
                {elem.value}
                <button onClick={(e) => {
                    setList(list.filter((elem,i) => i!==index))   
                }}>X</button>
              </li>
           )}
         </ul>
        </div>
      </main>
    </div> 
  );
}

export default App;

