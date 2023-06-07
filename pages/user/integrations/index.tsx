import { AppPage } from "@/shared/components/layouts/Types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiSearch } from "react-icons/bi";

const IntegrationHome: AppPage = () => {
  return (
    <>
      <div>
        <div className="text-center">
          <p className="text-2xl lg:text-4xl lg:fw-6600">Integrations</p>
        </div>
        <div className="mt-6">
          <div className="border border-[#D7DCE0] flex items-center w-60 lg:w-6/12 mx-auto rounded">
            <input type="serach" className="p-2 w-full outline-none rounded" />
            <BiSearch className="text-xl mx-2" />
          </div>
        </div>
        {/* content */}
        <div className="mt-12">
          {/* available integrations */}
          <div>
            <div>
              <p className="text-xl lg:text-2xl">Available Integrations</p>
              <p className="brown fs-500 mt-2">
                These are the available integrations at the moment
              </p>
            </div>
            <div className=" mt-6 grid lg:grid-cols-4 gap-x-6 gap-y-6">
              <div className="p-4 border border-gray-300 rounded hover:shades">
                <Image
                  src="https://res.cloudinary.com/dic7regoe/image/upload/v1686038728/sinechat/sm_5b321c99945a2_2_sls0rk.png"
                  alt="whatsapp"
                  width={100}
                  height={100}
                  className="w-12 "
                />
                <p className="mt-3">Whatsapp</p>
                <p className="mt-1 fs-400 brown">
                  Add a chatbot to your website without coding. Customize the
                  widget’s look and feel to match your website design.
                </p>
              </div>
              <div className="p-4 border border-gray-300 rounded hover:shades">
                <Image
                  src="https://res.cloudinary.com/dic7regoe/image/upload/v1686119269/sinechat/Screenshot_2023-02-17_152215_1_wlstzz.png"
                  alt="whatsapp"
                  width={100}
                  height={100}
                  className="w-12 "
                />
                <p className="mt-3">Chat Widget</p>
                <p className="mt-1 fs-400 brown">
                  Add a chatbot to your website without coding. Customize the
                  widget’s look and feel to match your website design.
                </p>
              </div>
              <div className="p-4 border border-gray-300 rounded hover:shades">
                <Image
                  src="https://res.cloudinary.com/dic7regoe/image/upload/v1686038728/sinechat/Facebook_Messenger_logo_2020_3_s8opn5.png"
                  alt="whatsapp"
                  width={100}
                  height={100}
                  className="w-12 "
                />
                <p className="mt-3">Facebook Messenger</p>
                <p className="mt-1 fs-400 brown">
                  Add a chatbot to your website without coding. Customize the
                  widget’s look and feel to match your website design.
                </p>
              </div>
              <div className="p-4 border border-gray-300 rounded hover:shades">
                <Image
                  src="https://res.cloudinary.com/dic7regoe/image/upload/v1686038728/sinechat/telegram-1_2_vguurp.png"
                  alt="whatsapp"
                  width={100}
                  height={100}
                  className="w-12 "
                />
                <p className="mt-3">Telegram</p>
                <p className="mt-1 fs-400 brown">
                  Add a chatbot to your website without coding. Customize the
                  widget’s look and feel to match your website design.
                </p>
              </div>
            </div>
          </div>
          {/* v2 integrations */}
          <div>
            <div className="mt-12">
              <p className="text-xl lg:text-2xl">V2 Integrations</p>
              <p className="brown fs-500 mt-2">
                Vote any of these platform below so we can integrate them to our
                system
              </p>
            </div>
            <div className=" mt-6 grid lg:grid-cols-4 gap-x-6 gap-y-6">
              <div className="p-4 border border-gray-300 rounded hover:shades">
                <Image
                  src="https://res.cloudinary.com/dic7regoe/image/upload/v1686119269/sinechat/Screenshot_2023-02-17_152215_6_fl8gd1.png"
                  alt="whatsapp"
                  width={100}
                  height={100}
                  className="w-12 "
                />
                <p className="mt-3">Zapier</p>
                <p className="mt-1 fs-400 brown">
                  Connect ChatBot with your favorite apps to seamlessly pass
                  information between services.
                </p>
              </div>
              <div className="p-4 border border-gray-300 rounded hover:shades">
                <Image
                  src="https://res.cloudinary.com/dic7regoe/image/upload/v1686119269/sinechat/Screenshot_2023-02-17_152215_10_qos3hm.png"
                  alt="whatsapp"
                  width={100}
                  height={100}
                  className="w-12 "
                />
                <p className="mt-3">Shopify</p>
                <p className="mt-1 fs-400 brown">
                  Add a chatbot to your website without coding. Customize the
                  widget’s look and feel to match your website design.
                </p>
              </div>
              <div className="p-4 border border-gray-300 rounded hover:shades">
                <Image
                  src="https://res.cloudinary.com/dic7regoe/image/upload/v1686119269/sinechat/Screenshot_2023-02-17_152215_4_k5v6ze.png"
                  alt="whatsapp"
                  width={100}
                  height={100}
                  className="w-12 "
                />
                <p className="mt-3">Webhooks</p>
                <p className="mt-1 fs-400 brown">
                  Add a chatbot to your website without coding. Customize the
                  widget’s look and feel to match your website design.
                </p>
              </div>
              <div className="p-4 border border-gray-300 rounded hover:shades">
                <Image
                  src="https://res.cloudinary.com/dic7regoe/image/upload/v1686119269/sinechat/Screenshot_2023-02-17_152215_2_tgdunx.png"
                  alt="whatsapp"
                  width={100}
                  height={100}
                  className="w-12 "
                />
                <p className="mt-3">LiveChat</p>
                <p className="mt-1 fs-400 brown">
                  Add a chatbot to your website without coding. Customize the
                  widget’s look and feel to match your website design.
                </p>
              </div>
              <div className="p-4 border border-gray-300 rounded hover:shades">
                <Image
                  src="https://res.cloudinary.com/dic7regoe/image/upload/v1686119270/sinechat/Screenshot_2023-02-17_152215_5_zrdah4.png"
                  alt="whatsapp"
                  width={100}
                  height={100}
                  className="w-12 "
                />
                <p className="mt-3">Slack</p>
                <p className="mt-1 fs-400 brown">
                  Connect ChatBot with your favorite apps to seamlessly pass
                  information between services.
                </p>
              </div>
              <div className="p-4 border border-gray-300 rounded hover:shades">
                <Image
                  src="https://res.cloudinary.com/dic7regoe/image/upload/v1686119270/sinechat/Screenshot_2023-02-17_152215_7_qu0sfs.png"
                  alt="whatsapp"
                  width={100}
                  height={100}
                  className="w-12 "
                />
                <p className="mt-3">Freshdesk</p>
                <p className="mt-1 fs-400 brown">
                  Add a chatbot to your website without coding. Customize the
                  widget’s look and feel to match your website design.
                </p>
              </div>
              <div className="p-4 border border-gray-300 rounded hover:shades">
                <Image
                  src="https://res.cloudinary.com/dic7regoe/image/upload/v1686119270/sinechat/Screenshot_2023-02-17_152215_15_bdims1.png"
                  alt="whatsapp"
                  width={100}
                  height={100}
                  className="w-12 "
                />
                <p className="mt-3">Twitter</p>
                <p className="mt-1 fs-400 brown">
                  Add a chatbot to your website without coding. Customize the
                  widget’s look and feel to match your website design.
                </p>
              </div>
              <div className="p-4 border border-gray-300 rounded hover:shades">
                <Image
                  src="https://res.cloudinary.com/dic7regoe/image/upload/v1686119269/sinechat/Screenshot_2023-02-17_152215_2_tgdunx.png"
                  alt="whatsapp"
                  width={100}
                  height={100}
                  className="w-12 "
                />
                <p className="mt-3">Zendesk</p>
                <p className="mt-1 fs-400 brown">
                  Add a chatbot to your website without coding. Customize the
                  widget’s look and feel to match your website design.
                </p>
              </div>
              <div className="p-4 border border-gray-300 rounded hover:shades">
                <Image
                  src="https://res.cloudinary.com/dic7regoe/image/upload/v1686119270/sinechat/Screenshot_2023-02-17_152215_13_abelgw.png"
                  alt="whatsapp"
                  width={100}
                  height={100}
                  className="w-12 "
                />
                <p className="mt-3">Kik</p>
                <p className="mt-1 fs-400 brown">
                  Connect ChatBot with your favorite apps to seamlessly pass
                  information between services.
                </p>
              </div>
              <div className="p-4 border border-gray-300 rounded hover:shades">
                <Image
                  src="https://res.cloudinary.com/dic7regoe/image/upload/v1686119270/sinechat/Screenshot_2023-02-17_152215_11_tu6bii.png"
                  alt="whatsapp"
                  width={100}
                  height={100}
                  className="w-12 "
                />
                <p className="mt-3">WordPress</p>
                <p className="mt-1 fs-400 brown">
                  Add a chatbot to your website without coding. Customize the
                  widget’s look and feel to match your website design.
                </p>
              </div>
              <div className="p-4 border border-gray-300 rounded hover:shades">
                <Image
                  src="https://res.cloudinary.com/dic7regoe/image/upload/v1686119270/sinechat/Screenshot_2023-02-17_152215_8_xu3mdq.png"
                  alt="whatsapp"
                  width={100}
                  height={100}
                  className="w-12 "
                />
                <p className="mt-3">HelpDesk</p>
                <p className="mt-1 fs-400 brown">
                  Add a chatbot to your website without coding. Customize the
                  widget’s look and feel to match your website design.
                </p>
              </div>
              <div className="p-4 border border-gray-300 rounded hover:shades">
                <Image
                  src="https://res.cloudinary.com/dic7regoe/image/upload/v1686119270/sinechat/Screenshot_2023-02-17_152215_14_qebgd5.png"
                  alt="whatsapp"
                  width={100}
                  height={100}
                  className="w-12 "
                />
                <p className="mt-3">Actions on Google</p>
                <p className="mt-1 fs-400 brown">
                  Add a chatbot to your website without coding. Customize the
                  widget’s look and feel to match your website design.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-integration h-[300px] lg:bg-fit mt-12 lg:p-12 flex items-center">
            <div className="w-8/12 lg:w-5/12 text-white">
                <p className="text-2xl">Can’t find what you’re looking for?</p>
                <p className="mt-3 opacity-75">Please let us know of any integration that can help make your work easier and we will evaluate it</p>
                <div className="mt-7">
                    <Link href='/user' className="btn-like">Submit a request</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntegrationHome;
IntegrationHome.Layout = "Dashboard";
