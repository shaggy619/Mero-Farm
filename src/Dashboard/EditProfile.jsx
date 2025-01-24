import { useState } from "react";
import { useProfile } from "../context/ProfileContext";

const EditProfile = () => {
  const { profile, updateProfile } = useProfile();

  const [localProfile, setLocalProfile] = useState(profile);

  const handleChanges = (e) => {
    setLocalProfile({
      ...localProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    updateProfile(localProfile);
  };

  return (
    <section className="p-4 container">
      <div className="text-center">
        <div className="fs-3 fw-medium">Manage Profile</div>
        <div className="text-secondary">Edit your profile</div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-9 mt-3 border px-3 px-md-5 bg-white rounded">
          <div className=" text-avatar d-flex align-items-center justify-content-center text-white text-center mx-auto mt-4 bg-dark fs-3 rounded-circle ">
            {profile.fname.charAt(0).toUpperCase()}
            {profile.lname.charAt(0).toUpperCase()}
          </div>
          <div className="text-secondary text-center mb-3 mt-1">Admin</div>

          <div className="border-bottom"></div>
          <div className="fw-medium mt-4">Basic Information:</div>
          <div>
            <input
              type="text"
              className="form-control mt-3 mb-3 py-2"
              placeholder="First Name"
              name="fname"
              onChange={handleChanges}
              value={localProfile.fname}
            />
            <input
              type="text"
              className="form-control mb-3 py-2"
              placeholder="Last Name"
              name="lname"
              onChange={handleChanges}
              value={localProfile.lname}
            />
            <select
              className="form-select cursor-pointer mb-3 py-2"
              name="gender"
              onChange={handleChanges}
              value={localProfile.gender}
            >
              <option value="">Select Your Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="fw-medium mt-4">Account Security:</div>
          <div>
            <input
              type="password"
              className="form-control mt-3 mb-3 py-2"
              placeholder="Enter current password"
              name="currentPassword"
              onChange={handleChanges}
              value={localProfile.currentPassword}
            />
            <input
              type="password"
              className="form-control mb-3 py-2"
              placeholder="Enter new password"
              name="newPassword"
              onChange={handleChanges}
              value={localProfile.newPassword}
            />
            <input
              type="password"
              className="form-control mb-3 py-2"
              placeholder="Re-enter new password"
              name="confirmPassword"
              onChange={handleChanges}
              value={localProfile.confirmPassword}
            />
          </div>

          <div className="fw-medium mt-4">Email and Phone:</div>
          <div>
            <input
              type="email"
              className="form-control mt-3 mb-3 py-2"
              placeholder="Enter your email"
              name="email"
              onChange={handleChanges}
              value={localProfile.email}
            />
            <input
              type="tel"
              className="form-control mb-3 py-2"
              placeholder="Enter your phone number"
              name="phoneNumber"
              onChange={handleChanges}
              value={localProfile.phoneNumber}
            />
          </div>
          <div className="text-center">
            <button
              className="btn primary-background text-white full-button mb-4 mt-2"
              onClick={handleSave}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditProfile;
