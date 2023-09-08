import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
import { Mail, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="max-w-screen-xl mx-auto bottom-0 border-t-2 border-indigo-400 bg-white px-4 py-8 mt-6 ">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center">
          <div className="pl-5 mb-2">
            <Link href="/">
              <Image src={logo} alt="Footer Logo" width={230} height={70} />
            </Link>
          </div>
          <p className="text-sm font-bold font-palanquin mt-2 pl-4">
            &copy;Copyrights Gift Seeker. All rights reserved
          </p>
        </div>
        <div className=" font-bold text-lg font-poppins">
          <div className="flex items-center justify-evenly pb-2 ">
            <Link href="mailto: giftseeker108@gmail.com" target="_blank">
              <Mail className="" />
            </Link>
            <Link
              href="https://www.facebook.com/dgtlmarketi?mibextid=ZbWKwL"
              target="_blank"
            >
              <Facebook className="" />
            </Link>
            <Link
              href="https://instagram.com/gift_seeker_hub?utm_source=qr&igshid=MThlNWY1MzQwNA=="
              target="_blank"
            >
              <Instagram className="" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/gopal-bhardwaj-505916176"
              target="_blank"
            >
              <Linkedin className="" />
            </Link>
          </div>
          <div className="space-x-3 pt-4 text-center md:flex md:justify-center md:pt-0 md:space-x-6 ">
            <Link href="/contactus" className="hover:text-gray-400">
              Contact Us
            </Link>

            <Link href="/privacy-policy" className="hover:text-gray-400">
              Privacy Policy
            </Link>

            <Link href="/affiliate" className="hover:text-gray-400">
              Affiliate
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold pt-6">
          Gift Seeker is user/reader supported, some products displayed may earn
          us a commission if you purchase through our links. Gift Seeker is a
          participant in various Associates Programs. Learn more about how our
          site works in{" "}
          <Link
            href="/affiliate"
            className="hover:text-gray-400 font-semibold underline underline-offset-3"
          >
            Affiliate Policy
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
