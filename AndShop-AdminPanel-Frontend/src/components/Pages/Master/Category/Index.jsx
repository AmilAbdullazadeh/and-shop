import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import CategoryModal from './CategoryModal';
import {
  Row,
  Card,
  Col,
  Breadcrumb,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import DataTable from 'react-data-table-component';
import axios from 'axios';
import * as Notification from "../../../Components/Notifications";
import { post, authHeader } from "../../../../helper/api";
import useAuth from '../../../Context/auth';

export default function Index() {
  const { adminInfo } = useAuth();
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState([])
  const [state, setState] = useState({})

  const categoryList = async() => {
    var body = {

    }
    var result = await post("master/categroyList", body, {
      headers: authHeader()
    });
    setData((result.data))
    // alert(JSON.stringify(result.data))
  }
  useEffect(() => {
    categoryList();
  }, [])
  

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: false,
    },
    {
      name: "Parent Name",
      selector: (row) =>  row.parent_name,
      sortable: false,
    },

    {
      name: "Action",
      cell: (row) => (
        <>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={editTooltip}
          >
            <i
              className="fe fe-edit fa-2x"
              onClick={() => handleUpdateShow(row)}
            ></i>
            {/* </Link> */}
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={deleteTooltip}
          >
            <i
              className="mx-4 fe fe-trash-2 fa-2x text-red"
              onClick={() => handleDelete(row)}
            ></i>
          </OverlayTrigger>
        </>
      ),
    },
  ];

  const handleDelete = (row) => {
    var params = {
      id: row.id,
      Aid:adminInfo.aid
    }
    Notification.swatPopup().then(async (result) => {
      if (result.isConfirmed) {
        var res = await post(
          "master/deleteCategory",
          params, {
            headers:authHeader()
          }
        );

        if (res.status) {
          Notification.swatSuccess(result.msg);
        }
        categoryList();
      } else if (result.isDenied) {
        Notification.swatCancel();
      }
    });
  }

  const handleUpdateShow = (row) => {
    setState({...row})
  };
   const deleteTooltip = (props) => (
     <Tooltip id="button-tooltip" {...props}>
       Delete
     </Tooltip>
   );
   const editTooltip = (props) => (
     <Tooltip id="button-tooltip" {...props}>
       Edit
     </Tooltip>
   );
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Category</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Master
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              category
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Link
            to="#"
            className="btn btn-primary btn-icon text-white me-3"
            onClick={() => {
              setShowModal(true);
              categoryList();
            }}
          >
            <span>
              <i className="fe fe-plus"></i>&nbsp;
            </span>
            Add airport
          </Link>
          <CategoryModal
            show={showModal}
            setShow={setShowModal}
            categoryList={categoryList}
            state={state}
            setState={setState}
          />
        </div>
      </div>
      <Row className=" row-sm">
        <Col lg={12}>
          <Card>
            <Card.Body>
              <div className="table-responsive">
                <div className="table">
                  <DataTable
                    columns={columns}
                    data={data}
                    defaultSortField="id"
                    defaultSortAsc={false}
                    striped={true}
                    center={true}
                    persistTableHead
                    subHeader
                    subHeaderComponent={
                      <Row>
                        <Col>
                          <input
                            placeholder="Search here .."
                            className="form-control"
                            type="text"
                            // onChange={(e) => setSearch(e.target.value)}
                          />
                        </Col>
                      </Row>
                    }
                    pagination
                    highlightOnHover
                    paginationServer
                    // progressPending={loading}
                    // paginationTotalRows={totalRows}
                    // onChangeRowsPerPage={(perPage) => setPerPage(perPage)}
                    // onChangePage={(page) => setPage(page)}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
