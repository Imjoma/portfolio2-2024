import { Inter, Antonio } from "next/font/google";
import "./globals.css";
import { seo } from "@/configs";
import MouseFollower from "@/components/MouseFollower";

const inter = Inter({ subsets: ["latin"] });

const antonio = Antonio({
  subsets: ["latin"],
  variable: "--font-antonio",
});

export const metadata = {
  ...seo,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${antonio.variable}  bg-backgroundPrimary h-screen text-textPrimary`}
      >
        <MouseFollower>{children}</MouseFollower>
      </body>
    </html>
  );
}
