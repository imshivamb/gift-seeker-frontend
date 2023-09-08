import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MyContextProvider } from "@/app/context";
import Footer from "@/app/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/app/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gift Seekers",
  description:
    "Your one stop destination to find all kinds of gifts on the internet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MyContextProvider>
      <ClerkProvider
        publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      >
        <html lang="en">
          <head>
            <link rel="icon" href="/favicon.ico" sizes="any" />
          </head>
          <body className={`bg-white ${inter.className}`}>
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </ClerkProvider>
    </MyContextProvider>
  );
}
