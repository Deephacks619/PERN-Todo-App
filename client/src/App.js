import React,{Fragment} from 'react';
import './App.css';
import Inputtodo from './components/Inputtodo'
import Alltodos from './components/Alltodos'
import Deleteall from './components/Deleteall'
function App() {
  return (
    <Fragment>
      <Inputtodo/>
      <Alltodos />
      <Deleteall />
      <footer className="text-center" style={{color:"red",marginTop:"30px"}}>
        made by @Deepak kyatham
      </footer>
    </Fragment>
  );
}

export default App;
