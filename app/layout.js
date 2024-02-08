import { Inter } from "next/font/google";
import "./globals.css";
import { seo } from "@/configs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  ...seo,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-backgroundPrimary h-screen text-textPrimary`}
      >
        {children}
      </body>
    </html>
  );
}
