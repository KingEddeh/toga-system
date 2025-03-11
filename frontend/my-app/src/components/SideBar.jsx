import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import OrderIcon from '@mui/icons-material/Receipt';
import PaymentIcon from '@mui/icons-material/Payment';
import InventoryIcon from '@mui/icons-material/Inventory';
import RentalIcon from '@mui/icons-material/Assignment';
import UniversityIcon from '@mui/icons-material/School';
import TrashIcon from '@mui/icons-material/Delete';
import SpamIcon from '@mui/icons-material/Report';
import { Grid2, Stack } from '@mui/material';

export default function SideBar() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: '100%', height: '100vh', bgcolor: 'background.paper', p: 2, boxShadow: 3, flex: 1 }}>
      <Stack direction='row' spacing={2} alignItems="center">
        <img src="/logo.jpg" alt="logo" width={100} />
        <Grid2 item flex={1}>
          <h1>COOP</h1>
          <p>Toga System</p>
        </Grid2>
      </Stack>
      <Divider sx={{ mt: 2 }} />
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <PointOfSaleIcon />
          </ListItemIcon>
          <ListItemText primary="Point of Sale" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <OrderIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="Payment" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <InventoryIcon />
          </ListItemIcon>
          <ListItemText primary="Inventory" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemIcon>
            <RentalIcon />
          </ListItemIcon>
          <ListItemText primary="Rental" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemIcon>
            <UniversityIcon />
          </ListItemIcon>
          <ListItemText primary="University info" />
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItemButton
          selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)}
        >
          <ListItemIcon>
            <TrashIcon />
          </ListItemIcon>
          <ListItemText primary="Trash" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 7}
          onClick={(event) => handleListItemClick(event, 7)}
        >
          <ListItemIcon>
            <SpamIcon />
          </ListItemIcon>
          <ListItemText primary="Spam" />
        </ListItemButton>
      </List>
    </Box>
  );
}