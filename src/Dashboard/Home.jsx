import React from "react";
import { Link } from "react-router-dom";
import PieChart from "./PieChart";

const Home = () => {
  return (
    <section className=" px-4 px-md-5 pb-4">
      <div className=" py-4">
        <div className="row gap-3 gap-md-4 align-items-center justify-content-center d-flex text-center">
          <div className="col-12 col-md bg-white rounded p-4 py-5 d-flex flex-column align-items-center justify-content-center">
            <h2 className="primary-color">2600</h2>
            <div className="fw-medium">No. of birds</div>
          </div>
          <div className="col-12 col-md bg-white rounded p-4 py-5 d-flex flex-column align-items-center justify-content-center">
            <h2 className="primary-color">1200</h2>
            <div className="fw-medium">No. of eggs</div>
          </div>
          <div className="col-12 col-md bg-white rounded p-4 py-5 d-flex flex-column align-items-center justify-content-center">
            <h2 className="primary-color">4</h2>
            <div className="fw-medium">No. of employees</div>
          </div>
        </div>
      </div>
      <div className=" py-2">
        <div className="row  gap-3 gap-md-4 justify-content-center d-flex">
          <div className="col-12 col-md bg-white rounded px-4 pt-4 pb-3">
            <div className="text-muted mb-2">Recent activities</div>
            <div className="d-flex gap-2 align-items-center mb-3">
              <div>
                <img
                  src="/img/dmy1.jpg"
                  alt="Profile 1"
                  className="profile-img"
                />
              </div>
              <div>
                <div className="small text-secondary">2024-8-28</div>
                <div className="m-n1">Sagar Shrestha</div>
                <div className="small text-secondary">
                  Added 200 chickens as batch 26.
                </div>
              </div>
            </div>
            <div className="d-flex gap-2 align-items-center mb-3">
              <div>
                <img
                  src="/img/dmy2.jpg"
                  alt="Profile 2"
                  className="profile-img"
                />
              </div>
              <div>
                <div className="small text-secondary">2024-8-27</div>
                <div className="m-n1">Rose Thakuri</div>
                <div className="small text-secondary">
                  Completed the vaccination of batch 36.
                </div>
              </div>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <div>
                <img
                  src="/img/dmy3.jpg"
                  alt="Profile 3"
                  className="profile-img"
                />
              </div>
              <div>
                <div className="small text-secondary">2024-8-26</div>
                <div className="m-n1">Pawan Acharya</div>
                <div className="small text-secondary">
                  Sold 100 chickens from batch 30.
                </div>
              </div>
            </div>
            <div className="pt-3 text-center">
              <Link to="/activities">See all activities</Link>
            </div>
          </div>
          <div className="col-12 col-md bg-white rounded p-4">
            <div className="text-muted mb-2">Data from past 6 months</div>
            <PieChart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
