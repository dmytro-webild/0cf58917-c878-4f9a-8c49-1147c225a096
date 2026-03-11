"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Palette, Zap, TrendingUp } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="small"
      sizing="mediumSizeLargeTitles"
      background="floatingGradient"
      cardStyle="solid"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Archisites"
          navItems={[
            { name: "Services", id: "services" },
            { name: "About", id: "why-archisites" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Schedule a Call", href: "#contact" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboardSplit
          logoText="Archisites"
          description="Modern Websites Built for Growth. Archisites designs fast, modern websites that help businesses build credibility and attract more customers online."
          background={{ variant: "plain" }}
          buttons={[
            { text: "Schedule a Call", href: "#contact" },
            { text: "Contact Us", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          layoutOrder="default"
          mediaAnimation="opacity"
          frameStyle="card"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureHoverPattern
          title="What We Do"
          description="Our core services designed to elevate your online presence with modern, performance-driven solutions."
          features={[
            {
              icon: Palette,
              title: "Website Design",              description: "Clean, modern website designs focused on clarity and user experience."
            },
            {
              icon: Zap,
              title: "Website Development",              description: "Fast, responsive websites built with performance and scalability in mind."
            },
            {
              icon: TrendingUp,
              title: "Website Optimization",              description: "Improve speed, SEO, and user experience to help your site perform better."
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="why-archisites" data-section="why-archisites">
        <MetricSplitMediaAbout
          tag="Our Philosophy"
          title="Built with Purpose"
          description="At Archisites, websites are built like architecture — structured, intentional, and designed to perform. Every project focuses on speed, clarity, and modern design that helps businesses grow online."
          metrics={[
            { value: "Modern Design", title: "Timeless Aesthetics" },
            { value: "Performance Focused", title: "Speed & Efficiency" }
          ]}
          useInvertedBackground={false}
          mediaAnimation="opacity"
          metricsAnimation="opacity"
        />
      </div>

      <div id="cta" data-section="cta">
        <ContactCTA
          tag="Ready to Grow"
          title="Ready for a Better Website?"
          description="Let's build something exceptional together. Our team is ready to create a website that drives results."
          buttons={[
            { text: "Schedule a Call", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Get in Touch"
          title="Tell us about your project and we'll get back to you shortly."
          description="Fill out the form below to schedule a consultation with our team."
          buttons={[
            { text: "Send Message", href: "#" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Archisites"
          columns={[
            {
              title: "Navigation",              items: [
                { label: "Home", href: "#" },
                { label: "Services", href: "#services" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About", href: "#why-archisites" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 Archisites. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}