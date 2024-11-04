import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { BsBell } from "react-icons/bs";
import MobileSidebar from "./MobileSidebar";
import { useAppContext } from "../context/AppContext";
import Dropdown from "react-bootstrap/Dropdown";

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
        <Dropdown className="position-relative">
          <Dropdown.Toggle
            as="div"
            split
            bsPrefix="custom-toggle"
            className="cursor-pointer"
          >
            <BsBell size={22} />
            {notificationCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle fw-normal rounded-pill bg-danger text-white notification-count">
                {notificationCount}
              </span>
            )}
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu-custom mt-2">
            <div className="px-3 py-2 border-bottom"> All Notifications</div>
            <Dropdown.Item href="#/action-1">
              <div className="lh-sm">Feed is almost out of the stock.</div>
              <div className="small text-muted">1hr ago</div>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              <div className="lh-sm">
                Batch 32 need to be vaccinned this Saturday.
              </div>
              <div className="small text-muted">3hr ago</div>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              <div className="lh-sm">Needed more chickens in the farm.</div>
              <div className="small text-muted">1hr ago</div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className="gradient-button text-white rounded px-3 py-2 d-flex align-items-center">
          <div className="d-none d-md-block"> Logout </div>
          <MdLogout size={22} className="ms-2" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
