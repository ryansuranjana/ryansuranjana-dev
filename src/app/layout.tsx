import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/partials/Header";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryan Suranjana | About",
  description: "Web Developer, Mobile Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ReactQueryProvider>
        <body className={urbanist.className}>
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="dark"
          >
            <div className="w-full md:w-[60%] md:px-0 px-5 mx-auto ">
              <Header />

              {children}
            </div>
          </ThemeProvider>
        </body>
      </ReactQueryProvider>
    </html>
  );
}
