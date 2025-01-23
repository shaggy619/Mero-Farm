import { useState, useContext, createContext } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    fname: "Samyam",
    lname: "Adhikari",
    email: "samyam@gmail.com",
    phoneNumber: "",
    gender: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const updateProfile = (updatedData) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      ...updatedData,
    }));
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
