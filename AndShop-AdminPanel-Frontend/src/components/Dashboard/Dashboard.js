import React from "react";
import { Breadcrumb, Col, Row, Card } from "react-bootstrap";
export default function Dashboard() {
  return (
    <div><div className="page-header ">
        <div>
          <h1 className="page-title">Dashboard 01</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Dashboard 01
            </Breadcrumb.Item>
          </Breadcrumb>
      </div>
    </div>
      </div>
  );
}
