import React from "react";

const ReviewSection = () => {
  return (
    <>
      <div className="section py-0">
        <div className="box">
          <div className="bg-review rounded-[30px]">
            <div className="py-16 text-center">
              <p className="fw-600 text-2xl lg:text-4xl">
                What Our Customers Say
              </p>
              <p className="mt-5">
                Here are some thoughtful things some of our customers say about
                us
              </p>
            </div>
            <div className="pb-8">
              <div className="w-11/12 mx-auto overflow-x-auto scroll-pro">
                <div className="flex gap-x-5 lg:gap-x-16 lg:w-[145%] w-[250%]">
                    <div className="review-div">
                        <p className="fs-500 lg:fs-700">As someone with no coding experience, I was worried about building a chatbot. But this no-code builder made it so easy.</p>
                        <p className="lg:text-2xl fw-600">Nneka Ogbaru</p>
                    </div>
                    <div className="review-div">
                        <p className="fs-500 lg:fs-700">“I was able to build a chatbot for my business in under an hour with this no-code builder. It's made a huge difference in how I communicate with my customers.</p>
                        <p className="lg:text-2xl fw-600">Tomi Adebayo</p>
                    </div>
                    <div className="review-div">
                        <p className="fs-500 lg:fs-700">“I love how customizable the chatbots are. I was able to create a chatbot that matched my brand perfectly</p>
                        <p className="lg:text-2xl fw-600">Abubakar Sanni</p>
                    </div>
                    <div className="review-div hidden lg:grid">
                        <p className="fs-500 lg:fs-700">As someone with no coding experience, I was worried about building a chatbot. But this no-code builder made it so easy.</p>
                        <p className="lg:text-2xl fw-600">Nneka Ogbaru</p>
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

export default ReviewSection;
