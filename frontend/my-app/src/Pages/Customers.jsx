import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

import FileUpload from '../components/FileUpload'
import { getCustomers } from '../api';

export default function Customers() {
  const [dataRows, setDataRows] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getCustomers(setDataRows)
  }, [refresh]);

  const columns = [
    { field: 'first_name', headerName: 'First Name', flex:1 },
    { field: 'middle_name', headerName: 'Middle Name', flex:1 },
    { field: 'last_name', headerName: 'Last Name', flex:1 },
    { field: 'suffix', headerName: 'Suffix', flex:1 },
    { field: 'email', headerName: 'Email', flex:2 },
    { field: 'phone', headerName: 'Phone', flex:2 },
    { field: 'gender', headerName: 'Gender', flex:1 },
    { field: 'height', headerName: "Height (ft'in)", flex:1 },
    { field: 'shoulder_length', headerName: 'Shoulder Length (in)', flex:1 },
    { field: 'size', headerName: 'Size', flex:1 },
    ];


  return (
    <Box width="100%">
      <h1>Toga Reservations</h1>
      <DataGrid 
        rows={dataRows} 
        columns={columns} 
        sx={{height: "500px", overflowX: true}}
      />
      <FileUpload onUploadSuccess={() => setRefresh(prev => !prev)} />
    </Box>
  );
}
