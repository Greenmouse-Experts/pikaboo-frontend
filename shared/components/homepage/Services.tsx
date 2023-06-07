import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServicesSection = () => {
  return (
    <>
      <div className="section pb-0 lg:pb-24">
        <div className="box">
          <div>
            {/* Why SineChat? */}
            <div className="w-11/12  mx-auto">
              <p className="text-center text-2xl lg:text-4xl">Why SineChat?</p>
              <div className="mt-16 grid lg:grid-cols-3 gap-x-12 gap-y-12">
                <div>
                  <div className="contain-icon">
                    <Image
                      src="https://res.cloudinary.com/dic7regoe/image/upload/v1685763262/sinechat/26469777_3d_clock_2_adobe_express_1_hqb3ru.png"
                      alt="icon"
                      width={60}
                      height={40}
                      className="w-10"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="fw-600 fs-700 mb-3">Maximize your time</p>
                    <p>
                      Our no-code chatbot builder allows you to create a chatbot
                      in minutes, without the need for coding skills
                    </p>
                  </div>
                </div>
                <div>
                  <div className="contain-icon">
                    <Image
                      src="https://res.cloudinary.com/dic7regoe/image/upload/v1685763262/sinechat/Group_30702_r21zja.png"
                      alt="icon"
                      width={60}
                      height={40}
                      className="w-12"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="fw-600 fs-700 mb-3">Customizable</p>
                    <p>
                      You can customize your chatbot's personality, responses,
                      and design to fit your brand and business needs.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="contain-icon">
                    <Image
                      src="https://res.cloudinary.com/dic7regoe/image/upload/v1685763261/sinechat/360_F_438574063_80Ef1PHmD7y8AcfX3aiJK0GDKBu4z9cx_adobe_express_1_z3zepk.png"
                      alt="icon"
                      width={60}
                      height={40}
                      className="w-10"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="fw-600 fs-700 mb-3">Easy to Use</p>
                    <p>
                      Our drag-and-drop interface makes it simple for anyone to
                      build a chatbot, no matter their technical expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* What can you do with our no-code chatbot builder */}
            <div className="section">
              <p  className="text-center text-2xl lg:text-4xl lg:py-8">
                What can you do with our no-code chatbot builder
              </p>
              <div className="mt-12 grid lg:grid-cols-2 gap-x-12 gap-y-12">
                <div className="bg-secondary rounded-[20px]">
                  <div className="p-10 lg:pt-24 lg:w-11/12 mx-auto text-center">
                    <p className="text-xl lg:text-3xl text-center mb-8">
                      {" "}
                      Integrate your chatbot with popular messaging apps like
                      Facebook Messenger and WhatsApp.
                    </p>
                    <Link href="/" className="btn-feel block w-9/12 mx-auto">
                      Try SineChat Free
                    </Link>
                  </div>
                  <div className="mt-12 ml-4 lg:ml-8">
                    <Image
                      src="https://res.cloudinary.com/dic7regoe/image/upload/v1685776210/sinechat/Screen_Part_djqfds.png"
                      alt="dashboard"
                      width={800}
                      height={700}
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="bg-[#E0FFEA] rounded-[20px]">
                  <div className="p-10 lg:pt-24 lg:w-11/12 mx-auto text-center">
                    <p className="text-xl lg:text-3xl text-center mb-8">
                      {" "}
                      Create a Chatbot: Easily create a chatbot for your website or social media platforms.
                    </p>
                    <Link href="/" className="btn-feel block w-9/12 mx-auto">
                      Try SineChat Free
                    </Link>
                  </div>
                  <div className="mt-12">
                    <Image
                      src="https://res.cloudinary.com/dic7regoe/image/upload/v1685763261/sinechat/Macbook_Air_2022_1_fury1z.png"
                      alt="dashboard"
                      width={800}
                      height={800}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
