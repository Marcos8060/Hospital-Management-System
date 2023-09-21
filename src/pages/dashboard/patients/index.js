import React from 'react'
import Layout from '@/components/Layout'
import { Container } from '@mui/material'

const Patients = () => {
  return (
    <Container sx={{py: 4}} maxWidth="xl">
        <h1 className="text-3xl">Welcome to the Patients Page</h1>
      </Container>
  )
}

Patients.getLayout = (page) =>(
  <Layout>{page}</Layout>
)

export default Patients