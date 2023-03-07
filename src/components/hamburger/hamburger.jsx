import "./hamburger.scss";

const Hamburger = ({ isOpen, setOpen }) => {
  return (
    <div
      className={`hamburger-icon ${isOpen ? "open" : "close"}`}
      onClick={() => setOpen(!isOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
