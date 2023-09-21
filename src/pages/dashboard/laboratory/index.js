import React from "react";
import Layout from "@/components/Layout";
import { Container } from "@mui/material";

const Laboratory = () => {
  return (
      <Container sx={{py: 4}} maxWidth="xl">
        <h1 className="text-3xl">Welcome to the Laboratory Page</h1>
      </Container>
  );
};

Laboratory.getLayout = (page) => <Layout>{page}</Layout>;

export default Laboratory;
