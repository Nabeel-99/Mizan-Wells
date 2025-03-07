import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import ContactForm from "../components/forms/ContactForm";
import FadeInEffect from "../components/ui/FadeInEffect";
import { motion } from "motion/react";
import Faq from "../sections/Faq";
import { FiPhone } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import CTA from "../sections/CTA";

const Contact = () => {
  return (
    <div className="flex flex-col items-center 2xl:container 2xl:mx-auto gap-10  pt-20">
      <FadeInEffect translateY={50}>
        <div className="flex flex-col gap-10  items-center  lg:px-20">
          <div className="flex flex-col gap-4">
            <p className="font-satoshi-bold text-3xl lg:text-7xl text-center tracking-tight">
              Get In Touch with Us
            </p>
            <div className="flex flex-col gap-10">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-xl text-center"
              >
                Have questions, feedback, or want to partner with us? We’d love
                to hear from you!
              </motion.p>
              <FadeInEffect translateY={20} delay={0.5}>
                <div className="">
                  <ContactForm />
                </div>
              </FadeInEffect>
              <FadeInEffect translateY={20} delay={0.5}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-col border  items-center rounded-xl border-[#dadada] p-8 gap-4"
                >
                  <div className="flex  rounded-full border border-[#dadada] justify-center w-54 p-2">
                    <div className="flex items-center  gap-4 ">
                      <FiPhone className="text-lg text-blue-500" />
                      <p>Our Contact</p>
                    </div>
                  </div>
                  <Link className="border p-4 w-full bg-[#ececec] border-[#ececec]     rounded-full">
                    Email:{" "}
                    <span className="font-satoshi-bold">ufi@gmail.com</span>
                  </Link>
                  <div className="border p-4 w-full bg-[#ececec] border-[#ececec]     rounded-full">
                    Phone:{" "}
                    <span className="font-satoshi-bold">
                      09166580000/0901 900 9430
                    </span>
                  </div>
                  <div className="border p-4 w-full bg-[#ececec] border-[#ececec]    rounded-full">
                    Address:{" "}
                    <span className="font-satoshi-bold">Wuse 2, Abuja.</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <Link
                      to={"https://www.instagram.com/loveandlightrelieff/"}
                      target="_blank"
                    >
                      <FaInstagram className="text-3xl text-pink-700" />
                    </Link>
                    <Link to={"https://x.com/loveandlightRF"} target="_blank">
                      <FaXTwitter className="text-3xl text-black" />
                    </Link>
                  </div>
                </motion.div>
              </FadeInEffect>
            </div>
          </div>
        </div>
      </FadeInEffect>
      <div className="w-full">
        <Faq marginTop="mt-36" />
        <CTA marginTop="mt-36" />
      </div>
    </div>
  );
};

export default Contact;
