import { Paper } from '@mui/material'
import React from 'react'
import FileUpload from '../components/FileUpload'

function PointOfSale() {
  return (
    <Paper sx={{padding: 2}}>
      <h1>Point of Sale</h1>

      <FileUpload />
    </Paper>
  )
}

export default PointOfSale