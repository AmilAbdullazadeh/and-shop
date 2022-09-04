import React from "react";
import { Button } from "react-bootstrap";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDropzone } from "react-dropzone";
import { useTheme } from "@mui/material/styles";

export function Creatnewfile() {
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
      <div className="">
        <Button
          variant="primary"
          className="btn btn-primary btn-block"
          onClick={handleClickOpen}
        >
       <i className="fe fe-plus me-1"></i> Create New File
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">Add New File <button type="button" className="btn-close btn"  onClick={handleClose}>x</button></DialogTitle>
          
          <hr />
          <DialogContent>
            <Dropimg/>
          </DialogContent>
          <hr />
          <DialogActions>
            <Button  variant="success" className="me-1" onClick={handleClose}>
              Save changes
            </Button>
            <Button onClick={handleClose} className="me-1" variant="danger">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
 function Dropimg() {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    const files = acceptedFiles.map((file) => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));
  
    return (
      <section className="filemanager">
        <div {...getRootProps({ className: "dropzone" })} className="drops">
          <input {...getInputProps()} />
          <p className="alitext">
            Drag 'n' drop some files here, or click to select files
          </p>
          <h4 className="alitext">Files</h4>
          <ul>{files}</ul>
        </div>
      </section>
    );
  }