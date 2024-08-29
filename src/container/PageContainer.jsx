import React from "react";
import Container from "@mui/material/Container";

export default function PageContainer({ children }) {
  return (
    <Container maxWidth="xl">
      <div>{children}</div>
    </Container>
  );
}
