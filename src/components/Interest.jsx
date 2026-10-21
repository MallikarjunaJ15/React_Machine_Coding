import React from "react";

const Interest = ({ interest, setInterest }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="block text-sm font-medium text-gray-700">
        Primary Area of Interest
      </label>
      <select
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none transition-all focus:ring-2 focus:ring-blue-100 focus:border-blue-500 bg-white"
      >
        <option value="" disabled>
          Select an option...
        </option>
        <option value="fullstack">Full-Stack Development</option>
        <option value="dataengineering">Data Engineering</option>
        <option value="webthree">Web-3 & Blockchain</option>
      </select>
    </div>
  );
};

export default Interest;
