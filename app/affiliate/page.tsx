import React from "react";

const page = () => {
  return (
    <section className="max-w-screen-lg mx-auto p-4 md:p-10 h-[80vh] ">
      <div className="flex items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl font-poppins font-bold p-10">
          Our Affiliate Disclosure
        </h1>
      </div>
      <div className=" m-auto">
        <p className="text-base md:text-lg font-palanquin leading-loose">
          GiftSeeker is a participant in various affiliate marketing programs.
          This means that when you click on certain product links and make a
          purchase, we may earn a small commission at no additional cost to you.
          Our recommendations are based on our genuine belief in the quality and
          suitability of the products we feature. Rest assured that our primary
          goal is to provide you with valuable gift ideas, and any commissions
          we receive help support the maintenance of our website and the
          creation of more gift guides. Your trust and satisfaction are of
          utmost importance to us, and we thank you for supporting GiftSeeker
          through your purchases.
        </p>
      </div>
    </section>
  );
};

export default page;
