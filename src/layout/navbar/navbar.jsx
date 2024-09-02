import "./navbar.css";
import { Link } from "react-router-dom";
import { GiPapers } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { search_icon } from "../../utils/images";
import { useSidebarContext } from "../../Context/index";

function NavBar() {
  const { openSidebar } = useSidebarContext();

  return (
    <nav className="bg-violet d-flex justify-content-between px-5 py-4">
      <div>
        <Link to={"/"} className="a">
          <span className="text-white fs-3">
            <GiPapers />
          </span>
          <span className="text-white fs-3">Blog.</span>
        </Link>
      </div>
      <div className="d-flex gap-3 navbar-row">
        <ul className="d-flex gap-5 navBar-nav">
          <li className="nav-item">
            <Link className="text-white a fs-3">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="text-white a fs-3">Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="text-white a fs-3">About</Link>
          </li>
        </ul>
        <div
          className="vr"
          style={{
            color: "whitesmoke",
            width: "2px",
            height: "90%",
            alignItems: "center",
            textAlign: "center",
          }}></div>

        <div className="navbar-btns d-flex text-center">
          <button type="button" className="navbar-search-btn">
            <img src={search_icon} alt="" />
          </button>
          <button
            type="button"
            className="sidebar-show-btn bg-white d-flex text-center justify-content-center"
            onClick={() => openSidebar()}>
            <FaBars size={21} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
