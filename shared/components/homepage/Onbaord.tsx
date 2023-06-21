import React from "react";
import Image from "next/image";
import Link from "next/link";

const OnbaordScreen = () => {
  return (
    <>
      <div className="h-screen pt-24 lg:pt-0 lg:place-center">
        <div className="box">
          <Link href='/'>
          <Image
            src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686648026/pikaboo/Group_26_2_cq9sv4.png"
            alt=""
            width={200}
            height={80}
            className="w-44 lg:w-auto mx-auto"
          />
          </Link>
          <p className="my-8 lg:my-16 lg:text-2xl text-center">Choose Account Type</p>
          <div className="w-10/12 mx-auto">
            <div className="grid pb-24 lg:grid-cols-3 gap-x-12 gap-y-6">
              <Link
                href={{
                  pathname: `/auth/login`,
                  query: {
                    sort: "1",
                  },
                }}
              >
                <div className="border border-[#009A06] shades hover:shadow-xl cusor-pointer p-6 rounded-lg">
                  <Image
                    src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686648026/pikaboo/Rectangle_62_hhueng.png"
                    alt=""
                    width={80}
                    height={80}
                    className="mx-auto w-16"
                  />
                  <p className="text-center lg:text-lg">Fleet Manager</p>
                </div>
              </Link>
              <Link  href={{
                  pathname: `/auth/login`,
                  query: {
                    sort: "2",
                  },
                }}>
                <div className="border border-[#009A06] shades hover:shadow-xl cusor-pointer p-6 rounded-lg">
                  <Image
                    src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686648026/pikaboo/Rectangle_63_tbosse.png"
                    alt=""
                    width={80}
                    height={80}
                    className="mx-auto w-16"
                  />
                  <p className="text-center lg:text-lg">Field Operator</p>
                </div>
              </Link>
              <Link  href={{
                  pathname: `/auth/login`,
                  query: {
                    sort: "3",
                  },
                }}>
                <div className="border border-[#009A06] shades hover:shadow-xl cusor-pointer p-6 rounded-lg">
                  <Image
                    src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686648026/pikaboo/Rectangle_64_itdwt8.png"
                    alt=""
                    width={80}
                    height={80}
                    className="mx-auto w-16"
                  />
                  <p className="text-center lg:text-lg">Waste Manager</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnbaordScreen;
