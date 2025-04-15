import { menuItems } from "../../constants/layout";
import { useAuthStore } from "../../features/auth";
import { HeaderMenuItemI } from "../../types/layout.interface";
import Logo from "../../assets/icons/logo.png";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const Header = () => {
  const { user, logout } = useAuthStore();
  const { t } = useTranslation();

  console.log(user, logout, Logo);
  return (
    <header className="fixed w-full top-0 z-[51]">
      <nav className="py-2 px-3 bg-gray-dark text-white">
        <div className="container-nav w-full flexCenter">
          <ul
            className="navbar-collapse w-full max-w-5xl flexBetween"
            id="basic-navbar-nav"
          >
            {menuItems.map((nav: HeaderMenuItemI, index: number) => (
              <li
                className={clsx(
                  "nav-item",
                  [1, 5].includes(index) && "border-x border-primary px-6"
                )}
                key={index}
              >
                <a
                  href="#"
                  className="text-primary hover:text-primary-hover w-fit h-fit text-base font-bold block capitalize"
                >
                  {nav.isLogo ? (
                    <img
                      className="max-w-full h-auto max-h-[76px] block"
                      src={Logo}
                    />
                  ) : (
                    t(nav.label)
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="header-extra shadow-headerShadow bg-black-light w-full">
          <div className="header-extra-container max-w-5xl mx-auto py-2 px-4"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
