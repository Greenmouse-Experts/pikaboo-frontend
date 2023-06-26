import React from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import Image from "next/image";
import Button from "@/shared/components/Ui/Button";

const AdminSettingsPage: AppPage = () => {
  return (
    <>
      <div>
        <div className="lg:w-8/12 rounded-lg dash-shade p-6 mx-auto">
          <div>
            <p className="fw-600 text-xl border-b">Super Admin Settings</p>
          </div>
          <div className="mt-6 grid grid-cols-4 gap-x-6">
            <div>
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687358577/pikaboo/Rectangle_19531_ews6zl.png"
                alt="profile"
                width={150}
                height={150}
                className="circle border w-36 h-36"
              />
              <div className="w-10/12">
              <p className="fw-600 mt-4 text-center text-primary">Pikaboo</p>
              <p className="fw-600 mt-1 text-center">Super Admin</p>
              </div>
            </div>
            <div className="col-span-3 mt-12">
                <div className="grid  lg:grid-cols-2 gap-6">
                    <div>
                        <p>First Name:</p>
                        <p className="border-b mt-3">Super</p>
                    </div>
                    <div>
                        <p>Last Name:</p>
                        <p className="border-b mt-3">Admin</p>
                    </div>
                    <div>
                        <p>Email:</p>
                        <p className="border-b mt-3">admin@pikabo.com</p>
                    </div>
                    <div>
                        <p>Phone:</p>
                        <p className="border-b mt-3">+2348012345678</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="flex justify-end gap-x-6 mt-12">
            <Button title="Edit Profile" altClassName="px-6 py-2 border border-green-600 text-primary fw-500 rounded-lg"/>
            <Button title="Change Password" altClassName="px-6 py-2 border border-green-600 bg-primary text-white fw-500 rounded-lg"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSettingsPage;
AdminSettingsPage.Layout = "Dashboard";
