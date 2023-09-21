import React from 'react'
import Layout from '@/components/Layout'
import { Container } from '@mui/material'

const Pharmacy = () => {
  return (
    <Container sx={{ py: 4 }} maxWidth="xl">
      <h1 className="text-3xl">Welcome to the Pharmacy Page</h1>
    </Container>
  )
}

Pharmacy.getLayout = (page) =>(
  <Layout>{page}</Layout>
)

export default Pharmacy