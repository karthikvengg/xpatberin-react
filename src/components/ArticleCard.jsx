import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function ArticleCard({ post }) {
  return (
    <Card elevation={0} sx={{ border: "1px solid #eee", height: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={post.image}
          alt={post.title}
        />
        <CardContent>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ mb: 1 }}
          ></Stack>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontWeight: 700 }}
          >
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.excerpt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
