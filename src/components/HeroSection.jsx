import React from "react";
import { Box, Container, Typography, Chip, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function HeroSection({ post }) {
  if (!post) return null;
  return (
    <Box sx={{ position: "relative", bgcolor: "#000", color: "#fff" }}>
      <Box
        sx={{
          height: { xs: 360, md: 480 },
          backgroundImage: `url(${post.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.75)",
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", mt: -18 }}>
        <Box sx={{ p: 3, bgcolor: "rgba(0,0,0,0.6)", borderRadius: 2 }}>
          <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
            <Typography variant="caption" sx={{ opacity: 0.9 }}>
              {post.date}
            </Typography>
          </Stack>
          <Typography
            component={RouterLink}
            to={`/article/${post.slug}`}
            variant="h3"
            sx={{ color: "#fff", textDecoration: "none" }}
          >
            {post.title}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, opacity: 0.95 }}>
            {post.excerpt}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
