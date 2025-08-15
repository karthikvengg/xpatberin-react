import React from "react";
import {
  Container,
  Box,
  Typography,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ArticleGrid from "../components/ArticleGrid";
import { posts, categories } from "../data/posts";
import testimonals from "../assets/testimonals.png";
import whychooseus from "../assets/whychooseus.png";

export default function Home() {
  const [tab, setTab] = React.useState(0);
  const selectedCategory = categories[tab]?.slug;
  const filtered = posts.filter(
    (p) => tab === 0 || p.categorySlug === selectedCategory
  );

  const faqs = [
    {
      question: "Will I be provided with accommodation in Germany?",
      answer:
        "Yes, furnished accommodation will be arranged before your arrival in Germany. However, the monthly rent and associated costs will be deducted from your gross salary at the end of each month.",
    },
    {
      question: "Is medical insurance provided?",
      answer:
        "Yes, you will be covered under Germany's statutory health insurance system, which ensures comprehensive medical care.",
    },
    {
      question: "What is the average salary for a registered nurse in Germany?",
      answer:
        "The salary varies based on experience, location, and healthcare facility. On average:\nBefore recognition: €2,600 – €2,900\nAfter recognition: €3,000 – €3,400",
    },
    {
      question:
        "What are the requirements to work as a Registered Nurse in Germany?",
      answer:
        "You must hold a valid nursing qualification from your home country, meet the German recognition requirements, and complete the necessary paperwork and examinations.",
    },
    {
      question: "Do I need to speak German to work as a nurse in Germany?",
      answer:
        "Yes. You must complete B2-level German training and pass all four modules (reading, listening, writing, and speaking) through an accredited exam provider (GOETHE, A-SD, TELC, or ECL).",
    },
    {
      question:
        "Are there opportunities for career advancement for nurses in Germany?",
      answer:
        "Yes, registered nurses can advance into specialized roles, leadership positions, or pursue further education in nursing-related fields.",
    },
    {
      question: "When can I bring my family to Germany?",
      answer:
        "After passing the Recognition Examination and securing accommodation, you can apply for a Family Reunification Visa. The process typically takes 6 months to 1 year.",
    },
    {
      question: "Does my spouse need to learn German?",
      answer:
        "Yes, spouses typically need to demonstrate basic German language skills (A1 level) to qualify for the Family Reunification Visa.",
    },
    {
      question: "Can I settle in Germany permanently as a Registered Nurse?",
      answer:
        "Yes. You can apply for Permanent Residency (PR) after residing in Germany for 3 years and meeting integration requirements.",
    },
    {
      question: "Can I acquire German citizenship?",
      answer:
        "Yes, after fulfilling the legal residency requirements and meeting language and integration criteria, you may apply for German citizenship.",
    },
    {
      question: "Are there cultural differences I should be aware of?",
      answer:
        "Yes. Some cultural differences include communication styles, working hours, and patient expectations. Understanding these will help you adapt to the German healthcare system.",
    },
    {
      question: "How do I apply for the program?",
      answer:
        "You can apply by submitting the required documentation through our official application process. Our team will guide you through each step.",
    },
    {
      question: "Can I join the program if I have a career gap?",
      answer:
        "Yes, but you must provide a valid reason and supporting documentation.",
    },
  ];

  return (
    <Box>
      <Header />
      <HeroSection post={posts[0]} />
      <Container maxWidth="lg" sx={{ mt: 7 }}>
        <img
          src={whychooseus}
          alt="Landing Page Banner"
          style={{ width: "100%", height: "auto", marginBottom: "2rem" }}
        />
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
          Services
        </Typography>
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          sx={{ mb: 2 }}
          variant="scrollable"
          scrollButtons="auto"
        ></Tabs>
        <ArticleGrid posts={filtered.slice(1)} />
        <img
          src={testimonals}
          alt="Landing Page Banner"
          style={{
            width: "100%",
            height: "auto",
            marginBottom: "2rem",
            marginTop: "4rem",
          }}
        />

        {/* FAQ Section */}
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, mt: 5 }}>
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontWeight: 600 }}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ whiteSpace: "pre-line" }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
      <Footer />
    </Box>
  );
}
