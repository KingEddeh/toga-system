import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import FileUpload from '../components/FileUpload';

export default function TogaReservation() {
  const [rows, setRows] = useState([]);

  const fetchCustomers = async (setRows) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/customer/customers");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setRows(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchCustomers(setRows)
  }, []);

  const columns = [
    { field: 'first_name', headerName: 'First Name', flex:1 },
    { field: 'middle_name', headerName: 'Middle Name', flex:1 },
    { field: 'last_name', headerName: 'Last Name', flex:1 },
    { field: 'suffix', headerName: 'Suffix', flex:1 },
    { field: 'email', headerName: 'Email', flex:2 },
    { field: 'phone', headerName: 'Phone', flex:2 },
    { field: 'gender', headerName: 'Gender', flex:1 },
    { field: 'height', headerName: 'Height', flex:1 },
    { field: 'length', headerName: 'Length', flex:1 },
    { field: 'size', headerName: 'Size', flex:1 },
    ];


  return (
    <Box width="100%">
      <h1>Toga Reservations</h1>
      <DataGrid 
        rows={rows} 
        columns={columns} 
        sx={{height: "500px", overflowX: true}}
      />
      <FileUpload onUploadSuccess={() => fetchCustomers(setRows)} />
    </Box>
  );
}
