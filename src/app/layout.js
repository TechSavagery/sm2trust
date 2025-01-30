import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import favicon from "@/app/favicon.ico";
import LayoutChildren from "@/lib/layoutChildren";
import ProgressCircle from "@/components/ui/scrollCircle";
import { Analytics } from "@vercel/analytics/react";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--plus-jakarta-sans",
});

export const metadata = {
  title: "SM2 Trust",
  description: "Conservator & Trustee Services",
  icons: {
    icon: `${favicon.src}`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plus_jakarta_sans.variable}`}
        suppressHydrationWarning={true}
      >
        <div id="page-wapper" className="!relative ">
          <ProgressCircle />
          <LayoutChildren>{children}</LayoutChildren>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
