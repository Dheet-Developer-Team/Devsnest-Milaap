import React from "react";
import { useState } from "react";
import "./loginpage.css";
import LoginCard from "./LoginCard";
import RegisterCard from "./RegisterCard";

const LoginPage = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="LoginPage">
      <div className="sections">
        <div className="left">
          <h1>
            Welcome to{" "}
            <span style={{ color: "rgb(79, 70, 229)" }}>Devsnest</span> Milaap!
          </h1>
          India's Most Active Tech Community
        </div>
        <div className="right">
          {login ? (
            <LoginCard setLogin={setLogin} />
          ) : (
            <RegisterCard setLogin={setLogin} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
