import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="box pt-2 pb-8">
        <div className="bg-secondary pt-5 px-3 lg:px-12 lg:flex flex-row-reverse items-center rounded-[30px]">
          <div className="lg:w-6/12">
            <Image
              src="https://res.cloudinary.com/dic7regoe/image/upload/v1685763263/sinechat/Group_43454_1_1_knxifc.png"
              alt="hero-img"
              width={400}
              height={400}
              className="lg:w-11/12"
            />
          </div>
          <div className="lg:w-6/12 mt-5 lg:mt-5">
            <p className="lg:text-7xl text-3xl fw-600">
              The Best No-Code ChatBot Builder
            </p>
            <p className="lg:text-xl mt-4 mb-12">
              Build your chatbot with zero coding experience
            </p>
            <Link href="/auth/signup" className="btn-feel">
              Try SineChat Free
            </Link>
            <div className="mt-16 lg:mt-24 pb-12 lg:pb-0">
              <p className="fw-300 text-gray-400">
                TRUSTED AND LOVED BY OUR NUMEROUS CUSTOMERS
              </p>
              <div className="flex gap-x-8 mt-5">
                <div>
                  <p className="text-3xl fw-600">120k+</p>
                  <p className="fw-300 text-gray-400">Bots Created</p>
                </div>
                <div>
                  <p className="text-3xl fw-600">14k+</p>
                  <p className="text-gray-400">Customer Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
