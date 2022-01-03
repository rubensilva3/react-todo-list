import './App.css';
import React , {useState, useEffect} from 'react';
import TrashIcon from './icons/TrashIcon.svg';
import SearchBar from './components/SearchBar/SearchBar';
import Header from './components/Header/Header';
import ItemCounter from './components/ItemCounter/ItemCounter';

const useHasItems = (list) => {
  const [hasItems, setHasItems] = useState(false);

  useEffect(()=> {
    if(list.length > 0) {
      setHasItems(true);
    }else{
      setHasItems(false);
    }
  }, [list])

  return hasItems;
}

const App = () => {
  const [text , setText] = useState('');
  const [list , setList] = useState([]);
  const hasItems = useHasItems(list);
 
  return (
    <div className="wrapper">
       <Header/>
      <main>
        <div> 
         <ItemCounter list={list}/>
         <div className="form">
            <SearchBar text={text} setText={setText}/>

            <button className='button' onClick={(e) => { 
                e.preventDefault();
                if(text===''){ 
                  return;
                }
                
                const newItem = {
                  value:text,
                  checked:false
                };
                setList([...list,newItem]);
                setText('');
              }}>
              Submit
            </button>

            <button className='button' onClick={(e) => {
                e.preventDefault();
                setList([]);          
              }}>Clear all
            </button>

            { hasItems && <>
                  <button className='button' onClick={(e) => {
                    e.preventDefault();
                    setList(list.map((elem,i) =>{          
                              return {
                                value: elem.value,
                                checked: true
                              }    
                        })
                    )}}>Check All
                  </button>

                <button className='button' onClick={(e) => {
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
         </div> 
         
         <ul>
            {list.map((elem,index) =>
              <li className="Tasks">
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
                    <div className="itemText">
                        {elem.value}
                    </div>
                <button className="delete" onClick={(e) => {
                    setList(list.filter((elem,i) => i!==index))   
                }}> <img src={TrashIcon}/> </button> 
              </li>
           )}
         </ul>
        </div>
      </main>
    </div> 
  );
}

export default App;

