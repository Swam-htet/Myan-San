"use client";

import LoginForm from "@/components/login/LoginForm";
import useStaffLogin from "@/libs/hooks/useStaffLogin";
import { useEffect } from "react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  const StaffLoginMutation = useStaffLogin();

  const handleSubmit = (body) => {
    StaffLoginMutation.mutate(body);
  };

  useEffect(() => {
    if (StaffLoginMutation.isSuccess && StaffLoginMutation.data) {
      toast.success("Staff Login Success");
      setCookie("auth-token", StaffLoginMutation.data.token);
      setCookie("role", StaffLoginMutation.data.role);

      router.push("/staff");
    }
    if (StaffLoginMutation.isError) {
      toast.error("Staff Login Failure, please try again");
    }
  }, [
    StaffLoginMutation.data,
    StaffLoginMutation.isSuccess,
    StaffLoginMutation.isError,
  ]);

  return (
    <main className={"container d-flex my-3"} style={{ minHeight: "50vh" }}>
      <div className={"col-12 col-md-5 bg-light p-4 rounded"}>
        <h1 className={"text-start"}>Login</h1>

        <LoginForm handleSubmit={handleSubmit} />
      </div>
      <div className={"col-7 d-md-block d-none"}>
        <Image
          src={"/slideShowImages/slidShow-2.jpg"}
          alt={"testing"}
          width={"700"}
          height={"680"}
        />
      </div>
    </main>
  );
}
