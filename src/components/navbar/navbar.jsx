import { useState } from "react";
import Hamburger from "../hamburger/hamburger";
import Logo from "../logo/logo";
import NavItem from "../nav-item/nav-item";
import "./navbar.scss";

const Navbar = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  return (
    <header className={`Navbar ${burgerMenuOpen ? "open" : "close"}`}>
      <Logo />
      <NavItem />
      <Hamburger isOpen={burgerMenuOpen} setOpen={setBurgerMenuOpen} />
    </header>
  );
};

export default Navbar;
