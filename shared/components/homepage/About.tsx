import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <>
      <div className="section">
        <div className="box">
          <div className="px-6 py-8 lg:p-16 bg-[#D7DCFF] relative rounded-[30px]">
            <p className="text-3xl mb-6">About us</p>
            <p className="lg:fs-800">
              With SineChat, you can create custom chatbots in minutes, with a
              drag-and-drop interface that allows you to customize your bot's
              personality, responses, and actions. Whether you're looking to
              create a customer service chatbot, a lead generation chatbot, or
              anything in between, our platform makes it easy to get started and
              achieve your goals.
            </p>
            <Image
              src="https://res.cloudinary.com/dic7regoe/image/upload/v1685780828/sinechat/Group_j7h5gv.png"
              alt="logo"
              width={200}
              height={200}
              className="absolute top-0 right-0 w-24 lg:w-48"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
