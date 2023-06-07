import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import { SlSocialFacebook, SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1C1C1E] py-16">
        <div className="box">
          <div className="lg:flex">
            <div className="lg:w-4/12">
            <Image
                src="https://res.cloudinary.com/dic7regoe/image/upload/v1685766783/sinechat/Frame_128_1_fh5xlc.png"
                alt="logo"
                className="w-11/12 lg:w-80"
                width={300}
                height={300}
              />
            </div>
            <div className="lg:w-4/12 mt-16 lg:mt-0 text-white">
                <p className="text-center fs-800">Get In Touch</p>
                <ul className="flex gap-x-5 justify-center mt-6 ">
                  <li><Link href='/'><FaInstagram className="text-2xl"/></Link></li>
                  <li><Link href='/'><SlSocialTwitter className="text-2xl"/></Link></li>
                  <li><Link href='/'><SlSocialLinkedin className="text-2xl"/></Link></li>
                  <li><Link href='/'><SlSocialFacebook className="text-2xl"/></Link></li>
                  <li><Link href='/'><AiOutlineMail className="text-2xl"/></Link></li>
                </ul>
            </div>
            <div className="lg:w-4/12 mt-16 lg:mt-0 text-center text-white">
                <p className="fs-800"><Link href='/'>Privacy Policy</Link></p>
                <p className="mt-4 fs-800"><Link href='/'>Terms of Service</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
