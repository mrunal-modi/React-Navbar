import "./dropdown.scss";

const Dropdown = ({ label, dopdownItems, className = "", labelClassName }) => {
  return (
    <div className={`dropdown ${className}`}>
      <div className={`label ${labelClassName}`}>{label}</div>
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
