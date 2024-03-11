import React from "react";
import Table from "react-bootstrap/Table";

function Tablenested() {
  const Students = [
    {
      name: "sonam",
      roll: 15,
      contact: 111,
      address: [
        { hn: 101, city: "noida" },
        { hn: 101, city: "noida" },
        { hn: 101, city: "noida" },
        { hn: 101, city: "noida" },
      ],
    },
    {
      name: "poonam ",
      roll: 22,
      contact: 222,
      address: [
        { hn: 101, city: "noida" },
        { hn: 101, city: "noida" },
        { hn: 101, city: "noida" },
        { hn: 101, city: "noida" },
      ],
    },
    {
      name: "kajal ",
      roll: 31,
      contact: 333,
      address: [
        { hn: 101, city: "noida" },
        { hn: 101, city: "noida" },
        { hn: 101, city: "noida" },
        { hn: 101, city: "noida" },
      ],
    },
    {
      name: "rani ",
      roll: 445,
      contact: 111,
      address: [
        { hn: 101, city: "noida" },
        { hn: 101, city: "noida" },
        { hn: 101, city: "noida" },
        { hn: 101, city: "noida" },
      ],
    },
    {
      name: " geeta",
      roll: 5,
      contact: 110,
      address: [
        { hn: 101, city: "noida" },
        { hn: 101, city: "noida" },
        { hn: 101, city: "noida" },
        { hn: 101, city: "noida" },
      ],
    },
  ];
  return (
    <>
      <Table striped>
        <tbody>
          <tr>
          <th>id</th>

            <th>name</th>
            <th>roll</th>
            <th>contact</th>
            <th>address</th>
          </tr>

          {Students.map((item, i) => (
            <tr key={i}>
                <td>{i+1}</td>
              <td>{item.name}</td>
              <td>{item.roll}</td>
              <td>{item.contact}</td>
              <td>
                <Table striped>
                  <tbody>
                    {item.address.map((data) => (
                      <tr>
                        <td>{data.hn}</td>
                        <td>{data.city}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
export default Tablenested;
