import React from "react";

const Settings = ({ setting, setSetting, onSubmit }) => {
  return (
    <div className="flex flex-col h-full justify-between gap-6">
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={setting}
            onChange={(e) => setSetting(e.target.checked)}
            className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
          />
          <span className="text-sm text-gray-700">
            I accept the{" "}
            <span className="text-blue-600 hover:underline">
              Privacy Policy
            </span>{" "}
            and agree to the Terms of Service.
          </span>
        </label>
      </div>

      <button
        onClick={onSubmit}
        disabled={!setting}
        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
      >
        Complete Submission
      </button>
    </div>
  );
};

export default Settings;
