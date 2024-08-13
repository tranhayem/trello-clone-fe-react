import NotificationsIcon from "@mui/icons-material/Notifications";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import React from "react";

function Notification() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Tooltip title="Cài đặt tài khoản">
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? "notification" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <NotificationsIcon />
        </IconButton>
      </Tooltip>
      <Menu
        id="notification"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Typography>Thông báo</Typography>
      </Menu>
    </Box>
  );
}

export default Notification;
