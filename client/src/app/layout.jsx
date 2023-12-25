import {Inter} from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarLayout from "@/components/layouts/NavbarLayout";
import FooterLayout from "@/components/layouts/FooterLayout";
import QueryWrapper from "@/components/layouts/QueryWrapper";

const inter = Inter({subsets: ['latin']})


export const metadata = {
    title: 'Myan San', description: 'Online Bus Ticket Ordering System For Myan San',
}

export default function RootLayout({children}) {
    return (<html lang="en">
    <body>
    <QueryWrapper>
        <NavbarLayout/>
        {children}
        <FooterLayout/>
    </QueryWrapper>
    </body>
    </html>)
}
