import React from "react";
import "./logo.scss";
import { logo, brandName } from "../../config/navbar-config";

export default function Logo() {
  return (
    <div className="logo">
      {logo && <img src={logo} className="logo" alt="logo" />}
      {(!logo && brandName) && <h4>{brandName}</h4>}
    </div>
  );
}
