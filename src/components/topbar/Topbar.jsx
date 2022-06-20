import './topbar.scss';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left_side">
          <a href="#intro" className="logo">Meri-MG</a>
          <div className="items_container">
            <p>person</p>
            <span>number</span>
          </div>
          <div className="items_container">
            <p>mail</p>
            <span>mail</span>
          </div>
        </div>
        <div className="right_side">
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
