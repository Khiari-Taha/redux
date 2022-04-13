import Input from './component/AddTask' ;
import { useDispatch } from 'react-redux';
import React, { useStates } from 'react'
import ListTask from './component/ListTask';
import AddTask from './component/AddTask';

function App() {
  return (
    <div className="App">
     <ListTask />
     <AddTask />
    </div>
  );
}

export default App;
