import Logo from "../logo/logo";
import NavItem from "../nav-item/nav-item";
import "./navbar.scss";

const Navbar = () => {
  return (
    <header className="Navbar">
      <Logo />
      <NavItem />
    </header>
  );
};

export default Navbar;
