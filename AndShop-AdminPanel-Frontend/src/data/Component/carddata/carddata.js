import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import user18 from "../../../assets/images/users/18.jpg";
import user20 from "../../../assets/images/users/20.jpg";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import CardContent from "@mui/material/CardContent";
import {Link} from"react-router-dom"
//collapsed 
 const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
//fullscreen
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

//Basiccard
export function Basiccard() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = React.useState(true);
  return (
    <>
      {show?<Card className="card">
        <CardActions className="card-header ">
          <h3 className="card-title">Basic card</h3>
          <div className="rtlcards ">
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <IconButton
          size="small"
              edge="start"
              color="inherit"
              onClick={()=> setShow(false)}
              aria-label="close"
            >
              <CloseIcon fontSize="small"/>
            </IconButton>
            </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto">
          <div className="card-body">
            Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
            consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
            viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus
            varius laoreet
          </div>
          <div className="card-footer">This is Basic card footer</div>
        </Collapse>
      </Card>:null}
    </>
  );
}
//Basiccardheadercolor
export function Basiccardheadercolor() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = React.useState(true);
  return (
    <>
      {show?<Card className="card">
        <CardActions className="card-header bg-primary br-tr-3 br-tl-3">
          <h3 className="card-title text-white">Basic color card-header</h3>
          <div className="rtlcards ">
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon className=" text-white"/>
          </ExpandMore>
          <IconButton
          
          size="small"
              edge="start"
              color="inherit"
              onClick={()=>setShow(false)}
              aria-label="close"
            >
              <CloseIcon fontSize="small" className="text-white"/>
            </IconButton>
            </div>
        </CardActions>
      
        <Collapse in={expanded} timeout="auto">
          <div className="card-body">
            Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
            consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
            viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus
            varius laoreet
          </div>
          <div className="card-footer">This is Basic card footer</div>
        </Collapse>
      </Card>:null}
    </>
  );
}
//BasiccardFootercolor
export function BasiccardFootercolor() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = React.useState(true);
  return (
    <>
      {show?<Card className="card">
        <CardActions className="card-header ">
          <h3 className="card-title">Basic color card-footer</h3>
          <div className="rtlcards ">
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <IconButton
         
          size="small"
              edge="start"
              color="inherit"
              onClick={()=> setShow(false)}
              aria-label="close"
            >
              <CloseIcon fontSize="small"/>
            </IconButton>
            </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto">
          <div className="card-body">
            Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
            consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
            viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus
            varius laoreet
          </div>
          <div className="card-footer bg-danger br-br-3 br-bl-3">
            <div className="text-white">Basic card footer</div>
          </div>
        </Collapse>
      </Card>:null}
    </>
  );
}
//Cardalertsuccessful
export function Cardalertsuccessful() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = React.useState(true);
  return (
    <>
      {show?<Card className="card">
        <CardActions className="card-header ">
          <h3 className="card-title">Card with alert</h3>
          <div className="rtlcards ">
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <IconButton
          
          size="small"
              edge="start"
              color="inherit"
              onClick={()=> setShow(false)}
              aria-label="close"
            >
              <CloseIcon fontSize="small"/>
            </IconButton>
            </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto">
          <div className="card-alert alert  alert-success mb-0">
            Adding action was successful
          </div>
          <div className="card-body">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </div>
        </Collapse>
      </Card>:null}
    </>
  );
}
//Cardalertdanger
export function Cardalertdanger() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = React.useState(true);
  return (
    <>
     {show?<Card className="card">
        <CardActions className="card-header ">
          <h3 className="card-title">Card with alert</h3>
          <div className="rtlcards ">
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <IconButton
         
          size="small"
              edge="start"
              color="inherit"
              onClick={()=>setShow(false)}
              aria-label="close"
            >
              <CloseIcon fontSize="small"/>
            </IconButton>
            </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto">
          <div className="card-alert alert alert-danger mb-0">
            Adding action failed
          </div>
          <div className="card-body">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </div>
        </Collapse>
      </Card>:null}
    </>
  );
}
//Fullscreenbutton
export function Fullscreenbutton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = React.useState(true);
  return (
    <>
    {show?<Card className="card">
      <CardActions className="card-header">
        <h3 className="card-title">Fullscreenbutton</h3>
        <div className="rtlcards ">
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        <FullscreenIcon variant="outlined" onClick={handleClickOpen} />
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <List sx={{ position: "relative" }}>
            <Toolbar className="border-bottom">
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div" >
                fullscreen button
              </Typography>
              
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
                className="me-2 "
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </List>
          <List>
            <ListItem>
              <ListItemText secondary="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />
            </ListItem>
          </List>
        </Dialog>
        <IconButton
        size="small"
              edge="start"
              color="inherit"
              onClick={()=> setShow(false)}
              aria-label="close"
            >
              <CloseIcon fontSize="small"/>
            </IconButton>
            </div>
      </CardActions>
      <Collapse in={expanded} timeout="auto">
        <div className="card-body">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </div>
      </Collapse>
    </Card>:null}
    </>
  );
}
//Cardcollapsed
export function Cardcollapsed() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = React.useState(true);
  return (
    <>
      {show?<Card className="card ">
        <CardActions className="card-header">
          <h3 className="card-title">Initial collapsed card</h3>
          <div className="rtlcards ">
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <IconButton
          
          size="small"
              edge="start"
              color="inherit"
              onClick={()=>setShow(false)}
              aria-label="close"
            >
              <CloseIcon fontSize="small"/>
            </IconButton>
            </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto">
          <div className="card-body">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </div>
        </Collapse>
      </Card>:null}
    </>
  );
}
//Employeecard1
export function Employeecard1() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = React.useState(true);
  return (
    <>
      {show?<Card className="card ">
        <CardActions className="card-header ">
          <h3 className="card-title ">Employee card</h3>
          <div className="rtlcards ">
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <IconButton
         
          size="small"
              edge="start"
              color="inherit"
              onClick={()=> setShow(false)}
              aria-label="close"
            >
              <CloseIcon fontSize="small"/>
            </IconButton>
            </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto">
          <CardContent className="card-body text-center">
            <img
              className="avatar avatar-xxl brround cover-image cover-image mt-3 mb-3"
               src={require('../../../assets/images/users/18.jpg')} alt=""
            />
            <div className="mb-3">
              <span className="h4 mb-0 mt-3">James Thomas</span>
              <br />
              <span className="card-text">Web designer</span>
            </div>
            
          </CardContent>
          <div className="card-footer text-center">
              <div className="row user-social-detail">
                <Link to="#" className="social-profile me-4 rounded text-center">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
                <Link to="#" className="social-profile me-4 rounded text-center">
                  <i className="fa fa-google-plus" aria-hidden="true"></i>
                </Link>
                <Link to="#" className="social-profile me-4 rounded text-center">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
        </Collapse>
      </Card>:null}
    </>
  );
}
//Employeecard2
export function Employeecard2() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = React.useState(true);
  return (
    <>
     {show?<Card className="card ">
        <CardActions className="card-header ">
          <h3 className="card-title ">Employee card</h3>
          <div className="rtlcards ">
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <IconButton
          
          size="small"
              edge="start"
              color="inherit"
              onClick={()=>setShow(false)}
              aria-label="close"
            >
              <CloseIcon fontSize="small"/>
            </IconButton>
            </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto">
          <CardContent className="card-body text-center">
            
            <img
              className="avatar avatar-xxl brround cover-image cover-image mt-3 mb-3"
              src={require('../../../assets/images/users/20.jpg')} alt=""
            />
            <div className="mb-3">
              <span className="h4 mb-0 mt-3">Rebacca Thomas</span>
              <br />
              <span className="card-text">Web designer</span>
            </div>
           
          </CardContent>
          <div className="card-footer text-center">
              <div className="row user-social-detail">
                <Link to="#" className="social-profile me-4 rounded text-center">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
                <Link to="#" className="social-profile me-4 rounded text-center">
                  <i className="fa fa-google-plus" aria-hidden="true"></i>
                </Link>
                <Link to="#" className="social-profile me-4 rounded text-center">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
        </Collapse>
      </Card>:null}
    </>
  );
}
//Employeecard3
export function Employeecard3() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = React.useState(true);
  return (
    <>
     {show?<Card className="card ">
        <CardActions className="card-header ">
          <h3 className="card-title ">Employee card</h3>
          <div className="rtlcards ">
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <IconButton
        
          size="small"
              edge="start"
              color="inherit"
              onClick={()=>setShow(false)}
              aria-label="close"
            >
              <CloseIcon fontSize="small"/>
            </IconButton>
          </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto">
          <CardContent className="card-body text-center"> 
            <img
              className="avatar avatar-xxl brround cover-image cover-image mt-3 mb-3"
               src={require('../../../assets/images/users/19.jpg')} alt=""
            /> 
            <div className="mb-3">
              <span className="h4 mb-0 mt-3">Thomas symson</span>
              <br />
              <span className="card-text">Web designer</span>
            </div>
          
          </CardContent>
          <div className="card-footer text-center">
              <div className="row user-social-detail">
                <Link to="#" className="social-profile me-4 rounded text-center">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
                <Link to="#" className="social-profile me-4 rounded text-center">
                  <i className="fa fa-google-plus" aria-hidden="true"></i>
                </Link>
                <Link to="#" className="social-profile me-4 rounded text-center">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
        </Collapse>
      </Card>:null}
    </>
  );
}
//CardWithList
export function CardWithList() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = React.useState(true);
  return (
    <>
     {show?<Card className="card m-b-20">
        <CardActions className="card-header">
          <h3 className="card-title">Card With List</h3>
          <div className="rtlcards ">
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <IconButton
          
          size="small"
              edge="start"
              color="inherit"
              onClick={()=>setShow(false)}
              aria-label="close"
            >
              <CloseIcon fontSize="small"/>
            </IconButton>
            </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto">
          <div className="card-body">
            <div className="visitor-list">
              <div className="media m-0 mt-0 border-bottom">
                <img
                  className="avatar brround avatar-md me-3"
                  alt="avatra-img"
                  src={user18}
                />
                <div className="media-body">
                  <Link to="#" className="text-default fw-semibold">
                    John Paige
                  </Link>
                  <p className="text-muted ">
                    Uploaded new invoices for RedBus
                  </p>
                </div>
              </div>
              <div className="media mt-2 border-bottom">
                <img
                  className="avatar brround avatar-md me-3"
                  alt="avatra-img"
                  src={user20}
                />
                <div className="media-body">
                  <Link to="#" className="text-default fw-semibold">
                    Lillian Quinn
                  </Link>
                  <p className="text-muted">
                    Created new work flow for the current
                  </p>
                </div>
              </div>
              <div className="media mt-2">
                <img
                  className="avatar brround avatar-md me-3"
                  alt="avatra-img"
                  src={user18}
                />
                <div className="media-body">
                  <Link to="#" className="text-default fw-semibold">
                    Irene Harris
                  </Link>
                  <p className="text-muted mb-0">
                    Submitted the project schedule to the manager
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Collapse>
      </Card>:null}
    </>
  );
}
//Samplecard
export function Samplecard() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = React.useState(true);
  return (
    <>
      {show?<Card className="card m-b-20">
        <CardActions className="card-header">
          <h3 className="card-title">Sample card</h3>
          <div className="rtlcards ">
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <IconButton
          size="small"
              edge="start"
              color="inherit"
              onClick={()=> setShow(false)}
              aria-label="close"
            >
              <CloseIcon fontSize="small"/>
            </IconButton>
      </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto">
          <div className="card-body">
            <p>
              Put toy mouse in food bowl run out of litter box at full speed
              drool but pee in Put toy mouse Put toy mouse the shoe purr when
              being pet but chew foot.
            </p>
            <p className="mb-0">
              Scratch the postman wake up lick paw Duis aute irure dolor in
              reprehenderit wake up owner meow meow lick plastic bags Scratch
              the postman wake up lick paw wake Duis aute irure dolor having
              their mate disturbing sleeping humans.
            </p>
          </div>
        </Collapse>
      </Card>:null}
    </>
  );
}
//Primarycardtitle
export function Primarycardtitle() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = React.useState(true);
  return (
    <>
      {show?<Card className="card text-white bg-primary">
        <CardActions className="card-header border-primary">
          <h3 className="card-title">primary card title</h3>
          <div className="rtlcards ">
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon className=" text-white"/>
          </ExpandMore>
          <IconButton
        
          size="small"
              edge="start"
              color="inherit"
              onClick={()=> setShow(false)}
              aria-label="close"
            >
              <CloseIcon fontSize="small"/>
            </IconButton>
          </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto">
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </Collapse>
      </Card>:null}
    </>
  );
}
//Secondarycardtitle
export function Secondarycardtitle() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = React.useState(true);
  return (
    <>
      {show?<Card className="card text-white bg-secondary">
        <CardActions className="card-header border-secondary">
          <h3 className="card-title">Secondary card title</h3>
          <div className="rtlcards ">
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon className=" text-white"/>
          </ExpandMore>
          <IconButton
        
          size="small"
              edge="start"
              color="inherit"
              onClick={()=>setShow(false)}
              aria-label="close"
            >
              <CloseIcon fontSize="small"/>
            </IconButton>
            </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto">
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </Collapse>
      </Card>:null}
    </>
  );
}
//Successcardtitle
export function Successcardtitle() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = React.useState(true);
  return (
    <>
      {show?<Card className="card text-white bg-success">
        <CardActions className="card-header border-success">
          <h3 className="card-title">Success card title</h3>
          <div className="rtlcards ">
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon className=" text-white"/>
          </ExpandMore>
          <IconButton
        
          size="small"
              edge="start"
              color="inherit"
              onClick={()=>setShow(false)}
              aria-label="close"
            >
              <CloseIcon fontSize="small"/>
            </IconButton>
            </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto">
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </Collapse>
      </Card>:null}
    </>
  );
}
//Cardwithloader1
export function Cardwithloader1() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = React.useState(true);
  return (
    <>
      {show?<Card className="card ">
        <CardActions className="card-header ">
          <h3 className="card-title">Card with loader</h3>
          <div className="rtlcards ">
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <IconButton
        
          size="small"
              edge="start"
              color="inherit"
              onClick={()=>setShow(false)}
              aria-label="close"
            >
              <CloseIcon fontSize="small"/>
            </IconButton>
            </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto">
          <div className="card-body">
            <div className="dimmer active">
              <div className="spinner"></div>
            </div>
          </div>
        </Collapse>
      </Card>:null}
    </>
  );
}
//Cardwithloader2
export function Cardwithloader2() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = React.useState(true);
  return (
    <>
      {show?<Card className="card ">
        <CardActions className="card-header ">
          <h3 className="card-title">Card with loader</h3>
          <div className="rtlcards ">
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <IconButton
          
          size="small"
              edge="start"
              color="inherit"
              onClick={()=>setShow(false)}
              aria-label="close"
            >
              <CloseIcon fontSize="small"/>
            </IconButton>
            </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto">
          <div className="card-body">
            <div className="dimmer active">
              <div className="spinner1">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </div>
          </div>
        </Collapse>
      </Card>:null}
    </>
  );
}
//Cardwithloader3
export function Cardwithloader3() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = React.useState(true);
  return (
    <>
      {show?<Card className="card ">
        <CardActions className="card-header ">
          <h3 className="card-title">Card with loader</h3>
          <div className="rtlcards ">
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <IconButton
          size="small"
              edge="start"
              color="inherit"
              onClick={()=> setShow(false)}
              aria-label="close"
            >
              <CloseIcon fontSize="small"/>
            </IconButton>
        </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto">
          <div className="card-body">
            <div className="dimmer active">
              <div className="spinner2">
                <div className="cube1"></div>
                <div className="cube2"></div>
              </div>
            </div>
          </div>
        </Collapse>
      </Card>:null}
    </>
  );
}
//Builtcard
export function Builtcard() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = React.useState(true);
  return (
    <>
      {show?<Card className="card ">
        <CardActions className="card-header ">
          <h3 className="card-title">Built card</h3>
          <div className="rtlcards ">
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <IconButton
      
          size="small"
              edge="start"
              color="inherit"
              onClick={()=>setShow(false)}
              aria-label="close"
            >
              <CloseIcon fontSize="small"/>
            </IconButton>
        </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto">
          <div className="card-body">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </div>
        </Collapse>
      </Card>:null}
    </>
  );
}
//Cardblue
export function Cardblue() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = React.useState(true);
  return (
    <>
      {show?<Card className="card ">
        <div className="card-status bg-blue br-tr-7 br-tl-7"></div>
        <CardActions className="card-header ">
          <h3 className="card-title">Card blue</h3>
          <div className="rtlcards ">
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <IconButton
      
          size="small"
              edge="start"
              color="inherit"
              onClick={()=>setShow(false)}
              aria-label="close"
            >
              <CloseIcon fontSize="small"/>
            </IconButton>
            </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto">
          <div className="card-body">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </div>
        </Collapse>
      </Card>:null}
    </>
  );
}
//Cardstatusonleftside
export function Cardstatusonleftside() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = React.useState(true);
  return (
    <>
      {show?<Card className="card ">
        <div className="card-status card-status-left bg-red br-bl-7 br-tl-7"></div>
        <CardActions className="card-header ">
          <h3 className="card-title">Card blue</h3>
          <div className="rtlcards ">
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <IconButton
        
          size="small"
              edge="start"
              color="inherit"
              onClick={()=> setShow(false)}
              aria-label="close"
            >
              <CloseIcon fontSize="small"/>
            </IconButton>
            </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto">
          <div className="card-body">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </div>
        </Collapse>
      </Card>:null}
    </>
  );
}
//Backgroundimg
export function Backgroundimg() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = React.useState(true);
  return (
    <>
      {show?<Card className="card card-blog-overlay">
        <CardActions className="card-header z-index2  border-transparent">
          <h3 className="card-title text-white ">card-with image</h3>
          <div className="rtlcards ">
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon  className=" text-white"/>
          </ExpandMore>
          <IconButton
          size="small"
              edge="start"
              color="inherit"
              onClick={()=> setShow(false)}
              aria-label="close"
            >
              <CloseIcon fontSize="small" className=" text-white"/>
            </IconButton>
            </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto">
        <div className="card-options">
                
              </div>
            <div className="card-body  text-white">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </div>
        </Collapse>
      </Card>:null}
    </>
  );
}