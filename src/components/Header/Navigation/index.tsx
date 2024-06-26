import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { ILink, links } from "../../../constants/routing";

import "./index.scss";
import { ThreeDots } from "../../ThreeDots";
import { activeLinkColor } from "../../../constants/general";

interface INavigation {
  burgerMenuOpen?: Function;
}

export const Navigation = ({ burgerMenuOpen }: INavigation) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const activePage = ({ isActive }: any) => {
    return isActive ? { color: activeLinkColor } : undefined;
  };

  const navigationHandler = (path: string) => {
    navigate(path);
    if (burgerMenuOpen) burgerMenuOpen(false);
  };

  return (
    <nav className="navigation-container">
      {links.map((link: ILink, index: number) => {
        return (
          <div key={index} className="link-container" onClick={() => navigationHandler(link.path)}>
            <NavLink to={link.path} style={activePage}>
              {link.text}
            </NavLink>
            <ThreeDots color={pathname.includes(link.path) ? activeLinkColor : undefined} />
          </div>
        );
      })}
    </nav>
  );
};
