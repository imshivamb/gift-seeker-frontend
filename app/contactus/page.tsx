"use client";
import { Mail } from "lucide-react";
import Head from "next/head";

// pages/contact.tsx

import React from "react";

const ContactPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="I hope this tutorial is helpful for you"
        />
      </Head>
      <section className="max-w-screen-lg mx-auto h-auto pt-10">
        <article className="">
          <h1 className="text-3xl font-bold font-poppins text-center pb-4 text-gray-600">
            About Us
          </h1>
          <p className="text-xl text-slate-600 font-palanquin leading-loose">
            <b>GiftSeeker</b> is your ultimate online destination for unique and
            thoughtful gift ideas. Our team of gift enthusiasts scours the web
            to bring you only the most captivating and innovative products that
            are perfect for gifting. While some featured items may earn us a
            small commission, our main goal is to help you discover remarkable
            gifts. <b>We don't sell the products directly</b>, but we're
            dedicated to making your gift-giving experience extraordinary, one
            find at a time.
          </p>
        </article>
        <section className="mt-20 mb-20">
          <div className="text-3xl font-poppins text-slate-600 font-bold text-center flex items-center justify-center relative">
            <Mail className="mr-2 w-8 h-8 text-indigo-500" />
            <h1>Contact Us</h1>
          </div>
          <form
            action="https://formsubmit.co/ffac7d773c0c2a9c0b57431e79bcaf29"
            method="POST"
            className="flex flex-col items-center mt-6 space-y-4 max-w-screen-sm mx-auto"
          >
            <label htmlFor="enquiry" className="text-left font-bold text-lg">
              Why are you getting in touch with us?
            </label>
            <select
              name="enquiry"
              id="enquiry"
              className="border-2 rounded-lg border-gray-500 outline-none py-2 px-4 w-full mx-8 text-gray-800  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              required
            >
              <option value="">Select an option</option>
              <option value="question">General Question</option>
              <option value="feedback">Feedback</option>
              <option value="support">Technical Support</option>
              <option value="other">Other</option>
            </select>
            <label htmlFor="name" className="text-left font-bold text-lg">
              Full Name*
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border-2 rounded-lg border-gray-500 outline-none py-2 placeholder:text-lg px-4 w-full mx-8 text-gray-800  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              placeholder="Full Name"
              required
            />

            <label htmlFor="email" className="text-left font-bold text-lg">
              Email Address*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-2 rounded-lg border-gray-500 outline-none py-2 placeholder:text-lg px-4 w-full mx-8 text-gray-800  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              placeholder="Email Address"
              required
            />

            <label htmlFor="message" className="text-left font-bold text-lg">
              Message*
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              className="border-2 rounded-lg border-gray-500 outline-none py-2 placeholder:text-lg px-4 w-full mx-8 text-gray-800  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              placeholder="Your Message"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            >
              Submit
            </button>
          </form>
        </section>
      </section>
    </>
  );
};

export default ContactPage;
