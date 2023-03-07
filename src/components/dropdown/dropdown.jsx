import "./dropdown.scss";
import { useState } from "react";

const Dropdown = ({ label, dopdownItems, className = "", labelClassName }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`dropdown ${className} ${isOpen ? "open" : "close"}`}>
      <div
        className={`label ${labelClassName}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
      </div>
      <ul className="dropdown-items">
        {dopdownItems.map((el, i) => (
          <li className="nav-item" key={i}>
            <a className="nav-link" href={el.href}>
              {el.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
