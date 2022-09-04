import React from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

//CustomEditComponent
const Dataeditprofile = [
  {
    ID: "1",
    PROJECTNAME: "At vero eos et accusamus et iusto odio",
    BACKEND: "PHP",
    DEADLINE: "15/11/2018",
    TEAMMEMBERS: "15 Members",
  },
  {
    ID: "2",
    PROJECTNAME: "voluptatum deleniti atque corrupti quos",
    BACKEND: "Angular js",
    DEADLINE: "25/11/2018",
    TEAMMEMBERS: "12 Members",
    Class: "striped table-vcenter table-outline text-nowrap",
  },
  {
    ID: "3",
    PROJECTNAME: "dignissimos ducimus qui blanditiis praesentium",
    BACKEND: "Java",
    DEADLINE: "5/12/2018",
    TEAMMEMBERS: "20  Members",
  },
  {
    ID: "4",
    PROJECTNAME: "deleniti atque corrupti quos dolores",
    BACKEND: "Phython",
    DEADLINE: "14/12/2018",
    TEAMMEMBERS: "10  Members",
  },
  {
    ID: "5",
    PROJECTNAME: "et quas molestias excepturi sint occaecati",
    BACKEND: "Phython",
    DEADLINE: "4/12/2018",
    TEAMMEMBERS: "17  Members",
  },
];
export function CustomEditComponent() {
  function remove(e) {
    Dataeditprofile.forEach((el, i) => {
      if (e === el.ID) {
        Dataeditprofile.splice(i, 1);
      }
    });
  }
  return (
      <Table className="table table-hover card-table table-striped table-vcenter table-outline text-nowrap ">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Project Name</th>
            <th scope="col">Backend</th>
            <th scope="col">Deadline</th>
            <th scope="col">Team Members</th>
            <th scope="col">Edit Project Details </th>
            <th scope="col">list info</th>
          </tr>
        </thead>
        
          <tbody >
          {Dataeditprofile.map((playerData, k) => (
            <tr key={k}>
              <td>{playerData.ID}</td>
              <td>{playerData.PROJECTNAME}</td>
              <td>{playerData.BACKEND}</td>
              <td>{playerData.DEADLINE}</td>
              <td>{playerData.TEAMMEMBERS}</td>
              <td>
                <Link className="btn btn-sm btn-primary me-2" to="#">
                  <i className="fa fa-edit"></i> Edit
                </Link>
                <Link
                  className="btn btn-sm btn-danger me-2"
                  to="#"
                  onClick={function () {
                    remove(playerData.ID);
                  }}
                >
                  <i className="fa fa-trash"></i>Delete
                </Link>
              </td>
              <td>
                <Link className="btn btn-sm btn-secondary" to="#">
                  <i className="fa fa-info-circle"></i> Details
                </Link>
              </td>
            </tr>
             ))}
          </tbody>
       
      </Table>
  );
}