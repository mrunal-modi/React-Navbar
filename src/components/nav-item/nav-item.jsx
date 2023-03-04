import "./nav-item.scss";
import Dropdown from "../dropdown/dropdown";
import { nav } from "../../config/navbar-config";
import { Fragment } from "react";
const NavItem = () => {
  return (
    <nav className="navbar container">
      <ul className="navbar-nav ml-auto">
        {nav.map((el, i) =>
        <Fragment key={i}>
          {
            el.dropdownItems ? (
              <Dropdown
                className="nav-item"
                label={el.label}
                dopdownItems={el.dropdownItems}
                labelClassName="nav-link"
              />
            ) : (
              <li className="nav-item" key={i}>
                <a className="nav-link" href={el.href}>
                  {el.label}
                </a>
              </li>
            )
          }
          </Fragment>
        )}
        
      </ul>
    </nav>
  );
};

export default NavItem;
