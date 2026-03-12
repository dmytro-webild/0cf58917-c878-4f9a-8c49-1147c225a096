"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ContactForm from '@/components/form/ContactForm';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Mail } from 'lucide-react';

export default function ContactPage() {
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
            { name: "Contact", id: "/contact" }
          ]}
          button={{ text: "Schedule a Call", href: "#contact" }}
          animateOnLoad={true}
        />
      </div>

      <div id="contact-form" data-section="contact-form" className="min-h-screen flex items-center justify-center py-20 px-4">
        <ContactForm
          title="Get in Touch"
          description="Send us a message and we'll get back to you as soon as possible."
          tag="Contact Us"
          tagIcon={Mail}
          inputPlaceholder="your@email.com"
          buttonText="Send Message"
          termsText="We'll respond to your email within 24 hours."
          centered={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Archisites"
          columns={[
            {
              title: "Navigation",              items: [
                { label: "Home", href: "/" },
                { label: "Services", href: "#services" },
                { label: "Contact", href: "/contact" }
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