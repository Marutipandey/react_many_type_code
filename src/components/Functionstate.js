import React,{useState} from 'react'

export default function Functionstate() {
    const [textt, setTextt] = useState("sds fdfdg fgfg fhfgh fdfdf");

  return (
    <div>
      
      <h1>{textt}</h1>


      <button onClick={() => setTextt("updated data all changee")}>new update</button>
      <button onClick={() => setTextt("old text")}>old text</button>
    </div>
  )
}
