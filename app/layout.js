import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({
  // variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const ovo = Ovo({
  // variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Portfolio - Nikhil Waghmare",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" foxified="">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
