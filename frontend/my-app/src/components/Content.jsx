import { Box } from '@mui/material'
import React from 'react'
import CreateOrderForm from './CreateOrderForm.jsx'

function Content() {
  return (
    <Box bgcolor="blue" flex={5}>
        <CreateOrderForm />
    </Box>
  )
}

export default Content