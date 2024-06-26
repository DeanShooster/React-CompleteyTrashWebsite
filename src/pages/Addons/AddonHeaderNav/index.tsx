import { Link, useLocation } from "react-router-dom";
import { addonsPage } from "../../../constants/routing";
import { IMedia, addonLinks } from "../../../constants/media";

import "./index.scss";
import { activeLinkColor } from "../../../constants/general";

interface IAddonHeaderNav {
  setAddon: Function;
}

export const AddonHeaderNav = ({ setAddon }: IAddonHeaderNav) => {
  const { pathname } = useLocation();

  return (
    <nav className="addon-nav">
      {addonLinks.map((addon: IMedia, index: number) => {
        const isActive = decodeURIComponent(pathname).includes(addon.name);
        return (
          <Link
            key={index}
            to={`${addonsPage}/${addon.name}`}
            onClick={() => setAddon(addon)}
            style={{
              color: isActive ? activeLinkColor : undefined,
            }}
          >
            {addon.name}
          </Link>
        );
      })}
    </nav>
  );
};
