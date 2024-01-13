"use client";

import { usePathname, useRouter } from "next/navigation";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { useEffect, useState } from "react";
import { getCookie, hasCookie } from "cookies-next";
import { Button } from "react-bootstrap";

let initial = [
  {
    title: "Bus Management",
    link: "/buses",
  },
  {
    title: "Ticket Management",
    link: "/tickets",
  },
  {
    title: "Route Management",
    link: "/routes",
  },
  {
    title: "General Management",
    link: "/general",
  },
  {
    title: "Feedback Management",
    link: "/feedbacks",
  },
  {
    title: "Settings",
    link: "/settings",
  },
];
export default function DashboardLayout({ children }) {
  let router = useRouter();

  let [active, setActive] = useState(0);
  const [role, setRole] = useState();
  const pathname = usePathname();
  let [permossion, setPermission] = useState(false);

  let [list, setList] = useState(initial);

  useEffect(() => {
    if (hasCookie("role") && getCookie("role") == "admin") {
      setRole(true);
      setList([{ title: "Staff Management", link: "/staff" }, ...initial]);
    } else {
      setRole(false);
      setList(initial);
    }
  }, [pathname]);

  const onActiveChangeHandler = (index) => {
    setActive(index);
  };

  useEffect(() => {
    let auth = getCookie("auth-token");
    console.log("Token: ", auth);
    if (auth) {
      setPermission(true);
    } else {
      router.push("/login");
    }
  }, []);

  return (
    <>
      {permossion && (
        <Tab.Container>
          <div className={"row w-100"}>
            <div className={"col-3"}>
              <Nav className="flex-column px-3 mt-5">
                {list.map((item, index) => {
                  return (
                    <Button
                      variant={index === active ? "primary" : "light"}
                      key={index}
                      className={`mb-2`}
                      onClick={(e) => {
                        router.push(item.link);
                        onActiveChangeHandler(index);
                      }}>
                      {item.title}
                    </Button>
                  );
                })}
              </Nav>
            </div>

            <div className={"col-9"}>
              <Tab.Content className={"min-vh-100"}>{children}</Tab.Content>
            </div>
          </div>
        </Tab.Container>
      )}
    </>
  );
}
