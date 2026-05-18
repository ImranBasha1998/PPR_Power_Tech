import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "PPR Electrical | Certified EA Grade Electrical Consultant",
  description: "Complete electrical turnkey solutions including design, installation, maintenance, and facility services since 2007.",
  keywords: ["Electrical Contractor Chennai", "Electrical Consultant Chennai", "Electrical Turnkey Contractor", "Hospital Electrical Contractor", "Commercial Electrical Services Chennai", "Facility Management Electrical Services", "Industrial Electrical Contractor", "Electrical Maintenance Company Chennai"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "PPR Electrical",
              "image": "https://pprelectrical.com/logo.png",
              "url": "https://pprelectrical.com",
              "telephone": "+919876543210",
              "email": "info@pprelectrical.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Engineering Park, OMR Road",
                "addressLocality": "Chennai",
                "addressRegion": "TN",
                "postalCode": "600097",
                "addressCountry": "IN"
              },
              "description": "Certified EA Grade Electrical Consultant & Facility Service Since 2007.",
              "priceRange": "$$"
            })
          }}
        />
      </body>
    </html>
  );
}
