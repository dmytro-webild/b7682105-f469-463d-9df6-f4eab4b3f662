"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumSizeLargeTitles"
        background="grid"
        cardStyle="subtle-shadow"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Philosophy",          id: "about"},
        {
          name: "Retreats",          id: "products"},
        {
          name: "Join Us",          id: "contact"},
      ]}
      brandName="Wild Hebridean"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Wild Hebridean Swimming"
      description="Join our intimate retreats across the Inner Hebrides and become part of a thriving community immersed in wild waters, island culture, and ancient heritage. From gentle dips to epic odysseys—every swim rewires your spirit."
      buttons={[
        {
          text: "Discover Your Retreat",          href: "#products"},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C76psWa1Ldnf5Slob3nL0eb9Zn/a-wide-cinematic-shot-of-a-cold-crystal--1776152603730-50fb3a7e.png"
      imageAlt="Immersive coldwater swimming in the Inner Hebrides"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="A Transformative Connection to Place"
      description="We believe that the wild waters of the Hebrides offer more than just a swim; they offer a mirror to your own strength and a gateway to ancient island heritage. Our retreats are designed to strip away the noise of modern life, allowing you to reconnect with the rhythms of the land and sea, alongside a community that cherishes the cold."
      bulletPoints={[
        {
          title: "Physical Challenge",          description: "From gentle introductory dips to challenging open-water odysseys."},
        {
          title: "Cultural Immersion",          description: "Engage with island history, heritage, and local communities."},
        {
          title: "Deep Belonging",          description: "Become part of a thriving, supportive community of wild swimmers."},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C76psWa1Ldnf5Slob3nL0eb9Zn/an-intimate-authentic-group-of-people-ga-1776152614017-cb47a56a.png"
      imageAlt="Community gathering after a cold water swim"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "1",          title: "Resilience",          descriptions: [
            "Build mental toughness and physical vitality."],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C76psWa1Ldnf5Slob3nL0eb9Zn/close-up-high-quality-shot-of-cold-water-1776152623238-eafe9009.png",          imageAlt: "Raw nature water texture"},
        {
          id: "2",          title: "Heritage",          descriptions: [
            "Explore the ancient stories written in island stone."],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C76psWa1Ldnf5Slob3nL0eb9Zn/minimalist-shot-of-ancient-island-stone--1776152633246-415e761a.png",          imageAlt: "Stone cairn in Scotland"},
        {
          id: "3",          title: "Connection",          descriptions: [
            "Forge deep friendships within our community."],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C76psWa1Ldnf5Slob3nL0eb9Zn/group-of-swimmers-walking-out-of-the-wat-1776152643226-d28c8573.png",          imageAlt: "Swimmers cheering each other"},
      ]}
      title="The Hebridean Philosophy"
      description="Everything we do is underpinned by the values of respect, resilience, and curiosity. Our retreats offer pathways for every individual journey."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          brand: "Entry",          name: "The Coastal Introduction",          price: "£850",          rating: 5,
          reviewCount: "12",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C76psWa1Ldnf5Slob3nL0eb9Zn/a-conceptual-high-end-photograph-of-a-tr-1776152653134-14b7c459.png"},
        {
          id: "p2",          brand: "Growth",          name: "Island Heritage Odyssey",          price: "£1,200",          rating: 5,
          reviewCount: "24",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C76psWa1Ldnf5Slob3nL0eb9Zn/abstract-but-clear-photograph-of-a-sunri-1776152661697-62d05ed4.png"},
        {
          id: "p3",          brand: "Deep",          name: "The Wild Water Immersion",          price: "£1,850",          rating: 5,
          reviewCount: "18",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C76psWa1Ldnf5Slob3nL0eb9Zn/a-beautiful-shot-of-a-path-winding-throu-1776152670551-d2f6fd56.png"},
        {
          id: "p4",          brand: "Apex",          name: "Advanced Hebridean Expedition",          price: "£2,400",          rating: 5,
          reviewCount: "9",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C76psWa1Ldnf5Slob3nL0eb9Zn/high-quality-focused-detail-of-a-warm-wo-1776152679611-d0f6140f.png"},
        {
          id: "p5",          brand: "Custom",          name: "Bespoke Island Discovery",          price: "£3,000",          rating: 5,
          reviewCount: "5",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C76psWa1Ldnf5Slob3nL0eb9Zn/wide-dramatic-shot-of-an-island-beach-at-1776152691165-4b57dc5e.png"},
        {
          id: "p6",          brand: "Group",          name: "Private Community Retreat",          price: "£5,000",          rating: 5,
          reviewCount: "15",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C76psWa1Ldnf5Slob3nL0eb9Zn/shot-of-fresh-local-island-food-or-produ-1776152698948-567f2c59.png"},
      ]}
      title="Our Retreat Offerings"
      description="Choose the transformative journey that calls to you."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
        animationType="blur-reveal"
        textboxLayout="split"
        useInvertedBackground={true}
        title="Community Voices"
        description="Hear what our swimmers have to say about their experience in the Hebrides."
        testimonials={[
            { id: "1", name: "Sarah J.", handle: "@sarahj", testimonial: "The Hebridean retreats are truly life-changing. Every swim feels like coming home to the ocean.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C76psWa1Ldnf5Slob3nL0eb9Zn/portrait-of-an-adventurous-woman-in-her--1776152708709-299ce948.png" }
        ]}
      />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "sparkles-gradient" }}
      text="Ready to take the plunge? Reach out to our team to find the perfect retreat experience or ask any questions about our upcoming journeys."
      buttons={[{ text: "Contact Us" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Wild Hebridean"
      columns={[
        {
          title: "Retreats",          items: [
            { label: "Introduction", href: "#products" },
            { label: "Odyssey", href: "#products" },
            { label: "Expeditions", href: "#products" },
          ],
        },
        {
          title: "Company",          items: [
            { label: "About Us", href: "#about" },
            { label: "Philosophy", href: "#features" },
            { label: "Contact", href: "#contact" },
          ],
        },
        {
          title: "Legal",          items: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
          ],
        },
      ]}
      copyrightText="© 2025 Wild Hebridean Swimming"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}