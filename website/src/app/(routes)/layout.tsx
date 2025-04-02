import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";
import Header from "@/components/global-cmp/header";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "TableNex - Next-Gen React Table Component",
  description:
    "TableNex simplifies table creation in React with effortless setup, responsive design, and advanced features like fixed columns and expanded rows. Built with TypeScript for modern apps.",

  keywords: [
    "TableNex",
    "React table",
    "Next.js table",
    "TypeScript table",
    "responsive table",
    "customizable table",
  ],
  authors: [{ name: "Devyansh Yadav" }],
  openGraph: {
    title: "TableNex - Next-Gen React Table Component",
    description:
      "Discover TableNex: a powerful, customizable React table component with responsive design and TypeScript support. Perfect for dashboards and data grids.",
    url: "https://tablenex.devvarena.com",
    siteName: "TableNex",
    images: [
      {
        url: "/public/xbanner.jpg",
        width: 1200,
        height: 630,
        alt: "TableNex Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card (with your specified banner)
  twitter: {
    card: "summary_large_image",
    title: "TableNex - Next-Gen React Table Component",
    description:
      "TableNex: a sleek React table component with easy setup, customization, and responsiveness. Built for developers with TypeScript.",
    images: ["/public/xbanner.jpg"],
    creator: "@devyanshyadavv",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased min-h-screen w-full flex flex-col`}
      >
        <Header />
        <main className="*:max-w-6xl *:mx-auto *:w-full flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
