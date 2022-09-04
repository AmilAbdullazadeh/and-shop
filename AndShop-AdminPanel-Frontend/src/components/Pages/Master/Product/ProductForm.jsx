import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Form,
  FloatingLabel,
  Card,
  Container,
} from "react-bootstrap";
import { authHeader, get, post } from "../../../../helper/api";
import useAuth from "../../../Context/auth";
import * as Notification from "../../../Components/Notifications/index";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";

export default function ProductForm() {
  const { adminInfo } = useAuth();
  const location = useLocation();
  const [pId, setPId] = useState(
    location.state?.p_id ? location.state.p_id : ""
  );
  const [id, setId] = useState(location.state?.id);
  const [parentId, setParentId] = useState(
    location.state?.parent_id ? location.state.parent_id : 0
  );
  const [name, setName] = useState(location.state?.name);
  const [desc, setDesc] = useState(location.state?.description);
  const [salePrice, setSalePrice] = useState(location.state?.sales_price);
  const [mrp, setMrp] = useState(location.state?.mrp);;
  const [categoryName, setCategoryName] = useState([]);
  const [parentName, setParentName] = useState([]);

  const [images, setImages] = useState([]);

  const fetchParentName = async () => {
    var body = {};
    var result = await get("master/fetchParentName", body);
    setParentName(result.data);
    // alert(JSON.stringify(result.data));
  };

  const fetchCategoryName = async () => {
    var body = {};
    var result = await get("master/fetchCategoryName", body);
    setCategoryName(result.data);
  };
  // alert(JSON.stringify(categoryData))
  useEffect(() => {
    fetchCategoryName();
    fetchParentName();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
   
    var formData = new FormData();
    formData.append("Aid", adminInfo.aid);
    formData.append("id", pId);
    formData.append("categoryid", id);
    formData.append("parentid", parentId);
    formData.append("name", name);
    formData.append("desc", desc);
    formData.append("sprice", salePrice);
    formData.append("mrprice", mrp);

    for (const el in images) {
      formData.append("img", images[el]);
    }

    var result = await post("master/insertEditProduct", formData, {
      headers: authHeader(),
    });

    if (result.status) {
      Notification.swatSuccess(result.msg);
      setId("");
      setPId("");
      setParentId("");
      setName("");
      setDesc("");
      setSalePrice("");
      setMrp("");
      // setImage("");
    } else {
      Swal.fire({
        icon: "warning",
        title: " Categroy has not inserted!!!",
      });
    }
  };
  return (
    <div>
      <div className="page-header">
        <Container>
          <Row className=" row-sm">
            <Col lg={12}>
              <Card>
                <Card.Body>
                  <Form>
                    <h3> {pId == "" ? "inserted" : "updated"} product</h3>
                    <br />
                    <Row className="g-2">
                      <Col md>
                        <Form.Group controlId="formFile" className="mb-3">
                          <b>
                            <Form.Label>select Category Name</Form.Label>
                          </b>
                          <FloatingLabel
                            controlId="floatingSelectGrid"
                            label="select Category Name"
                          >
                            <Form.Select
                              aria-label="Floating label select example"
                              value={id}
                              onChange={(e) => setId(e.target.value)}
                              required
                            >
                              <option>-- select category name --</option>
                              {categoryName.map((item) => (
                                <option value={item.id}>{item.name}</option>
                              ))}
                            </Form.Select>
                          </FloatingLabel>
                        </Form.Group>
                      </Col>
                      <Col md>
                        <Form.Group controlId="formFile" className="mb-3">
                          <b>
                            <Form.Label>select Sub-Category Name</Form.Label>
                          </b>
                          <FloatingLabel
                            controlId="floatingSelectGrid"
                            label="select SubCategory Name"
                          >
                            <Form.Select
                              aria-label="Floating label select example"
                              value={parentId}
                              onChange={(e) => setParentId(e.target.value)}
                            >
                              <option>-- select SubCategory name --</option>
                              {/* {console.log(data)} */}
                              {parentName.map((item) => (
                                <option value={item.parent_id}>
                                  {item.parent_name}
                                </option>
                              ))}
                            </Form.Select>
                          </FloatingLabel>
                        </Form.Group>
                      </Col>

                      <br />
                    </Row>
                    <Row>
                      <Col md>
                        <Form.Group controlId="formFile" className="mb-3">
                          <b>
                            <Form.Label>Enter Product Name </Form.Label>
                          </b>
                          <Form.Control
                            placeholder="Product Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md>
                        <Form.Group controlId="formFile" className="mb-3">
                          <b>
                            <Form.Label>Enter Description </Form.Label>
                          </b>
                          <Form.Control
                            placeholder="Description"
                            type="text"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>

                      <br />
                    </Row>
                    <Row>
                      <Col md>
                        <Form.Group controlId="formFile" className="mb-3">
                          <b>
                            <Form.Label>Enter Sale Price</Form.Label>
                          </b>
                          <Form.Control
                            placeholder="sale price"
                            type="number"
                            value={salePrice}
                            onChange={(e) => setSalePrice(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md>
                        <Form.Group controlId="formFile" className="mb-3">
                          <b>
                            <Form.Label>Enter MRP</Form.Label>
                          </b>
                          <Form.Control
                            placeholder=" Enter MRP"
                            type="number"
                            value={mrp}
                            onChange={(e) => setMrp(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>

                      <br />
                    </Row>
                    <Row>
                      <Col md>
                        <Form.Group controlId="formFile" className="mb-3">
                          <b>
                            <Form.Label>Image</Form.Label>
                          </b>
                          <Form.Control
                            type="file"
                            multiple
                            // value={image.filename}
                            onChange={(event) => {
                              // handleImage(event);
                              // console.log(event.target.files);
                              setImages(event.target.files);
                            }}
                            required
                          ></Form.Control>
                        </Form.Group>
                        
                      </Col>
                    </Row>
                    <button className="btn btn-secondary" type="submit">
                      Close
                    </button>
                    &nbsp;
                    <button
                      className="btn btn-primary"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
