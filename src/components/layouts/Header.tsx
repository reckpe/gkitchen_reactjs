import { menuItems } from "../../constants/layout";
import { useAuthStore } from "../../features/auth";
import { HeaderMenuItemI } from "../../types/layout.interface";
import Logo from "../../assets/icons/logo.png";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { user, logout } = useAuthStore();
  const { t } = useTranslation();

  console.log(user, logout, Logo);

  return (
    <header className="fixed w-full top-0 z-[51]">
      <nav className="py-2 px-3 bg-gray-dark text-white">
        <div className="container-nav w-full flexCenter">
          <ul
            className="navbar-collapse w-full max-w-xl flexBetween"
            id="basic-navbar-nav"
          >
            {menuItems.map((nav: HeaderMenuItemI, index: number) => (
              <li className="nav-item border-r-primary" key={index}>
                <a
                  href="#"
                  className="text-primary w-fit h-fit px-4 text-base block"
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
      </nav>
    </header>
  );
};

export default Header;
