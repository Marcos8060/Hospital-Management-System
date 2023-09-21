import React from 'react'
import Layout from '@/components/Layout'
import { Container } from '@mui/material'

const Schedule = () => {
  return (
    <Container sx={{ py: 4 }} maxWidth="xl">
      <h1 className="text-3xl">Welcome to the Schedule Page</h1>
    </Container>
  )
}

Schedule.getLayout = (page) => (
  <Layout>{page}</Layout>
)

export default Schedule