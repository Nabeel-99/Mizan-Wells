import React from "react";

const ProjectForm = () => {
  return (
    <div className="border border-[#d7d7d7] shadow-2xs rounded-xl p-6 w-full xl:w-3/4 flex flex-col gap-6">
      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="fullname">Full Name</label>
          <input
            id="fullname"
            name="fullname"
            className="px-4 py-2 border border-[#dadada] rounded-lg"
            type="text"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            className="px-4 py-2 border border-[#dadada] rounded-lg"
            type="email"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            className="px-4 py-2 border border-[#dadada] rounded-lg"
            type="text"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Project Title</label>
          <input
            id="title"
            name="title"
            className="px-4 py-2 border border-[#dadada] rounded-lg"
            type="text"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Project Description</label>
          <input
            id="description"
            name="description"
            className="px-4 py-2 border border-[#dadada] rounded-lg"
            type="text"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="location">Project Location</label>
          <input
            id="location"
            name="location"
            className="px-4 py-2 border border-[#dadada] rounded-lg"
            type="text"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="amount">Enter Estimated Budget</label>
          <input
            id="amount"
            name="amount"
            className="px-4 py-2 border border-[#dadada] rounded-lg"
            type="number"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="note">Message/Note (optional)</label>
          <textarea
            id="note"
            name="note"
            className="px-4 min-h-44 max-h-44 py-2 border border-[#dadada] rounded-lg"
            placeholder="Enter any additional information"
          />
        </div>
        <button
          type="submit"
          className="border mt-4 border-[#132edc] bg-blue-700 hover:bg-blue-600 hover:text-white transition-all duration-300 text-white p-3 rounded-2xl"
        >
          Submit Project
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
