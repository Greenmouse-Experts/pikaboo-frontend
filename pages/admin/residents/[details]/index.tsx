import React from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import { TbArrowBackUp } from "react-icons/tb";
import Image from "next/image";
import Button from "@/shared/components/Ui/Button";
import Link from "next/link";

const HomeResidentsDetails: AppPage = () => {
  return (
    <>
    <div className="mb-2">
      <Link href='/admin/residents/' className="flex items-center gap-x-1 fw-500 text-gray-500"><TbArrowBackUp/>Back</Link>
    </div>
      <div className="grid lg:grid-cols-2 lg:gap-16">
        <div className="row-span-2 dash-shade p-8 rounded-xl">
          <div>
            <Image
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687532316/pikaboo/davido_w1xizx.png"
              alt="profile"
              width={300}
              height={300}
              className="mx-auto w-[300px] h-[300px] rounded-xl"
            />
          </div>
          <div className="flex gap-x-12 mt-12">
            <p className="w-4/12 fw-600">Resident Profile</p>
            <div className="w-8/12">
              <p className="fw-500">Mr Osagbovhon Aisosa</p>
              <p>23 oseretin close, off wasota junction, ugbowo, Benin.</p>
            </div>
          </div>
          <div className="mt-6">
            <div className="border-b flex pb-2 ">
              <p className="w-4/12 fw-500">Phone</p>
              <div>
                <p>+2348012345678</p>
                <p>+2348012345678</p>
              </div>
            </div>
            <div className="border-b flex py-2 ">
              <p className="w-4/12 fw-500">Email</p>
              <div>
                <p>greenmouse@gmail.com</p>
              </div>
            </div>
            <div className="border-b flex py-2 ">
              <p className="w-4/12 fw-500">Type of Building</p>
              <div>
                <p>Bungalow</p>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <Button title="Flag Resident" altClassName="lg:w-[200px] bg-red-500 text-white py-2 rounded-lg fw-500"/>
            </div>
          </div>
        </div>
        <div className="dash-shade p-8 rounded-xl">
          <div className="grid lg:grid-cols-2">
            <div className="border-r p-4">
              <p className="fw-600 border-b">Wallet Amount</p>
              <p className="fw-600 text-3xl mt-2 text-green-600">₦5,000</p>
            </div>
            <div className="p-4">
              <p className="fw-600 border-b">Monthly Bill</p>
              <p className="fw-600 text-3xl mt-2">₦3,450</p>
            </div>
            <div className="border-r p-4">
              <p className="fw-600 border-b">Bin Amount Paid</p>
              <p className="fw-600 text-3xl mt-2 text-green-600">₦15,000</p>
            </div>
            <div className="p-4">
              <p className="fw-600 border-b">Monthly Bill</p>
              <p className="fw-600 text-3xl mt-2">₦3,450</p>
            </div>
          </div>
        </div>
        <div className="dash-shade p-8 rounded-xl">
          <p className="fw-600 lg:fs-700">More Information</p>
          <div className="mt-6">
            <div className="flex border-b pb-2 lg:pb-3">
              <p className="w-4/12 fw-500">Zone:</p>
              <p>Ugbowo Central</p>
            </div>
            <div className="flex border-b pt-3 pb-2 lg:py-4">
              <p className="w-4/12 fw-500">Status:</p>
              <p className="bg-green-100 px-5 rounded-md fw-500 text-green-600 border border-green-600">Active</p>
            </div>
            <div className="flex border-b pt-3 pb-2 lg:py-4">
              <p className="w-4/12 fw-500">Property Image:</p>
              <div className="flex gap-x-4">
                <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1687186431/pikaboo/Group_46819_1_1_ahbl3h.png' alt='property' width={100} height={100} className="w-24 rounded-lg shades"/>
                <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1687187357/pikaboo/Group_46789_ltvmoq.png' alt='property' width={100} height={100} className="w-24 rounded-lg shades" />
              </div>
            </div>
            <div className="flex border-b pb-2 pt-3 lg:py-4">
              <p className="w-4/12 fw-500">Registered on:</p>
              <p>23 - Mar - 2023</p>
            </div>
            <div className="flex border-b pb-2 pt-3 lg:py-4">
              <p className="w-4/12 fw-500">Facility Type:</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeResidentsDetails;
HomeResidentsDetails.Layout = "Dashboard";
