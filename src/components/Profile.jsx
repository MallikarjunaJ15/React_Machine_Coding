import React from "react";

const Profile = ({ profileData, setProfileData }) => {
  const nameError =
    profileData.name && profileData.name.length < 4
      ? "Name can't be less than 4 characters"
      : "";
  const ageError =
    profileData.age && profileData.age < 18 ? "Age can't be less than 18" : "";
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const emailError =
    profileData.email && !emailRegex.test(profileData.email)
      ? "Enter a valid Email"
      : "";

  const inputBaseClass =
    "w-full px-4 py-2 border rounded-lg outline-none transition-all focus:ring-2 focus:border-transparent ";

  return (
    <div className="flex flex-col gap-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          value={profileData.name}
          onChange={(e) =>
            setProfileData({ ...profileData, name: e.target.value })
          }
          placeholder="e.g. Jane Doe"
          className={
            inputBaseClass +
            (nameError
              ? "border-red-300 focus:ring-red-200"
              : "border-gray-300 focus:ring-blue-100")
          }
        />
        {nameError && (
          <p className="text-red-500 text-xs mt-1.5 font-medium">{nameError}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Age
        </label>
        <input
          type="number"
          value={profileData.age}
          onChange={(e) =>
            setProfileData({ ...profileData, age: e.target.value })
          }
          placeholder="18+"
          className={
            inputBaseClass +
            (ageError
              ? "border-red-300 focus:ring-red-200"
              : "border-gray-300 focus:ring-blue-100")
          }
        />
        {ageError && (
          <p className="text-red-500 text-xs mt-1.5 font-medium">{ageError}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          value={profileData.email}
          onChange={(e) =>
            setProfileData({ ...profileData, email: e.target.value })
          }
          placeholder="you@company.com"
          className={
            inputBaseClass +
            (emailError
              ? "border-red-300 focus:ring-red-200"
              : "border-gray-300 focus:ring-blue-100")
          }
        />
        {emailError && (
          <p className="text-red-500 text-xs mt-1.5 font-medium">
            {emailError}
          </p>
        )}
      </div>
    </div>
  );
};

export default Profile;
