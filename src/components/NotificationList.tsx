import React from 'react';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface NotificationListProps {
    open: boolean;
    onClose: () => void;
    anchorEl: HTMLElement | null; // Add anchorEl prop to position the Popover
  }
  
  const NotificationList: React.FC<NotificationListProps> = ({
    open,
    onClose,
    anchorEl,
  }) => {
    const notifications: Notification[] = [
      { id: 1, title: 'Notification 1', message: 'This is notification 1' },
      { id: 2, title: 'Notification 2', message: 'This is notification 2' },
      // Add more notifications as needed
    ];
  
    return (
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <List>
          {notifications.map((notification) => (
            <ListItem key={notification.id} button onClick={onClose}>
              <ListItemText
                primary={notification.title}
                secondary={notification.message}
              />
            </ListItem>
          ))}
        </List>
      </Popover>
    );
  };
  
  export default NotificationList;