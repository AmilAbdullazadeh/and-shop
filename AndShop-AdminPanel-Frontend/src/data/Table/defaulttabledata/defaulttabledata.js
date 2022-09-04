import { Table } from "react-bootstrap";
// import { Link } from "react-router-dom";
const Datacard = [
    {
      ID: "1",
      NAME: "Joan Powell",
      POSITION: "Associate Developer",
      SALARY: "$450,870",
    },
    {
      ID: "2",
      NAME: "Gavin Gibson",
      POSITION: "Account manager",
      SALARY: "$430,198",
    },
    {
      ID: "3",
      NAME: "Julian Kerr",
      POSITION: "Senior Javascript Developer",
      SALARY: "	$230,540",
    },
    {
      ID: "4",
      NAME: "Cedric Kelly",
      POSITION: "Accountant",
      SALARY: "	$55,300",
    },
    {
      ID: "5",
      NAME: "Samantha May",
      POSITION: "Junior Technical Author",
      SALARY: "	$234,100",
    },
  ];

  export function Basictable(){
      return(
        <Table className="table border text-nowrap text-md-nowrap mg-b-0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {Datacard.map((list, index) => (
            <tr key={index} >
              <td>{list.ID}</td>
              <td>{list.NAME}</td>
              <td>{list.POSITION} </td>
              <td>{list.SALARY}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      )
  }

  export function Addzebrastriping (){
      return(
        <Table className="table border text-nowrap text-md-nowrap table-striped mg-b-0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {Datacard.map((list, index) => (
            <tr key={index} >
              <td>{list.ID}</td>
              <td>{list.NAME}</td>
              <td>{list.POSITION} </td>
              <td>{list.SALARY}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      )
  }
  export function Toenableahoverstate (){
    return(
        
      <Table className="table border text-nowrap text-md-nowrap table-hover mg-b-0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Position</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {Datacard.map((list, index) => (
          <tr key={index} >
            <td>{list.ID}</td>
            <td>{list.NAME}</td>
            <td>{list.POSITION} </td>
            <td>{list.SALARY}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    )
}
export function Addbordersonallsides (){
    return(
        <Table className="table border text-nowrap text-md-nowrap table-bordered mg-b-0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {Datacard.map((list, index) => (
            <tr key={index} >
              <td>{list.ID}</td>
              <td>{list.NAME}</td>
              <td>{list.POSITION} </td>
              <td>{list.SALARY}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
}