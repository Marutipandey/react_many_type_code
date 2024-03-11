import React,{useRef} from 'react';
import './App.css';
import Classprops from './components/Classprops';
import Functionprops from './components/Functionprops';
import Classstate from './components/Classstate';
import Functionstate from './components/Functionstate';
import Inputboxvalue from './components/Inputboxvalue';
import Formdata from './components/Formdata';
import Conditionloop from './components/Conditionloop';
import Formvalidation from './components/Formvalidation';
import Tableone from './components/Tableone';
import Tablenested from './components/Tablenested';
import Forwordref from './components/Forwordref';
function App() {
  // state for the updated text
let inputchange = useRef(null)
let handleChange = ()=>{
   inputchange.current.value="1000"
}
  return (
    <div className="App">
      <Functionprops name={"sonam"} email="pp874765@gmail.com" other={{ roll: 1, address: "delhi" }} />
      <Classprops name={"classpropssonam"} />

      <Functionstate />
      < Classstate />
      <Inputboxvalue />
      <Formdata /><br />
      <Conditionloop /><br />
      <Formvalidation />
      <Tableone  />
      <Tablenested />

   {/* forwardref */}
      <Forwordref ref={inputchange} />
      <button onClick={handleChange}>update input data </button>
      {/* endforwardref */}

    </div>
  );
}

export default App;
