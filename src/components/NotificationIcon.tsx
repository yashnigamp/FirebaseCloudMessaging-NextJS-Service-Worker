import React, { useState, useRef } from 'react';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationList from './NotificationList';

interface NotificationIconProps {
  // Add any additional props you might need
}

const NotificationIcon: React.FC<NotificationIconProps> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const anchorEl = useRef<HTMLButtonElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Badge
        badgeContent={4}
        color="primary"
        onClick={handleClick}
        ref={anchorEl}
      >
        <NotificationsIcon />
      </Badge>
      <NotificationList
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl.current}
      />
    </>
  );
};

export default NotificationIcon;