import React, { useState} from "react";
import { Modal, Button, Row, Col, Container } from "react-bootstrap";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import Slide from "@mui/material/Slide";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//MessagePreview
export function MessagePreview() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View Live Demo
      </Button>

      <Modal show={show} >
        <Modal.Header >
          <Modal.Title>Message Preview</Modal.Title>
          <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
          x
        </Button>
        </Modal.Header>
        <Modal.Body>
          Why We Use Electoral College, Not Popular Vote It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="me-1" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="default" className="me-1"  onClick={() => setShow(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
//SuccessAlertMessages
export function SuccessAlertMessages() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View Live Demo
      </Button>

      <Modal show={show} >
      
        <Modal.Body className="text-center p-4">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
          x
        </Button>
          <i className="fe fe-check-circle fs-100 text-success lh-1 mb-4 d-inline-block"></i>
          <h4 className="text-success mb-4">Congratulations!</h4>
          <p className="mb-4 mx-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
          <button className="btn btn-success pd-x-25 "  onClick={() => setShow(false)}>
            Continue
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
}
//WarningAlertMessages
export function WarningAlertMessages() {
  const [show, setShow] = useState(false);

 
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View Live Demo
      </Button>
      <Modal show={show} >
        <Modal.Body className="text-center p-4">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
          x
        </Button>
          <i className="fe fe-x-circle fs-65 text-danger lh-1 mb-4 d-inline-block"></i>
          <h4 className="text-danger mb-20">
            Error: Cannot process your entry!
          </h4>
          <p className="mb-4 mx-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
          <button
            aria-label="Close"
            className="btn btn-danger pd-x-25"
            onClick={() => setShow(false)}
          >
            Continue
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
}
//FullscreenModal
export function FullscreenModal() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button
          className="me-2 mt-3"
          key={idx}
          variant="warning"
          onClick={() => handleShow(v)}
        >
          Full screen Modal
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} >
        <Modal.Header >
          <Modal.Title>Modal title</Modal.Title>
          <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
          x
        </Button>
        </Modal.Header>
        <Modal.Body>Modal body text goes here.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary"  onClick={() => setShow(false)}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
