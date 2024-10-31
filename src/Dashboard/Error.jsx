import React from "react";

const Error = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="text-center pt-5">
        <img
          src="/img/404chicken.png"
          alt="Confused Chicken"
          className="error-chicken"
        />
      </div>
      <h2>404 not found!</h2>
      <p className="text-muted d-none d-md-block">
        The page you're looking for does not seem to exist!{" "}
      </p>
      <p className="d-block d-md-none">The page doesn't exist!</p>
    </div>
  );
};

export default Error;
