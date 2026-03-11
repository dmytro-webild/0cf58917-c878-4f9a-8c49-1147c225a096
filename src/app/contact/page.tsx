"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

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

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to start your next project? Let's create something amazing together."
          animationType="entrance-slide"
          buttons={[
            { text: "Get in Touch", href: "mailto:contact@archisites.com" },
            { text: "View Portfolio", href: "/" }
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={false}
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