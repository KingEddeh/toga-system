import { Box } from "@mui/material"
import SideBar from './components/SideBar';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import CreateOrderForm from './Pages/CreateOrderForm.jsx'
import DataTest from './Pages/DataTest.jsx'
import CustomerForm from './Pages/CustomerForm.jsx'
import DataGridTest from './Pages/DataGridTest.jsx'

function Layout() {
  return (
    <Box sx={{ height: "100vh", width:"100%", display: "flex" }}>
      {/* Sidebar with fixed width */}
      <Box sx={{ width: 250, flexShrink: 0 }}>
        <SideBar />
      </Box>

      {/* Main Content (Outlet) fills remaining space */}
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
}


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CreateOrderForm />} />
        <Route path="datatest" element={<DataTest />} />
        <Route path="customerform" element={<CustomerForm />} />
        <Route path="datagridtest" element={<DataGridTest />} />

      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
