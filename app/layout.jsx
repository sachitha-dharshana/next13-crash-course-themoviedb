import "./globals.css";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`${montserrat.className} mx-32 my-16`}>
        {/* Navbar in root layout applies to entire app */}
        {/* <nav>
          <h2>PartyPopper🎉</h2>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Sign up</a>
          </li>
        </nav> */}
        {children}
      </body>
    </html>
  );
}
