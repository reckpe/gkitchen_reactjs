import { Link } from "@tanstack/react-router"
import { useTranslation } from "react-i18next";
import Cart from '../../assets/icons/ic_cart.svg'

const AuthComponent = () => {
  const { t } = useTranslation();
  return (
    <div className="flexCenter">
      <div className="mr-2 text-primary text-sm font-semibold">
        <Link to="/auth" search={{tab:"register"}} className="hover:text-primary-hover">{t("register.title")}</Link><span className="mx-1">/</span>
        <Link to="/auth" search={{tab:"login"}} className="hover:text-primary-hover">{t("login.title")}</Link>
      </div>
      <div className="flexCente relative">
        <Link to="/giohang" className="cursor-pointer">
          <img src={Cart} className="w-6 h-6" alt="Cart" />
        </Link>
        </div>
    </div>
  )
}

export default AuthComponent