import React from "react";
import { Grid } from "@mui/material";

interface Props {
  children: React.ReactNodeArray;
}

export default function FeatureBlocksContainer({
  children,
}: Props): JSX.Element {
  return (
    <Grid container spacing={2}>
      {children}
    </Grid>
  );
}
