import { useState } from "react";

const EditProfile = () => {
  const [values, setValues] = useState({
    fname: "Samyam",
    lname: "Adhikari",
    email: "samyam@gmail.com",
    phoneNumber: "",
    gender: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-4 container">
      <div className="text-center">
        <div className="fs-3 fw-medium">Manage Profile</div>
        <div className="text-secondary">Edit your profile</div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-9 mt-3 border px-md-5 bg-white">
          <div className=" text-avatar d-flex align-items-center justify-content-center text-white text-center mx-auto mt-4 bg-dark fs-3 rounded-circle ">
            SA
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
              value={values.fname}
            />
            <input
              type="text"
              className="form-control mb-3 py-2"
              placeholder="Last Name"
              name="lname"
              onChange={handleChanges}
              value={values.lname}
            />
            <select
              className="form-select mb-3 py-2"
              name="gender"
              onChange={handleChanges}
              value={values.gender}
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
              value={values.currentPassword}
            />
            <input
              type="password"
              className="form-control mb-3 py-2"
              placeholder="Enter new password"
              name="newPassword"
              onChange={handleChanges}
              value={values.newPassword}
            />
            <input
              type="password"
              className="form-control mb-3 py-2"
              placeholder="Re-enter new password"
              name="confirmPassword"
              onChange={handleChanges}
              value={values.confirmPassword}
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
              value={values.email}
            />
            <input
              type="tel"
              className="form-control mb-3 py-2"
              placeholder="Enter your phone number"
              name="phoneNumber" // Changed to match state
              onChange={handleChanges}
              value={values.phoneNumber}
            />
          </div>
          <div className="text-center">
            <button className="btn btn-primary full-button mb-4 mt-2">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditProfile;
