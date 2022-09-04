import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import Swal from "sweetalert2";
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import useAuth from "../../../Context/auth";
import { post, authHeader, get } from '../../../../helper/api';
import * as Notification from "../../../Components/Notifications/index";

export default function CategoryModal({ show, setShow,state, setState, categoryList }) {
    
 const { adminInfo } = useAuth();
    const [name, setName] = useState("")
    const [parentId, setParentId] = useState(0)
  const [id, setId] = useState("")
  const [data, setData] = useState([])
    // alert(parentId)
    const handleClose = () => {
        setId("")
      setName("")
      setParentId("")
      setState({})
        setShow(false)

  }
  // alert(parentId)
    const handleSubmit = async(e) => {
      e.preventDefault();
      // var adminData = JSON.parse(localStorage.getItem('Aid'))
      var params = {
          Aid:adminInfo.aid,
            id:id,
            name: name,
            parentid:parentId
      }
      
        var result = await post(
          "master/insertEditCategory", params, {
            headers:authHeader()
          }
        );
        if (result.status) {
          Notification.swatSuccess(result.msg);
          setShow(false);
          setState({});
          categoryList();
        }
        else {
            Swal.fire({
              icon: "error",
              title: "Category not insert!",
            });
        }
        
  }
    const fetchCategoryName = async () => {
      var body = {};
      var result = await get(
        "master/fetchCategoryName",
        body
      );
      setData(result.data);
      // alert(JSON.stringify(result.data))
  };
  
  useEffect(() => {
    fetchCategoryName()
    
    if (state.id) {
      setId(state.id)
      setName(state.name)
      setParentId(state.parent_id)
      setShow(true)
    }
  }, [state])
  
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>{id == "" ? "Inserted" : "Updated"} Category </Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group>
            <b>
              <Form.Label>Enter Category Name</Form.Label>
            </b>
            <Form.Control
              type="text"
              placeholder="Enter category name"
              onChange={(e) => setName(e.target.value)}
              required
              value={name}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <b>
              <Form.Label>select parent Name</Form.Label>
            </b>
            <FloatingLabel
              controlId="floatingSelectGrid"
              label="select parent Name"
            >
              <Form.Select
                aria-label="Floating label select example"
                value={parentId}
                onChange={(e) => setParentId(e.target.value)}
              >
                <option>select parent name</option>
                {/* {console.log(data)} */}
                {data.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </Form.Select>
            </FloatingLabel>
           
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            close
          </Button>
          <Button variant="primary" type="submit">
            {id === "" ? "inserted " : "updated"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
