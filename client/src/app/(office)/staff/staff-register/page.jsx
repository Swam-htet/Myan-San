'use client';

import React from "react";
import CustomOfficeLayout from "@/components/layouts/CustomOfficeLayout";
import StaffRegisterForm from "@/components/staff/StaffRegisterForm";


const StaffRegistrationPage = () => {
   
    return (
        <CustomOfficeLayout>
            <main className="min-h-screen w-full">
                <div className={'flex justify-center py-10'}>
                    <StaffRegisterForm/>
                </div>
            </main>
        </CustomOfficeLayout>

    );
};


export default StaffRegistrationPage;