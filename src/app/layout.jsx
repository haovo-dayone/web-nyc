import { Inter } from "next/font/google";
import "@/common/styles/index.scss";
import "react-multi-carousel/lib/styles.css";
import Footer from "@/common/components/Footer";
import NYCNavbar from "@/common/components/Navbar";
// import "antd/dist/antd.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MLB Việt Nam Official website",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/80b085e3c2.js"
          crossOrigin="anonymous"
        ></script>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://file.hstatic.net/200000642007/file/logo_new-01_48c56613dd71432d8ecca9005009c60c.png"
        ></link>
      </head>
      <body className={inter.className}>
        <NYCNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
