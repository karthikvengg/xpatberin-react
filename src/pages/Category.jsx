import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Box, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleGrid from '../components/ArticleGrid';
import { posts, categories } from '../data/posts';

export default function Category() {
  const { slug } = useParams();
  const cat = categories.find(c => c.slug === slug);
  const filtered = posts.filter(p => p.categorySlug === slug);
  return (
    <Box>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>{cat?.name || 'Category'}</Typography>
        <ArticleGrid posts={filtered} />
      </Container>
      <Footer />
    </Box>
  );
}
