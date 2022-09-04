import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

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
//Cardwithloader1
export function Cardwithloader1() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = React.useState(true);

  return (
    <>
      {show ? (
        <Card className="card ">
          <CardActions className="card-header ">
            <h3 className="card-title">loaders</h3>
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
              onClick={() => setShow(false)}
              aria-label="close"
            >
              <CloseIcon fontSize="small" />
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
        </Card>
      ) : null}
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
      {show ? (
        <Card className="card ">
          <CardActions className="card-header ">
            <h3 className="card-title">loaders</h3>
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
              onClick={() => setShow(false)}
              aria-label="close"
            >
              <CloseIcon fontSize="small" />
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
        </Card>
      ) : null}
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
      {show ? (
        <Card className="card ">
          <CardActions className="card-header ">
            <h3 className="card-title">loaders</h3>
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
              onClick={() => setShow(false)}
              aria-label="close"
            >
              <CloseIcon fontSize="small" />
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
        </Card>
      ) : null}
    </>
  );
}
//Cardwithloader4
export function Cardwithloader4() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = React.useState(true);
  return (
    <>
      {show ? (
        <Card className="card ">
          <CardActions className="card-header ">
            <h3 className="card-title">loaders</h3>
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
              onClick={() => setShow(false)}
              aria-label="close"
            >
              <CloseIcon fontSize="small" />
            </IconButton>
            </div>
          </CardActions>
          <Collapse in={expanded} timeout="auto">
            <div className="card-body">
              <div className="dimmer active">
                <div className="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </Collapse>
        </Card>
      ) : null}
    </>
  );
}
//Cardwithloader5
export function Cardwithloader5() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = React.useState(true);
  return (
    <>
      {show ? (
        <Card className="card ">
          <CardActions className="card-header ">
            <h3 className="card-title">loaders</h3>
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
              onClick={() => setShow(false)}
              aria-label="close"
            >
              <CloseIcon fontSize="small" />
            </IconButton>
            </div>
          </CardActions>
          <Collapse in={expanded} timeout="auto">
            <div className="card-body">
              <div className="dimmer active">
                <div className="lds-hourglass"></div>
              </div>
            </div>
          </Collapse>
        </Card>
      ) : null}
    </>
  );
}
//Cardwithloader6
export function Cardwithloader6() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = React.useState(true);
  return (
    <>
      {show ? (
        <Card className="card ">
          <CardActions className="card-header ">
            <h3 className="card-title">loaders</h3>
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
              aria-label="close"
              color="inherit"
              onClick={() => setShow(false)}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
            </div>
          </CardActions>
          <Collapse in={expanded} timeout="auto">
            <div className="card-body">
              <div className="dimmer active">
                <div className="lds-heart">
                  <div></div>
                </div>
              </div>
            </div>
          </Collapse>
        </Card>
      ) : null}
    </>
  );
}
//Loadersbigsizes
export function Loadersbigsizes() {
  const [expanded] = React.useState(true);
  return (
    <>
      <Card className="card ">
        <CardActions className="card-header lodaer">
          <h3 className="card-title">loaders big sizes</h3>
          
        </CardActions>
        <Collapse in={expanded} timeout="auto">
          <div className="card-body">
            <div className="dimmer active">
              <div className="spinner-lg"></div>
            </div>
          </div>
        </Collapse>
      </Card>
    </>
  );
}
//Loadersbigsizes1
export function Loadersbigsizes1() {
  const [expanded] = React.useState(true);
  return (
    <>
      <Card className="card ">
        <CardActions className="card-header lodaer">
          <h3 className="card-title">loaders big sizes</h3>
        </CardActions>
        <Collapse in={expanded} timeout="auto">
          <div className="card-body">
            <div className="dimmer active">
              <div className="spinner1-lg">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </div>
          </div>
        </Collapse>
      </Card>
    </>
  );
}
