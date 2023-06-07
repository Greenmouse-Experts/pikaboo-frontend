import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { FaAngleDown, FaAngleLeft, FaAngleRight } from "react-icons/fa";

const FaqSection = () => {
  const data = [
    {
      title: "Is coding knowledge required to use the no-code chatbot builder",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla minus assumenda maiores natus? Deleniti odit, iure ipsa, repudiandae temporibus enim impedit labore quis esse vitae, nam beatae iusto voluptatum necessitatibus!",
    },
    {
      title: "Can I integrate my chatbot with multiple platforms?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla minus assumenda maiores natus? Deleniti odit, iure ipsa, repudiandae temporibus enim impedit labore quis esse vitae, nam beatae iusto voluptatum necessitatibus!",
    },
    {
      title: "Is there a limit to the number of chatbots I can create?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla minus assumenda maiores natus? Deleniti odit, iure ipsa, repudiandae temporibus enim impedit labore quis esse vitae, nam beatae iusto voluptatum necessitatibus!",
    },
  ];
  return (
    <>
      <div className="section pt-0">
        <div className="box">
          <div className="bg-[#E3F9FF] relative py-8 lg:p-16 rounded-[30px]">
            <p className="text-2xl lg:text-4xl fw-600 pb-16 fw-600 text-center">
              Frequently Asked Questions
            </p>
            <div className="text-white pb-12 w-11/12 lg:w-9/12 mx-auto">
              <Accordion>
                {data.map((item, index) => (
                  <AccordionItem key={index}>
                    {({ open }: { open: boolean }) => (
                      <>
                        <AccordionHeader className="w-full bg-[#072C40] curved-style border p-2 lg:p-4 mt-4">
                          <div className="w-full flex  justify-between items-center">
                            <p className="fw-500 text-left">{item.title}</p>
                            {open ? <FaAngleDown /> : <FaAngleRight />}
                          </div>
                        </AccordionHeader>
                        <AccordionBody>
                          <div className="accordion-body px-3 mt-2 text-black">
                            {item.content}
                          </div>
                        </AccordionBody>
                      </>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <Image
              src="https://res.cloudinary.com/dic7regoe/image/upload/v1685780828/sinechat/Logo_1_cbv5tf.png"
              alt="logo"
              width={200}
              height={200}
              className="absolute bottom-0 right-0 w-16 lg:w-40"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
