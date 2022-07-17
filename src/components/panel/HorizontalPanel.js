import {
  Breadcrumbs,
  Button,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import classes from "./HorizontalPanel.module.scss";

const HorizontalPanel = ({ breadcrumbs, backButton = true, search = true }) => {
  const navigate = useNavigate();
  return (
    <div className={`${classes.container} flex`}>
      <div role="presentation">
        {backButton && (
          <IconButton color="secondary" onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
        )}
        <Breadcrumbs aria-label="breadcrumb">
          {breadcrumbs != null &&
            breadcrumbs?.linkArray.map((item) => (
              <Button
                key={item.name}
                component={RouterLink}
                color="secondary"
                to={item.link}
                size="small"
              >
                {item.name}
              </Button>
            ))}

          <Typography color="text.primary" variant="body1">
            {breadcrumbs?.activePage}
          </Typography>
        </Breadcrumbs>
      </div>
      {search && (
        <TextField
          label="Search"
          color="secondary"
          variant="outlined"
          size="small"
        />
      )}
    </div>
  );
};
export default HorizontalPanel;
