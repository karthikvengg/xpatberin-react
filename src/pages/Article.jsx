import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { Container, Box, Typography, Breadcrumbs, Link } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { posts } from '../data/posts';

export default function Article() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug) || posts[0];

  return (
    <Box>
      <Header />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Breadcrumbs sx={{ mb: 2 }}>
          <Link component={RouterLink} to="/">Home</Link>
          <Link component={RouterLink} to={`/category/${post.categorySlug}`}>{post.category}</Link>
          <Typography color="text.primary">{post.title}</Typography>
        </Breadcrumbs>
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>{post.title}</Typography>
        <img src={post.image} alt={post.title} style={{ width: '100%', borderRadius: 12 }} />
        <Typography variant="body1" sx={{ mt: 2 }}>
          {post.content}
        </Typography>
      </Container>
      <Footer />
    </Box>
  );
}
