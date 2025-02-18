import React from "react";

const ContactForm = () => {
  return (
    <form className="border bg-white border-[#d7d7d7] p-6 lg:p-10 flex flex-col gap-4 rounded-xl shadow-2xs w-full">
      <div className="flex flex-col gap-2">
        <label id="full-name">Full Name</label>
        <input
          id="full-name"
          type="text"
          placeholder="Enter your full name"
          className="border border-[#dadada] p-2 rounded-lg w-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label id="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="border border-[#dadada] p-2 rounded-lg w-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label id="phone">Phone Number</label>
        <input
          id="phone"
          type="text"
          placeholder="Enter your phone number"
          className="border border-[#dadada] p-2 rounded-lg w-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label id="message">How can we help?</label>
        <textarea
          id="message"
          type="text"
          placeholder="Type your inquiries here..."
          className="border border-[#dadada] p-2 rounded-lg min-h-44 max-h-44 w-full"
        />
      </div>
      <div>
        <button
          type="submit"
          className="border mt-4 w-full border-[#132edc] bg-blue-700 hover:bg-blue-600 hover:text-white transition-all duration-300 text-white p-3 rounded-2xl"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
