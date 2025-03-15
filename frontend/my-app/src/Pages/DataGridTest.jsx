import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import FileUpload from '../components/FileUpload';

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

export default function App() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetchCustomers(setRows)
  }, []);

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
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
      <FileUpload onUploadSuccess={fetchCustomers} />
    </div>
  );
}
