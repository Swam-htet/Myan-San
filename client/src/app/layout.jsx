import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarLayout from "@/components/layouts/NavbarLayout";
import FooterLayout from "@/components/layouts/FooterLayout";
import QueryWrapper from "@/components/layouts/QueryWrapper";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Myan San",
  description: "Online Bus Ticket Ordering System For Myan San",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        <QueryWrapper>
          <NavbarLayout />
          {children}
          <FooterLayout />
        </QueryWrapper>
      </body>
    </html>
  );
}
