import "../styles/Sidebar.css";

import IconGrid from "../icons/IconGrid.svg";
import IconFolder from "../icons/IconFolder.svg";
import IconCalendar from "../icons/IconCalendar.svg";

const Sidebar = () => {
  return (
    <aside className="sidebar">

      <div className="logo">
        <img
          src={IconGrid}
          alt="logo"
          width="16"
        />

        <span className="logoText">
          SUCCESS
        </span>
      </div>

      <nav className="nav">

        <button className="navItem">
          <img
            src={IconGrid}
            alt=""
            width="16"
          />

          Dashboard
        </button>

        <button className="navItem active">

          <span className="activeBar"></span>

          <img
            src={IconFolder}
            alt=""
            width="16"
          />

          Courses
        </button>

        <button className="navItem">
          <img
            src={IconCalendar}
            alt=""
            width="16"
          />

          Schedule
        </button>

        <button className="navItem">
          📩 Messages
        </button>

        <button className="navItem">
          📄 Resources
        </button>

      </nav>

      <button className="logout">
        ↩ Log out
      </button>

    </aside>
  );
};

export default Sidebar;