//LargeModal
export function LargeModal() {
  const [lgscreen, setLgscreen] = useState(true);
  const [show, setShow] = useState(false);
  function handleShows(breakpoint) {
    setLgscreen(breakpoint);
    setShow(true);
  }
  return (
    <>
      <Button
        variant="info"
        className="mt-3 me-2"
        onClick={handleShows}
      >
        Large modal
      </Button>

      <Modal
        size="lg"
        show={show}
        lgscreen={lgscreen}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header>
          <Modal.Title >
            Large Modal
          </Modal.Title>
          <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
          x
        </Button>
        </Modal.Header>
        <Modal.Body>Modal body text goes here.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary"  onClick={() => setShow(false)}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
//ExtralargeModal
export function ExtralargeModal() {
  const [xlscreen, setXlscreen] = useState(true);
  const [show, setShow] = useState(false);
  function handleShowxl(breakpoint) {
    setXlscreen(breakpoint);
    setShow(true);
  }
  return (
    <>
      <Button
        className="me-2 mt-3"
        variant="secondary"
        onClick={handleShowxl}
      >
        Extralarge Modal
      </Button>

      <Modal
        size="xl"
        show={show}
        xlscreen={xlscreen}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header>
          <Modal.Title >
            Large Modal
          </Modal.Title>
          <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
          x
        </Button>
        </Modal.Header>
        <Modal.Body>Modal body text goes here.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary"  onClick={() => setShow(false)}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
//SmallModal
export function SmallModal() {
  const [smscreen, setSmscreen] = useState(true);
  const [show, setShow] = useState(false);
  function handleShowsm(breakpoint) {
    setSmscreen(breakpoint);
    setShow(true);
  }
  return (
    <>
      <Button
        className=" mt-3 me-2"
        variant="primary"
        onClick={handleShowsm}
      >
        Small modal
      </Button>
      <Modal
        size="sm"
        show={show}
        smscreen={smscreen}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
          <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
          x
        </Button>
        </Modal.Header>
        <Modal.Body>Modal body text goes here.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShow(false)}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
//ScrollingModal
export function ScrollingModal() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      <Button
        className="me-2 mt-3"
        variant="danger"
        onClick={handleClickOpen("paper")}
      >
        ScrollingModal
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Modal title</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(50)]
              .map(
                () => `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..
                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? 
                On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.`
              )
              .join("\n")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="secondary" className="me-1" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" className="me-1" onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
//Scale
export function Scale() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="primary"
        className="modal-effect d-grid mb-3"
        href="#modaldemo8"
        onClick={handleClickOpen}
      >
        Scale
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Message Preview</DialogTitle>
        <hr />
        <DialogContent>
          <DialogContentText>
            Why We Use Electoral College, Not Popular Vote It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English.
          </DialogContentText>
        </DialogContent>
        <hr />
        <DialogActions>
          <Button  variant="secondary" className="me-1" onClick={handleClose}>
            Save changes
          </Button>
          <Button onClick={handleClose} className="me-1" variant="success">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
//RightSlide
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});
export function RightSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className="modal-effect d-grid mb-3"
        href="#modaldemo8"
        variant="primary"
        onClick={handleClickOpen}
      >
        Slide In Right
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Message Preview</DialogTitle>
        <hr />
        <DialogContent>
          <DialogContentText>
            Why We Use Electoral College, Not Popular Vote It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English.
          </DialogContentText>
        </DialogContent>
        <hr />
        <DialogActions>
          <Button variant="secondary"className="me-1" onClick={handleClose}>
            Save changes
          </Button>
          <Button onClick={handleClose} className="me-1" variant="success">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
//BottomSlide
const Bottomslide = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export function BottomSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className="modal-effect d-grid mb-3"
        href="#modaldemo8"
        variant="primary"
        onClick={handleClickOpen}
      >
        Slide In Bottom
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Bottomslide}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Message Preview</DialogTitle>
        <hr />
        <DialogContent>
          <DialogContentText>
            Why We Use Electoral College, Not Popular Vote It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English.
          </DialogContentText>
        </DialogContent>
        <hr />
        <DialogActions>
          <Button variant="secondary" className="me-1" onClick={handleClose}>
            Save changes
          </Button>
          <Button onClick={handleClose} className="me-1" variant="success">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export const Datepicker = () => {
  const [date, setDate] = useState(new Date());

  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button  className="modal-effect d-grid mb-3"
        href="#modaldemo8"
        variant="primary" onClick={handleShow}>
        View Demo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Basic Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title>Modal Body</Modal.Title>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            onCalendarClose={handleCalendarClose}
            onCalendarOpen={handleCalendarOpen}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger"className="me-1" onClick={handleClose}>
            Save Changes
          </Button>
          <Button variant="success"className="me-1" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
//ScrollBody
export function ScrollBody() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button
        className="modal-effect  d-grid mb-3"
        href="#modaldemo8"
        onClick={handleClickOpen("body")}
      >
        scrollbody
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(10)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="success" onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
//PaperComponent
export function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}
//DraggableModal
export function DraggableModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className="modal-effect  d-grid mb-3"
        href="#modaldemo8"
        variant="primary"
        onClick={handleClickOpen}
      >
        DraggableModal
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Message Preview
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Why We Use Electoral College, Not Popular Vote It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="secondary" className="me-1" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} className="me-1" variant="success">Save Changes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
//FormModal
export function FormModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className="modal-effect  d-grid mb-3"
        href="#modaldemo8"
        variant="primary"
        onClick={handleClickOpen}
      >
        Form Modal
      </Button>
      <Dialog open={open}  onClose={handleClose}>
        <DialogTitle>Login From
          <Button
         onClick={handleClose}
          className="btn-close"
          variant=""
        >
          x
        </Button>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="secondary" className="me-1">Cancel</Button>
          <Button onClick={handleClose} variant="success" className="me-1">Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
//StaticbackdropModal
export function StaticbackdropModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="modal-effect  d-grid mb-3"
        href="#modaldemo8"
        variant="primary"
        onClick={handleShow}
      >
        static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header >
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="me-1" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" className="me-1" onClick={handleClose}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
//MydModalWithGrid
export function MydModalWithGrid(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header >
        <Modal.Title >
          Using Grid in Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              .col-xs-12 .col-md-8
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="modal-effect  d-grid mb-3"
          href="#modaldemo8"
          onClick={props.onHide}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
//Gridmodal
export function Gridmodal() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        className="modal-effect  d-grid mb-3"
        href="#modaldemo8"
        variant="primary"
        onClick={() => setModalShow(true)}
      >
        Grid Modal
      </Button>

      <MydModalWithGrid
        variant="primary"
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
//CustomModal
export function CustomModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <>
      <Button
        className="modal-effect  d-grid mb-3"
        href="#modaldemo8"
        variant="primary"
        onClick={() => setShow(true)}
      >
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header >
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Modal body text goes here.It is a long established fact that a reader
          will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"className="me-1" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success"className="me-1" onClick={handleClose}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
//MyVerticallyCenteredModal
export function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title >
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="modal-effect  d-grid mb-3"
          href="#modaldemo8"
          onClick={props.onHide}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
//VerticallyCenteredModal
export function VerticallyCenteredModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        className="modal-effect  d-grid mb-3"
        href="#modaldemo8"
        variant="primary"
        onClick={() => setModalShow(true)}
      >
 Vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
//CenterModal
export function CenterModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className="modal-effect  d-grid mb-3"
        href="#modaldemo8"
        variant="primary"
        onClick={handleClickOpen}
      >
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Message Preview</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Why We Use Electoral College, Not Popular Vote It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English.
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button variant="secondary"className="me-1" onClick={handleClose}>Cancel</Button>
          <Button variant="success" className="me-1" onClick={handleClose} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
