import React from "react";
import { Grid } from "@mui/material";
import ArticleCard from "./ArticleCard";

export default function ArticleGrid({ posts }) {
  return (
    <Grid container spacing={2}>
      {posts.map((p) => (
        <Grid key={p.id} item xs={12} sm={6} md={4}>
          <ArticleCard post={p} />
        </Grid>
      ))}
    </Grid>
  );
}
