import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import OrderIcon from "@mui/icons-material/Receipt";
import PaymentIcon from "@mui/icons-material/Payment";
import InventoryIcon from "@mui/icons-material/Inventory";
import RentalIcon from "@mui/icons-material/Assignment";
import UniversityIcon from "@mui/icons-material/School";
import TrashIcon from "@mui/icons-material/Delete";
import SpamIcon from "@mui/icons-material/Report";

const menuItems = [
  { text: "Reservations", icon: <PointOfSaleIcon />, path: "/reservations" },
  { text: "Point of Sale", icon: <PointOfSaleIcon />, path: "/datatest" },
  { text: "Orders", icon: <OrderIcon />, path: "/customerform" },
  { text: "Payment", icon: <PaymentIcon />, path: "/datagridtest" },
  { text: "Inventory", icon: <InventoryIcon />, path: "/inventory" },
  { text: "Rental", icon: <RentalIcon />, path: "/rental" },
  { text: "University Info", icon: <UniversityIcon />, path: "/university" },
];

const secondaryItems = [
  { text: "Trash", icon: <TrashIcon />, path: "/trash" },
  { text: "Test", icon: <SpamIcon />, path: "/test" },
];

export default function SideBar() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Box
      sx={{
        width: "250",
        height: "100vh",
        bgcolor: "background.paper",
        p: 2,
        boxShadow: 3,
        flex: 1,
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <img src="/logo.jpg" alt="logo" width={100} />
        <Grid item flex={1}>
          <h1>COOP</h1>
          <p>Toga System</p>
        </Grid>
      </Stack>
      <Divider sx={{ mt: 2 }} />
      
      {/* Main Menu */}
      <List component="nav">
        {menuItems.map((item, index) => (
          <ListItemButton
            key={index}
            selected={selectedIndex === index}
            onClick={() => handleListItemClick(index)}
            component={NavLink}
            to={item.path}
            sx={{
              "&.active": { bgcolor: "primary.light", color: "primary.contrastText" },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>

      <Divider />

      {/* Secondary Menu */}
      <List component="nav">
        {secondaryItems.map((item, index) => (
          <ListItemButton
            key={index + menuItems.length}
            selected={selectedIndex === index + menuItems.length}
            onClick={() => handleListItemClick(index + menuItems.length)}
            component={NavLink}
            to={item.path}
            sx={{
              "&.active": { bgcolor: "secondary.light", color: "secondary.contrastText" },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
