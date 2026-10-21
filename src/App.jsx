import React, { useState } from "react";
import Profile from "./components/Profile";
import Interest from "./components/Interest";
import Settings from "./components/Settings";

const App = () => {
  const [view, setView] = useState("profile");
  const [profileData, setProfileData] = useState({
    name: "",
    age: "",
    email: "",
  });
  const [interest, setInterest] = useState("");
  const [setting, setSetting] = useState(false);

  const [data, setData] = useState([]);

  const handleSubmit = () => {
    const finalSubmission = {
      ...profileData,
      interest,
      setting,
    };
    setData([...data, finalSubmission]);
    setProfileData({ name: "", age: "", email: "" });
    setInterest("");
    setSetting(false);
    setView("profile");
  };

  // Helper for active tab styling
  const getTabClass = (tabName) => {
    const base =
      "cursor-pointer px-4 py-2 text-sm font-medium transition-colors border-b-2 ";
    return view === tabName
      ? base + "border-blue-600 text-blue-600"
      : base +
          "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300";
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl border border-gray-100 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          User Onboarding
        </h1>

        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={getTabClass("profile")}
            onClick={() => setView("profile")}
          >
            Profile
          </button>
          <button
            className={getTabClass("interest")}
            onClick={() => setView("interest")}
          >
            Interest
          </button>
          <button
            className={getTabClass("settings")}
            onClick={() => setView("settings")}
          >
            Settings
          </button>
        </div>

        {/* Dynamic Views */}
        <div className="min-h-50">
          {view === "profile" && (
            <Profile
              profileData={profileData}
              setProfileData={setProfileData}
            />
          )}
          {view === "interest" && (
            <Interest interest={interest} setInterest={setInterest} />
          )}
          {view === "settings" && (
            <Settings
              setting={setting}
              setSetting={setSetting}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
