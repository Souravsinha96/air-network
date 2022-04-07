import { useRef } from "react";
import {
  Dialog,
  DialogTitle,
  IconButton,
  Portal,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

export const Modal = ({ open, children, title, onClose }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const container = useRef(null);
  return (
    <Portal container={container.current}>
      <Dialog
        maxWidth="md"
        fullWidth
        fullScreen={matches}
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
          <IconButton
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
            aria-label="close"
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        {children}
      </Dialog>
    </Portal>
  );
};
