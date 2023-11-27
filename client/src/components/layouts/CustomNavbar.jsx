'use client';

import {Header} from "antd/es/layout/layout";
import {Menu} from "antd";
import {useRouter} from "next/navigation";


export default function CustomNavbar() {


    let router = useRouter();

    return <Header
        style={{
            position: 'sticky',
            backgroundColor: "white",
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}
    >
        <h1 className={'text-2xl hover:cursor-grab'}
            onClick={() => router.push("/")}>
            Myan San
        </h1>

        <Menu
            mode="horizontal"
            defaultSelectedKeys={['1']}
            items={new Array(6).fill(null).map((_, index) => {
                const key = index + 1;
                return {
                    key,
                    label: `nav ${key}`,
                };
            })}
        />
    </Header>
}