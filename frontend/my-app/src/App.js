import SideBar from './components/SideBar';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Customers from './Pages/Customers.jsx'
import Dashboard from "./Pages/Dashboard.jsx";
import PointOfSale from "./Pages/PointOfSale.jsx";
import Grid from "@mui/material/Grid2";

function Layout() {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid
        size={2}
        sx={{
          height: "100vh",
          position: "sticky",
          top: 0,
          padding: 2,
          borderRight: 1, 
          borderColor: "divider", 
        }}
      > 
        <SideBar />
      </Grid>

      <Grid
        size={10}
        sx={{
          overflowY: "auto",
          padding: 3,
          height: "100vh",
        }}
      >
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="pointofsale" element={<PointOfSale />} />
        <Route path="customers" element={<Customers />} />

      </Route>
    </Routes>
  </BrowserRouter>
  );
}