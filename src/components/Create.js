import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const Create = () => {
  const [open, setOpen] = useState(false);
  const [caption, setCaption] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission logic
    console.log("Photo:", photo);
    console.log("Caption:", caption);
    handleClose();
  };

  return (
    <div>
      <li className="createButton" onClick={handleClickOpen}>
        <FontAwesomeIcon icon={faSquarePlus} />{" "}
        <span className="navText">Create</span>
      </li>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create new post</DialogTitle>
        <DialogContent>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="icon-button-file"
            type="file"
            onChange={handlePhotoChange}
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
            {photo && <span>{photo.name}</span>}
          </label>
          <TextField
            autoFocus
            margin="dense"
            id="caption"
            label="Caption"
            type="text"
            fullWidth
            variant="outlined"
            value={caption}
            onChange={handleCaptionChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Create;
