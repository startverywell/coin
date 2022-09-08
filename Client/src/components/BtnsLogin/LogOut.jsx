import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./loginbtn.css";

export default function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout()} className="buttonLogin buttomLogout">
      <div className="arrow-wrapper">
        <div className="arrow"></div>
      </div>
      Salir
    </button>
  );
}
