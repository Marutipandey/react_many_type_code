import React from "react";
import  Table  from "react-bootstrap/Table";

function Tableone() {
  const Students = [
    { name: "sonam", roll: 1, contact: 111 },
    { name: "poonam ", roll: 2, contact: 222 },
    { name: "kajal ", roll: 3, contact: 333 },
    { name: "rani ", roll: 4, contact: 111 },
    { name: " geeta", roll: 5, contact: 110 },
  ];
  return (
    <>
      <Table striped>
        <tbody>
          <tr>
            <th>name</th>
            <th>roll</th>
            <th>contact</th>
          </tr>
          
          {Students.map((item, i) => (
            item.contact===111?
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.roll}</td>
              <td>{item.contact}</td>
            </tr>:null
          ))}
        </tbody>
      </Table>
    </>
  );
}
export default Tableone;
