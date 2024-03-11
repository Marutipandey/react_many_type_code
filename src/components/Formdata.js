import { useState } from "react";

function Formdata() {
  const [name, setName] = useState("");
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState(false);

  const getFormData = (e) => {
    console.log(name, name1, name2);
    e.preventDefault();
  };

  return (
    <div>
      <form action="" onSubmit={getFormData}>
        <input onChange={(e) => setName(e.target.value)} type="text" />

        <select name="" id="" onChange={(e) => setName1(e.target.value)}>
          <option value="">Select Options</option>
          <option value="handia">Handia</option>
          <option value="phoolpur">Phoolpur</option>
          <option value="saidabar">Saidabar</option>
          <option value="baraut">Baraut</option>
        </select>

        <label>
          <input
            type="checkbox"
            onChange={(e) => setName2(e.target.checked)}
            
          />
          Check me
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Formdata;
