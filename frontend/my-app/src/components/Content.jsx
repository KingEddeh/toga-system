import { Box } from '@mui/material'
import React from 'react'
import CreateOrderForm from './CreateOrderForm.jsx'
import DataTest from './DataTest.jsx'

function Content() {
  return (
    <Box bgcolor="blue" flex={5}>
        <DataTest />
        <CreateOrderForm />
    </Box>
  )
}

export default Content