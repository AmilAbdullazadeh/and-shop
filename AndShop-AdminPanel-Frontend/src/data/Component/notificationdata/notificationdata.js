import React from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";


//SuccessNotification
export const popover = (
  <Popover style={{ margin: "0px" }} className="notificationsuccess">
    <Popover.Header>Alert Sucess</Popover.Header>
    <Popover.Body>
      Well done! You successfully read this important alert message..
    </Popover.Body>
  </Popover>
);

export function SuccessNotification() {
  return (
    <>
      <OverlayTrigger trigger="click" placement="top" overlay={popover} >
        <Button variant="success" className="me-2 mb-2">
          Show Success
        </Button>
      </OverlayTrigger>
    </>
  );
}
//SuccessNotification1
export const popover1 = (
  <Popover style={{ margin: "0px" }} className="notificationsecondary">
    <Popover.Header>Alert Secondary</Popover.Header>
    <Popover.Body>Error! Please Check u r emial id..</Popover.Body>
  </Popover>
);

export function SuccessNotification1() {
  return (
    <>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover1}>
        <Button variant="secondary" className="me-2 mb-2">
          Show Success
        </Button>
      </OverlayTrigger>
    </>
  );
}
//SuccessNotification2
export const popover2 = (
  <Popover style={{ margin: "0px" }} className="notificationinfo">
    <Popover.Header>Alert Info</Popover.Header>
    <Popover.Body>
      Heads up! This alert needs your attention, but it's not super important...
    </Popover.Body>
  </Popover>
);

export function SuccessNotification2() {
  return (
    <>
      <OverlayTrigger trigger="click" placement="top" overlay={popover2}>
        <Button variant="info" className="me-2 mb-2">
          Show Info
        </Button>
      </OverlayTrigger>
    </>
  );
}
//SuccessNotification3
export const popover3 = (
  <Popover style={{ margin: "0px" }} className="notificationwarning">
    <Popover.Header>Alert warning</Popover.Header>
    <Popover.Body>
      Warning! Best check yo self, you're not looking too good..
    </Popover.Body>
  </Popover>
);

export function SuccessNotification3() {
  return (
    <>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover3}>
        <Button variant="warning" className="me-2 mb-2">
          Show warning
        </Button>
      </OverlayTrigger>
    </>
  );
}
////SuccessNotification4
export const popover4 = (
  <Popover style={{ margin: "0px" }} className="notificationdanger">
    <Popover.Header>Alert danger</Popover.Header>
    <Popover.Body>
      Oh snap! Change a few things up and try submitting again.
    </Popover.Body>
  </Popover>
);

export function SuccessNotification4() {
  return (
    <>
      <OverlayTrigger trigger="click" placement="top" overlay={popover4}>
        <Button variant="danger" className="me-2 mb-2">
          Show Danger
        </Button>
      </OverlayTrigger>
    </>
  );
}
//SuccessNotification5
export const popover5 = (
  <Popover style={{ margin: "0px" }}>
    <Popover.Header>Alert primary</Popover.Header>
    <Popover.Body>
      Cool! This alert will close in 3 seconds. The data-bs-delay attribute is
      in milliseconds.
    </Popover.Body>
  </Popover>
);

export function SuccessNotification5() {
  return (
    <>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover5}>
        <Button variant="primary" className="me-2 mb-2">
          Show Primary
        </Button>
      </OverlayTrigger>
    </>
  );
}
