'use client';

import {Layout, Menu} from "antd";
import Sider from "antd/es/layout/Sider";
import {Content} from "antd/es/layout/layout";
import {usePathname, useRouter} from "next/navigation";
import {TbBus, TbMap, TbUser, TbUsersGroup} from "react-icons/tb";


function getItem(label, key, icon, children) {
    return {key, icon, children, label,}
    s
}

let navItems = [
    getItem("Bus Management", 'buses', <TbBus/>),
    getItem("Bus Company Management", 'bus-companies', <TbUsersGroup/>, null),
    getItem("Travel Route Management", 'travel-routes', <TbMap/>, null),
    getItem("Staff Management", 'staff', <TbUser/>, [
        getItem("Staff List", '', null, null),
        getItem("Add New Staff", 'staff-register', null, null),
    ]),
]


export default function CustomOfficeLayout({children}) {
    const router = useRouter();
    const pathname = usePathname();
    const defaultSelectedMenu = pathname.length > 1 ? pathname.split("/") : [pathname];

    return <Layout style={{
        minHeight: "100%",
        minWidth: "100%",
        padding: 0,
        margin: 0,
        backgroundColor: "#FFFFFF",
    }}>
        <Sider width={"250px"}
               style={{
                   height: "100%",
                   backgroundColor: "#FFFFFF",
                   boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.04)",
               }}>
            <Menu
                mode="inline"
                defaultSelectedKeys={defaultSelectedMenu}
                defaultOpenKeys={defaultSelectedMenu}
                style={{height: '100vh'}}
                items={navItems}
                onClick={(info) =>
                    router.push(`/${info.keyPath.reverse().join("/")}`)
                }

            />
        </Sider>
        <Content>{children}</Content>
    </Layout>
}