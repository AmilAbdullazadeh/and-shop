import React, { useState, useRef } from "react";
import { Alert, Overlay, Button,Popover } from "react-bootstrap";
//Primaryalert
export function Primaryalert() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert className="alerts">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
         <span aria-hidden="true">×</span>
        </Button>
        <Alert.Heading >
          Primary alert—At vero eos et accusamus praesentium!
        </Alert.Heading>
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//Secondaryalert
export function Secondaryalert() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="secondary">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
      <span aria-hidden="true">×</span>
        </Button>
        <Alert.Heading>
          Primary alert—At vero eos et accusamus praesentium!
        </Alert.Heading>
      </Alert>
    );
  }
  return <p variant="info" onClick={() => setShow(true)}></p>;
}
//Successalert
export function Successalert() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="success">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
        <span aria-hidden="true">×</span>
        </Button>
        <Alert.Heading>
          Primary alert—At vero eos et accusamus praesentium!
        </Alert.Heading>
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//Warningalert
export function Warningalert() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="warning">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
         <span aria-hidden="true">×</span>
        </Button>
        <Alert.Heading>
          Primary alert—At vero eos et accusamus praesentium!
        </Alert.Heading>
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//Infoalert
export function Infoalert() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="info">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
          <span aria-hidden="true">×</span>
        </Button>
        <Alert.Heading>
          Primary alert—At vero eos et accusamus praesentium!
        </Alert.Heading>
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//Dangeralert
export function Dangeralert() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
        <span aria-hidden="true">×</span>
        </Button>
        <Alert.Heading>
          Primary alert—At vero eos et accusamus praesentium!
        </Alert.Heading>
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//Linkalertsuccess
export function Linkalertsuccess() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="success">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
          <span aria-hidden="true">×</span>
        </Button>
        <strong>Well done!</strong>&nbsp; You successfully read
        <Alert.Link href="#">&nbsp; this important alert message.</Alert.Link>
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//Linkalertinfo
export function Linkalertinfo() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="info">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
          <span aria-hidden="true">×</span>
        </Button>
        <strong>Well done! &nbsp;</strong> You successfully read
        <Alert.Link href="#">&nbsp; this important alert message.</Alert.Link>
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//Linkalertwarning
export function Linkalertwarning() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="warning">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
         <span aria-hidden="true">×</span>
        </Button>
        <strong>Warning!&nbsp;</strong>Better check yourself, you're
        <Alert.Link href="#">&nbsp; not looking too good.</Alert.Link>
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//Linkalertdanger
export function Linkalertdanger() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
         <span aria-hidden="true">×</span>
        </Button>
        <strong>Oh snap!</strong>&nbsp;
        <Alert.Link href="#">Change a few things up &nbsp;</Alert.Link> and try
        submitting again.
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//Iconalertaddsuccess
export function Iconalertaddsuccess() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="success">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
          <span aria-hidden="true">×</span>
        </Button>
        <i className="fa fa-check-circle-o me-2" aria-hidden="true"></i>Well
        done! You successfully read this important alert message.
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//Iconalertaddinfo
export function Iconalertaddinfo() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="info">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
         <span aria-hidden="true">×</span>
        </Button>
        <i className="fa fa-bell-o me-2" aria-hidden="true"></i>Heads up! This
        alert needs your attention, but it's not super important.
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//Iconalertaddwarning
export function Iconalertaddwarning() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="warning">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
          <span aria-hidden="true">×</span>
        </Button>
        <i className="fa fa-exclamation me-2" aria-hidden="true"></i> Warning!  Better check yourself, you're not looking too good.
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//Iconalertadddanger
export function Iconalertadddanger() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
         <span aria-hidden="true">×</span>
        </Button>
        <i className="fa fa-frown-o me-2" aria-hidden="true"></i>Oh snap! Change
        a few things up and try submitting again.
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//Imgalertprimary
export function Imgalertprimary() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="primary">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
          <span aria-hidden="true">×</span>
        </Button>
        <img
          className="avatar brround cover-image"
          src={require("../../assets/images/users/14.jpg")}
          alt=""
        />&nbsp;
         <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit.</span>
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//Imgalertsuccess
export function Imgalertsuccess() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="success">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
          <span aria-hidden="true">×</span>
        </Button>
        <img
          className="avatar brround cover-image"
          src={require("../../assets/images/users/18.jpg")}
          alt=""
        />&nbsp;
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit.
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//Iconalertdismissibledefault
export function Iconalertdismissibledefault() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="default">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
          <span aria-hidden="true">×</span>
        </Button>
        <span className="alert-inner--icon">
        <i className="fe fe-download "></i></span>&nbsp;
        <strong>Default!&nbsp;</strong> This is a warning alert—check it out that has
        an icon too!
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//Iconalertdismissibleprimary
export function Iconalertdismissibleprimary() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="primary">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
          <span aria-hidden="true">×</span>
        </Button>
        <span className="alert-inner--icon">
        <i className="fe fe-check-square"></i></span>&nbsp;
        <strong>Primary!&nbsp;</strong> This is a warning alert—check it out that has
        an icon too!
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//Iconalertdismissiblesuccess
export function Iconalertdismissiblesuccess() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="success">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
          <span aria-hidden="true">×</span>
        </Button>
        <span className="alert-inner--icon">
        <i className="fe fe-thumbs-up"></i></span>&nbsp;<strong>Success!&nbsp;</strong> This is a
        warning alert—check it out that has an icon too!
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//Iconalertdismissibleinfo
export function Iconalertdismissibleinfo() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="info">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
         <span aria-hidden="true">×</span>
        </Button>
        <span className="alert-inner--icon">
        <i className="fe fe-bell"></i></span>&nbsp;
        <strong>Info!&nbsp;</strong> This is a warning alert—check it out that has an
        icon too!
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//Iconalertdismissiblewarning
export function Iconalertdismissiblewarning() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="warning">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
          <span aria-hidden="true">×</span>
        </Button>
        <span className="alert-inner--icon">
        <i className="fe fe-info"></i></span>&nbsp;
        <strong>Warning!&nbsp;</strong> This is a warning alert—check it out that has
        an icon too!
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//Iconalertdismissibledanger
export function Iconalertdismissibledanger() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
         <span aria-hidden="true">×</span>
        </Button>
        <span className="alert-inner--icon">
        <i className="fe fe-slash"></i></span>&nbsp;
        <strong>Danger!&nbsp;</strong> This is a warning alert—check it out that has
        an icon too!
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//Iconalertdefault
export function Iconalertdefault() {
  return (
    <Alert variant="default">
          <span className="alert-inner--icon">
      <i className="fe fe-download"></i></span>&nbsp;
      <strong>Default!&nbsp;</strong> This is a warning alert—check it out that has an
      icon too!
    </Alert>
  );
}
//Iconalertprimary
export function Iconalertprimary() {
  return (
    <Alert variant="primary">
          <span className="alert-inner--icon">
      <i className="fe fe-check-square"></i></span>&nbsp;
      <strong>Primary!&nbsp;</strong> This is a warning alert—check it out that has an
      icon too!
    </Alert>
  );
}
//Iconalertsuccess
export function Iconalertsuccess() {
  return (
    <Alert variant="success">
          <span className="alert-inner--icon">
      <i className="fe fe-thumbs-up"></i></span>&nbsp;
      <strong>Success!&nbsp;</strong> This is a warning alert—check it out that has an
      icon too!
    </Alert>
  );
}
//Iconalertinfo
export function Iconalertinfo() {
  return (
    <Alert variant="info">
          <span className="alert-inner--icon">
      <i className="fe fe-bell"></i></span>&nbsp;
      <strong>Info!&nbsp;</strong> This is a warning alert—check it out that has an
      icon too!
    </Alert>
  );
}
//Iconalertwarning
export function Iconalertwarning() {
  return (
    <Alert variant="warning">
          <span className="alert-inner--icon">
      <i className="fe fe-info"></i></span>&nbsp;
      <strong>Warning!&nbsp;</strong> This is a warning alert—check it out that has an
      icon too!
    </Alert>
  );
}
//Iconalertdanger
export function Iconalertdanger() {
  return (
    <Alert variant="danger">
          <span className="alert-inner--icon">
      <i className="fe fe-slash"></i></span>&nbsp;
      <strong>Danger!&nbsp;</strong> This is a warning alert—check it out that has an
      icon too!
    </Alert>
  );
}
//SuccessMessage
export function SuccessMessage() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="success">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
          <span aria-hidden="true">×</span>
        </Button>
        <Alert.Heading>
          <strong>Success Message </strong>
        </Alert.Heading>
        <hr />
        <p>You successfully read this important alert message.</p>
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//InfoMessage
export function InfoMessage() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="info">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
         <span aria-hidden="true">×</span>
        </Button>
        <Alert.Heading>
          <strong>Info Message</strong>
        </Alert.Heading>
        <hr />
        <p>This alert needs your attention, but it's not super important.</p>
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//WarningMessage
export function WarningMessage() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="warning">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
          <span aria-hidden="true">×</span>
        </Button>
        <Alert.Heading>
          <strong>Warning Message</strong>
        </Alert.Heading>
        <hr />
        <p>Best check yo self, you're not looking too good</p>
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//DangerMessage
export function DangerMessage() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
          <span aria-hidden="true" >×</span>
        </Button>
        <Alert.Heading>
          <strong>Danger Message</strong>
        </Alert.Heading>
        <hr />
        <p>Change a few things up and try submitting again.</p>
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//Showsuccess
export function Showsuccess() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick} variant="success"> Show success</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover>
          <Popover.Header as="h3"><strong>Alert success</strong></Popover.Header>
          <Popover.Body>
          Well done! You successfully read this important alert message..
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}
//Showinfo
export function Showinfo() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick} variant="info"> Show info</Button>

      <Overlay
        show={show}
        target={target}
        placement="top"
        container={ref}
        containerPadding={20}
      >
        <Popover>
          <Popover.Header as="h3"><strong>Alert info</strong></Popover.Header>
          <Popover.Body>
          Heads up! This alert needs your attention, but it's not super
            important...
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}
//Showwarning
export function Showwarning() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick} variant="warning"> Show warning</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover>
          <Popover.Header as="h3"><strong>Alert warning</strong></Popover.Header>
          <Popover.Body>
          Warning! Best check yo self, you're not looking too good..
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}
//Showdanger
export function Showdanger() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick} variant="danger"> Show danger</Button>

      <Overlay
        show={show}
        target={target}
        placement="top"
        container={ref}
        containerPadding={20}
      >
        <Popover>
          <Popover.Header as="h3"><strong>Alert danger</strong></Popover.Header>
          <Popover.Body>
          Oh snap! Change a few things up and try submitting again.
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}
//Showsecondary
export function Showsecondary() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick} variant="secondary"> Show secondary</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover>
          <Popover.Header as="h3"><strong>Alert secondary</strong></Popover.Header>
          <Popover.Body>
          Error! Please Check u r emial id..
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}
//Showprimary
export function Showprimary() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick}> Show primary</Button>

      <Overlay
        show={show}
        target={target}
        placement="top"
        container={ref}
        containerPadding={20}
      >
        <Popover>
          <Popover.Header as="h3"><strong>Alert primary</strong></Popover.Header>
          <Popover.Body>
            Cool! This alert will close in 3 seconds. The data-bs-delay
            attribute is in milliseconds.
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}