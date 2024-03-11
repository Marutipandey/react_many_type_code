import React,{useState} from 'react'
 
const Inputboxvalue = () => {
    const [value,setValue] = useState();


    // hide and show
    const [valuee,setValuee] = useState(false);
    const handleChange = (val)=>{
        setValue(val.target.value);
    };
   //  end hide and show
    
const deletedata=()=>{
  setValue(null)
}
const updatedata=(e)=>{
  setValue(e.target.value)
}
  return (
    <div>

{ 
         valuee?
         <h1>{value} <button onClick={updatedata}>Edit</button><button style={{marginLeft:'5px'}} onClick={deletedata}>Delete</button></h1>
         
        :null}
          <input   onChange={handleChange}  type="text" />
        
           {/* hide and show button */}
          <button type='submit' onClick={()=>setValuee(true)}>show input data</button>
          <button type='submit' onClick={()=>setValuee(false)}>hide input data</button>
            {/* end hide and show  button */}

    </div>
  )
}

export default Inputboxvalue
