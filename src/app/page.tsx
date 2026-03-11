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

      <div id="hero" data-section="hero" className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
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
          containerClassName="py-12 sm:py-16 md:py-20 lg:py-24"
          logoClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          descriptionClassName="text-sm sm:text-base md:text-lg lg:text-xl"
          buttonContainerClassName="gap-3 sm:gap-4 md:gap-6 flex-col sm:flex-row"
          buttonClassName="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg w-full sm:w-auto"
          mediaWrapperClassName="mt-12 sm:mt-16 md:mt-20 lg:mt-24 max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto"
        />
      </div>

      <div id="services" data-section="services" className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
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
          containerClassName="py-12 sm:py-16 md:py-20 lg:py-24"
          cardTitleClassName="text-base sm:text-lg md:text-xl"
          cardDescriptionClassName="text-xs sm:text-sm md:text-base"
          gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        />
      </div>

      <div id="why-archisites" data-section="why-archisites" className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
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
          containerClassName="py-12 sm:py-16 md:py-20 lg:py-24"
          gridClassName="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16"
          leftColumnClassName="flex flex-col justify-center gap-6 sm:gap-8"
          rightColumnClassName="flex items-center justify-center mt-8 lg:mt-0"
          titleClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          descriptionClassName="text-sm sm:text-base md:text-lg mt-3 sm:mt-4 md:mt-6"
          metricsContainerClassName="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12"
          metricCardClassName="p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl"
          metricValueClassName="text-2xl sm:text-3xl md:text-4xl font-bold"
          metricTitleClassName="text-sm sm:text-base md:text-lg mt-2 sm:mt-3"
          mediaWrapperClassName="w-full h-auto rounded-lg sm:rounded-xl overflow-hidden"
        />
      </div>

      <div id="cta" data-section="cta" className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
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
          containerClassName="py-12 sm:py-16 md:py-20 lg:py-24"
          contentClassName="p-6 sm:p-8 md:p-12 lg:p-16 rounded-lg sm:rounded-xl md:rounded-2xl"
          titleClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          descriptionClassName="text-sm sm:text-base md:text-lg mt-3 sm:mt-4 md:mt-6"
          buttonContainerClassName="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6"
          buttonClassName="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg w-full sm:w-auto"
        />
      </div>

      <div id="contact" data-section="contact" className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
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
          containerClassName="py-12 sm:py-16 md:py-20 lg:py-24"
          contentClassName="p-6 sm:p-8 md:p-12 lg:p-16 rounded-lg sm:rounded-xl md:rounded-2xl"
          titleClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          descriptionClassName="text-sm sm:text-base md:text-lg mt-3 sm:mt-4 md:mt-6"
          buttonContainerClassName="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6"
          buttonClassName="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg w-full sm:w-auto"
        />
      </div>

      <div id="footer" data-section="footer" className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
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
          containerClassName="py-12 sm:py-16 md:py-20 lg:py-24"
          cardClassName="p-6 sm:p-8 md:p-12 rounded-lg sm:rounded-xl"
          columnsClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-10 md:mt-12"
          columnTitleClassName="text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-5 md:mb-6"
          columnItemClassName="text-xs sm:text-sm md:text-base mb-2 sm:mb-3"
          logoTextClassName="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 md:mb-10"
          copyrightTextClassName="text-xs sm:text-sm mt-6 sm:mt-8 md:mt-10 pt-6 sm:pt-8 md:pt-10 border-t"
        />
      </div>
    </ThemeProvider>
  );
}