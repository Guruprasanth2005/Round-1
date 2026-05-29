import "../styles/Header.css";

import IconBell from "../icons/IconBell.svg";

const Header = () => {
  return (
    <header className="header">

      <div className="bellWrap">
        <img
          src={IconBell}
          alt="bell"
          className="bellIcon"
        />
      </div>

      <div className="headerInfo">

        <span className="headerName">
          Grace Walker
        </span>

        <div className="headerAvatar">
          GW
        </div>

      </div>

    </header>
  );
};

export default Header;