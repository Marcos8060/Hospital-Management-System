import React from "react";
import Layout from "@/components/Layout";
import DashboardTable from "@/components/dashboard/dashboardTable";
import { FaWheelchair } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { Container, Grid } from "@mui/material";

const Dashboard = () => {
  return (
    <Layout>
      <Container maxWidth="xl">
        <Grid container spacing={1} className="my-8">
          <Grid item md={4} xs={12}>
            <section className="border-2 border-gray-300 rounded-xl px-4 py-3 h-20 flex items-center justify-center gap-4">
              <div>
                <FaWheelchair className="text-3xl" />
              </div>
              <div className="text-center text-sm">
                <p>Patients Waiting</p>
                <p className="text-[#02273D]">3</p>
              </div>
            </section>
          </Grid>
          <Grid item md={4} xs={12}>
            <section className="border-2 border-gray-300 rounded-xl px-4 py-3 h-20 flex items-center justify-center gap-4">
              <div>
                <FaClockRotateLeft className="text-2xl" />
              </div>
              <div className="text-center text-sm">
                <p>Doctors on duty</p>
                <p className="text-[#02273D]">34</p>
              </div>
            </section>
          </Grid>
          <Grid item md={4} xs={12}>
            <section className="border-2 border-gray-300 rounded-xl px-4 py-3 h-20">
              <div className="text-center">
                <p>Test Requests</p>
                <p className="text-[#02273D]">34</p>
              </div>
            </section>
          </Grid>
        </Grid>
        <DashboardTable />
      </Container>
    </Layout>
  );
};

Dashboard.getLayout = (page) => <Layout>{page}</Layout>;

export default Dashboard;
