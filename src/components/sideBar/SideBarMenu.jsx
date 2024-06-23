import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ChatIcon from '@mui/icons-material/Chat';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import { Logo } from "./Logo.jsx";
import { Typography } from '@mui/material';

const CustomListItemButton = styled(ListItemButton)(() => ({
  borderRadius: '12px', 
  marginRight : '28px',
  '&.Mui-selected': {
    backgroundColor: '#5d87ff',
    color: 'white',
    '&:hover': {
      backgroundColor: '#5d87ff',
    },
    '.MuiListItemIcon-root': {
      color: 'white',
    },
  },
}));

export default function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <Logo/>

      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginLeft: '15px' , marginTop: '15px' }}>
        
      <Typography variant="h7" sx={{ fontWeight: '600', marginLeft: '15px'}}>HOME</Typography>
        <List component="nav" aria-label="main mailbox folders">
          <CustomListItemButton
          component={Link} to="/"
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="HOME"/>
            <Chip label="6" color="primary" size="small" sx={{ ml: 'auto' }} />
          </CustomListItemButton>


          <CustomListItemButton
          component={Link} to="/join"
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="JOIN" />
          </CustomListItemButton>


          <CustomListItemButton
          component={Link} to="/search"
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Search" />
          </CustomListItemButton>
        </List>
        
        <Typography variant="h7" sx={{ fontWeight: '600' ,marginLeft: '15px'}}>APP</Typography>
        <List component="nav" aria-label="secondary mailbox folders">
          <CustomListItemButton
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </CustomListItemButton>
          <CustomListItemButton
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
          >
            <ListItemIcon>
              <CalendarTodayIcon />
            </ListItemIcon>
            <ListItemText primary="Calendar" />
          </CustomListItemButton>
        </List>
        <Typography variant="h7" sx={{ fontWeight: '600', marginLeft: '15px'}}>OTHERS</Typography>
        <List component="nav" aria-label="other mailbox folders">
          <CustomListItemButton
            selected={selectedIndex === 5}
            onClick={(event) => handleListItemClick(event, 5)}
          >
            <ListItemIcon>
              <CircleOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Menu Level" />
          </CustomListItemButton>
          <CustomListItemButton
            selected={selectedIndex === 6}
            onClick={(event) => handleListItemClick(event, 6)}
          >
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Chip" />
          </CustomListItemButton>
          <CustomListItemButton
            selected={selectedIndex === 7}
            onClick={(event) => handleListItemClick(event, 7)}
          >
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="External Link" />
          </CustomListItemButton>
        </List>
      </Box>
    </>
  );
}
