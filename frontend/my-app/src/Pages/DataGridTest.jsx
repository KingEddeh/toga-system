import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function App() {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    // Replace with your actual API endpoint
    fetch('http://127.0.0.1:8000/customer/customers')
      .then((response) => response.json())
      .then((data) => {setRows(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Runs once on component mount

  const columns = [
    { field: 'first_name', headerName: 'First Name', width: 150 },
    { field: 'middle_name', headerName: 'Middle Name', width: 150 },
    { field: 'last_name', headerName: 'Last Name', width: 150 },
    { field: 'suffix', headerName: 'Suffix', width: 100 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'gender', headerName: 'Gender', width: 100 },
    { field: 'height', headerName: 'Height', width: 100 },
    { field: 'length', headerName: 'Length', width: 100 },
    { field: 'size', headerName: 'Size', width: 100 },
    ];


  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
