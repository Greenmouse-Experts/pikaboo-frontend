"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AppPage } from "@/shared/components/layouts/Types";

const Custom404: AppPage = () => {
  return (
    <div>
      <Image
        src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687429795/pikaboo/Group_48061_m4vob9.png"
        alt="logo"
        width={200}
        height={100}
        className="w-32 lg:w-44 absolute top-6 left-6"
      />
      <div className="box h-screen grid place-content-center">
        <div className="py-8 lg:py-16">
          <Image
            src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1692027517/pikaboo/1_zE2qnVTJehut7B8P2aMn3A_1_kpjvvy.gif"
            alt="404"
            width={800}
            height={800}
            className="w-full lg:w-8/12 mx-auto"
          />
          <p className="text-xl lg:text-3xl text-center fw-600 mt-4">
            Page Not Found
          </p>
          <div className="text-center mt-6">
            <Link href="/">
              <button className="uppercase btn-primary px-12 py-2">
                Return home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom404;

Custom404.Layout = "Login";
