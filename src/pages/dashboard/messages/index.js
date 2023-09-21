import React from "react";
import Layout from "@/components/Layout";
import { Container } from "@mui/material";

const Messages = () => {
  return (
    <Container sx={{ py: 4 }} maxWidth="xl">
      <h1 className="text-3xl">Welcome to the Messages Page</h1>
    </Container>
  );
};

Messages.getLayout = (page) => <Layout>{page}</Layout>;

export default Messages;
