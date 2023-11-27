import {Inter} from 'next/font/google'
import './globals.css'
import QueryWrapper from "@/app/lib/QueryWrapper";
import CustomNavbar from "@/components/layouts/CustomNavbar";
import CustomFooter from "@/components/layouts/CustomFooter";
import {Layout} from "antd";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Myan San',
  description: 'This application is for Myan San Travel Bus Ticket selling system.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <QueryWrapper>
      <Layout>
        <CustomNavbar/>
        {children}
        <CustomFooter/>
      </Layout>
    </QueryWrapper>
    </body>
    </html>
  )
}
