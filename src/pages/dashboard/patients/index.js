import React from 'react'
import Layout from '@/components/Layout'
import { Container } from '@mui/material'
import PatientDataGrid from '@/components/dashboard/patients/patient-datagrid'

const Patients = () => {
  return (
    <Container sx={{py: 4}} maxWidth="xl">
        <h1 className="text-2xl">Welcome to the Patients Page</h1>
        <PatientDataGrid />
      </Container>
  )
}

Patients.getLayout = (page) =>(
  <Layout>{page}</Layout>
)

export default Patients