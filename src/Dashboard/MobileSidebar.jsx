import Offcanvas from "react-bootstrap/Offcanvas";
import { useAppContext } from "../../context/AppContext";
import { useMediaQuery } from "react-responsive";
import { IoMdHome, IoMdSettings } from "react-icons/io";
import { GiChicken } from "react-icons/gi";
import { MdWarehouse, MdHealthAndSafety, MdLogout } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaRegChartBar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function MobileSidebar() {
  const { show } = useAppContext();
  const { handleClose } = useAppContext();

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <>
      {isMobile && (
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <div className="text-center position-sticky top-0  bg-white">
              <img src="/img/logo.png" alt="Roaster logo" className="logo" />
            </div>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul>
              <li>
                <NavLink
                  to="/dashboard"
                  className="text-dark fw-medium d-flex align-items-center py-3 px-4"
                  onClick={handleClose}
                >
                  <IoMdHome size={22} className="me-2" />
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/farm"
                  className="text-dark fw-medium d-flex align-items-center py-3 px-4"
                  onClick={handleClose}
                >
                  <GiChicken size={22} className="me-2" />
                  Farm
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/inventory"
                  className="text-dark fw-medium d-flex align-items-center py-3 px-4"
                  onClick={handleClose}
                >
                  <MdWarehouse size={21} className="me-2" />
                  Inventory
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/vaccination"
                  className="text-dark fw-medium d-flex align-items-center py-3 px-4"
                  onClick={handleClose}
                >
                  <MdHealthAndSafety size={23} className="me-2" />
                  Vaccination
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/finance"
                  className="text-dark fw-medium d-flex align-items-center py-3 px-4"
                  onClick={handleClose}
                >
                  <RiMoneyRupeeCircleFill size={22} className="me-2" />
                  Finance
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/sales"
                  className="text-dark fw-medium d-flex align-items-center py-3 px-4"
                  onClick={handleClose}
                >
                  <FaRegChartBar size={21} className="me-2" />
                  Sales
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  className="text-dark fw-medium d-flex align-items-center py-3 px-4"
                  onClick={handleClose}
                >
                  <FaUser size={20} className="me-2" />
                  My Profile
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/setup"
                  className="text-dark fw-medium d-flex align-items-center py-3 px-4"
                  onClick={handleClose}
                >
                  <IoMdSettings size={22} className="me-2" />
                  Setup
                </NavLink>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </>
  );
}

export default MobileSidebar;
