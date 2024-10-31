import React from "react";
import { IoMdHome, IoMdSettings } from "react-icons/io";
import { GiChicken } from "react-icons/gi";
import { MdWarehouse, MdHealthAndSafety, MdLogout } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaRegChartBar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <section id="sidebar">
      <div className="text-center position-sticky top-0 py-3 bg-white">
        <img src="/img/logo.png" alt="Roaster logo" className="logo" />
      </div>
      <ul>
        <li>
          <NavLink
            to="/dashboard"
            className="text-dark fw-medium d-flex align-items-center py-3 px-4"
          >
            <IoMdHome size={22} className="me-2" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/farm"
            className="text-dark fw-medium d-flex align-items-center py-3 px-4"
          >
            <GiChicken size={22} className="me-2" />
            Farm
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/inventory"
            className="text-dark fw-medium d-flex align-items-center py-3 px-4"
          >
            <MdWarehouse size={21} className="me-2" />
            Inventory
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/vaccination"
            className="text-dark fw-medium d-flex align-items-center py-3 px-4"
          >
            <MdHealthAndSafety size={23} className="me-2" />
            Vaccination
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/finance"
            className="text-dark fw-medium d-flex align-items-center py-3 px-4"
          >
            <RiMoneyRupeeCircleFill size={22} className="me-2" />
            Finance
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sales"
            className="text-dark fw-medium d-flex align-items-center py-3 px-4"
          >
            <FaRegChartBar size={21} className="me-2" />
            Sales
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className="text-dark fw-medium d-flex align-items-center py-3 px-4"
          >
            <FaUser size={20} className="me-2" />
            My Profile
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/setup"
            className="text-dark fw-medium d-flex align-items-center py-3 px-4"
          >
            <IoMdSettings size={22} className="me-2" />
            Setup
          </NavLink>
        </li>

        {/* <li>
          <a
            href="#"
            className="text-dark fw-medium d-flex align-items-center px-4 py-3"
          >
            <MdLogout size={22} className="me-2" />
            Logout
          </a>
        </li> */}
      </ul>
    </section>
  );
};

export default Sidebar;
