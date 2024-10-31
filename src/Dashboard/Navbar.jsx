import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { BsBell } from "react-icons/bs";
import { useAppContext } from "../../context/AppContext";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  const notificationCount = 5;
  const { handleToogle } = useAppContext();

  return (
    <div className="position-sticky top-0 bg-white py-3 border-start px-4 d-flex align-items-center justify-content-between shadow-sm">
      <div className="d-flex align-items-center gap-3 gap-md-4">
        <div>
          <RiMenu2Fill
            size={22}
            className="text-secondary cursor-pointer"
            onClick={() => handleToogle()}
          />
          <MobileSidebar />
        </div>
        <div>
          <div className="fw-bold fs-5 fs-md-4 logo-color">मेरो फार्म</div>
          <div className="small text-muted d-none d-md-block">
            Welcome, Samyam Adhikari!
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center gap-4">
        <div className="position-relative">
          <BsBell size={22} className="cursor-pointer" />
          {notificationCount > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle fw-normal rounded-pill bg-danger text-white notification-count">
              {notificationCount}
            </span>
          )}
        </div>
        <div className="gradient-button text-white rounded px-3 py-2 d-flex align-items-center">
          <div className="d-none d-md-block"> Logout </div>
          <MdLogout size={22} className="ms-2" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
