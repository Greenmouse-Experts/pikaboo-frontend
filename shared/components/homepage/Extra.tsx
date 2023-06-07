import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ImArrowUpRight2 } from 'react-icons/im'

const ExtraSection = () => {
  return (
    <>
      <div className="section pt-0 lg:pt-24">
        <div className="box">
          <div className="lg:w-10/12 mx-auto lg:flex items-center flex-row-reverse">
            <div className="lg:w-6/12">
              <Image
                src="https://res.cloudinary.com/dic7regoe/image/upload/v1685782570/sinechat/Vector_1_qiltez.png"
                alt="extra"
                width={600}
                height={600}
                className="w-8/12 mx-auto"
              />
            </div>
            <div className="lg:w-6/12 text-center lg:text-left">
                <p className="lg:text-5xl text-2xl mb-6">Well documented and easy to use APIs for developers</p>
                <div className="flex items-center justify-center lg:justify-left">
                <Link href='/' className="underline fs-800">See Documentation</Link>
                <ImArrowUpRight2/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtraSection;
