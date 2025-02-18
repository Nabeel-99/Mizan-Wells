import React from "react";

const PhaseForm = () => {
  return (
    <div className="flex flex-col gap-6 md:px-4 lg:px-0  mt-20 lg:mt-0">
      <div className="border border-[#d7d7d7] shadow-2xs rounded-xl p-6 w-full xl:w-3/4 flex flex-col gap-6">
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="phase-image">Upload Phase Images (optional)</label>
            <input
              id="phase-image"
              name="phase-image"
              className="px-4 py-2 border border-[#dadada] rounded-lg"
              type="file"
              multiple
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phase-title">Phase Title</label>
            <input
              id="phase-title"
              name="phase-title"
              className="px-4 py-2 border border-[#dadada] rounded-lg"
              type="text"
              placeholder="Phase 1"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phase-details">Phase Details</label>
            <textarea
              id="phase-details"
              name="phase-details"
              className="px-4 min-h-44 max-h-44 py-2 border border-[#dadada] rounded-lg"
              type="text"
              placeholder="Phase description..."
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="status">Status </label>
            <select
              name="status"
              id="status"
              className="px-4 py-2 border border-[#dadada] rounded-lg"
            >
              <option value="Not Started">Active</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="amount">Amount Spent</label>
            <input
              id="amount"
              name="amount"
              className="px-4 py-2 border border-[#dadada] rounded-lg"
              type="number"
              placeholder="Enter amount"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="start-date">Start Date</label>
            <input
              id="start-date"
              name="start-date"
              className="px-4 py-2 border border-[#dadada] rounded-lg"
              type="date"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="end-date">End Date / Estimated End Date</label>
            <input
              id="end-date"
              name="end-date"
              className="px-4 py-2 border border-[#dadada] rounded-lg"
              type="date"
              required
            />
          </div>
          {/* <div className="flex flex-col gap-2">
        <label htmlFor="note">Message/Note (optional)</label>
        <textarea
          id="note"
          name="note"
          className="px-4 min-h-44 max-h-44 py-2 border border-[#dadada] rounded-lg"
          placeholder="Enter any additional information"
        />
      </div> */}
          <button
            type="submit"
            className="border mt-4 border-[#132edc] bg-blue-700 hover:bg-blue-600 hover:text-white transition-all duration-300 text-white p-3 rounded-2xl"
          >
            Create Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default PhaseForm;
