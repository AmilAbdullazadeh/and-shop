import React, { useState, useRef } from "react";
import {
  Tooltip,
  Overlay,
  Button,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
//DefaultTooltipprimary
export function DefaultTooltipprimary() {
  return (
       <OverlayTrigger placement="top" overlay={<Tooltip > Tooltip on the top</Tooltip>}>
                        <Button variant="primary">Hover me</Button>
                        </OverlayTrigger>
  );
}
//DefaultTooltipsuccess
export function DefaultTooltipsuccess() {
  return (
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip > Tooltip on the bottom</Tooltip>}
       
      >
        <Button variant="success">Hover me</Button>
      </OverlayTrigger>
  );
}
//DefaultTooltipdanger
export function DefaultTooltipdanger() {
  return (
      <OverlayTrigger
        placement="right"
        overlay={<Tooltip > Tooltip on the right</Tooltip>}
      >
        <Button variant="danger">Hover me</Button>
      </OverlayTrigger>
  );
}
//DefaultTooltipinfo
export function DefaultTooltipinfo() {
  return (
      <OverlayTrigger
        placement="left"
        overlay={<Tooltip > Tooltip on the left</Tooltip>}
      >
        <Button variant="info">Hover me</Button>
      </OverlayTrigger>
  );
}
//Colorprimary
export function Colorprimary() {
  return (
    <>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip className="tooltip-primary " >
        Tooltip on the Right
      </Tooltip>}
      >
        <Button variant="primary">Hover me</Button>
      </OverlayTrigger>
    </>
  );
}
//Colorsuccess
export function Colorsuccess() {

  return (
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip className="tooltip-success " >
        Tooltip on the Bottom
      </Tooltip>}
      >
        <Button variant="success">Hover me</Button>
      </OverlayTrigger>
  );
}
//Colordanger
export function Colordanger() {
  return (
      <OverlayTrigger
        placement="right"
        overlay={ <Tooltip className="tooltip-danger ">
        Tooltip on the Right
      </Tooltip>}
      >
        <Button variant="danger">Hover me</Button>
      </OverlayTrigger>
  );
}
//Colorinfo
export function Colorinfo() {
  return (
      <OverlayTrigger
        placement="left"
        overlay={<Tooltip className=" tooltip-info " >
        Tooltip on the Left
      </Tooltip>}
      >
        <Button variant="info">Hover me</Button>
      </OverlayTrigger>
  );
}
//Popoverprimary
export function Popoverprimary() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick}>Click Me</Button>

      <Overlay
        show={show}
        target={target}
        placement="top"
        container={ref}
        containerPadding={20}
      >
        <Popover style={{ margin: "0px" }}>
          <Popover.Header as="h3">Popover Top</Popover.Header>
          <Popover.Body>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}
//Popoversuccess
export function Popoversuccess() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick} variant="success">
        Click Me
      </Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover style={{ margin: "0px" }}>
          <Popover.Header as="h3">Popover Bottom</Popover.Header>
          <Popover.Body >
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}
//Popoverdanger
export function Popoverdanger() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick} variant="danger">
        Click Me
      </Button>

      <Overlay
        show={show}
        target={target}
        placement="right"
        container={ref}
        containerPadding={20}
      >
        <Popover style={{ margin: "0px" }} className="rightdanger">
          <Popover.Header as="h3">Popover Rigth</Popover.Header>
          <Popover.Body >
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}
//Popoverinfo
export function Popoverinfo() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick} variant="info">
        Click Me
      </Button>

      <Overlay
        show={show}
        target={target}
        placement="left"
        container={ref}
        containerPadding={20}
      >
        <Popover style={{ margin: "0px" }} className="leftinfo">
          <Popover.Header as="h3">Popover Left</Popover.Header>
          <Popover.Body >
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}
//Headerprimary
export function Headerprimary() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick}>Click Me</Button>

      <Overlay
        show={show}
        target={target}
        placement="top"
        container={ref}
        containerPadding={20}
      >
        <Popover style={{ margin: "0px" }} className="popover-head-primary">
          <Popover.Header as="h3" className="btn-primary">
            Popover Top
          </Popover.Header>
          <Popover.Body>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}
//Headersecondary

const popover = (
  <Popover style={{ margin: "0px" }} className="popover-head-secondary">
    <Popover.Header as="h3" className="btn-secondary popover-headers">
      Popover Bottom
    </Popover.Header>
    <Popover.Body style={{ margin: "0px" }}>
      Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque
      ornare sem lacinia quam venenatis vestibulum.
    </Popover.Body>
  </Popover>
);

export const  Headersecondary= () => (
  <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
    <Button variant="secondary">Click me </Button>
  </OverlayTrigger>
);
//FullColoredPopoverprimary
export function FullColoredPopoverprimary() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick} variant="primary">
        Click Me
      </Button>

      <Overlay
        show={show}
        target={target}
        placement="top"
        container={ref}
        containerPadding={20}
      >
        <Popover style={{ margin: "0px" }} className="popover-primary">
          <Popover.Header as="h3" className="btn-primary">
            Popover Top
          </Popover.Header>
          <Popover.Body  className="bodys">
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}
//FullColoredPopoversecondary
export function FullColoredPopoversecondary() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick} variant="secondary">
        Click Me
      </Button>

      <Overlay
        show={show}
        target={target}
        placement="right"
        container={ref}
        containerPadding={20}
      >
        <Popover style={{ margin: "0px" }} className=" popover-secondary ">
          <Popover.Header as="h3" className="btn-secondary">
            Popover Rigth
          </Popover.Header>
          <Popover.Body className="bodys">
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}
