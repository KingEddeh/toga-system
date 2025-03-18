import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";



import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import PaymentIcon from "@mui/icons-material/Payment";
import TrashIcon from "@mui/icons-material/Delete";
import SpamIcon from "@mui/icons-material/Report";

const menuItems = [
  { text: "Dashboard", icon: <PaymentIcon />, path: "/" },
  { text: "POS", icon: <PaymentIcon />, path: "/pointofsale" },
  { text: "Customers", icon: <PaymentIcon />, path: "/customers" },
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
    <Box>

      <Stack
        component={Link}
        to="/"
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{
          textDecoration: "none",
          color: "inherit",
          cursor: "pointer",
          "&:hover": { backgroundColor: "transparent", color: "inherit" } // Prevent hover effects
        }}
      >
        <img src="/logo.jpg" alt="logo" width={100} />
        <Box flex={1}>
          <h1>COOP</h1>
          <p>Toga System</p>
        </Box>
      </Stack>
      <Divider sx={{ mt: 2 }} />
      
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
