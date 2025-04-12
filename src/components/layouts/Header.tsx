import { useAuthStore } from "../../features/auth";

const Header = () => {
  const { user, logout } = useAuthStore();

  console.log(user, logout);

  return (
    <header className="fixed w-full top-0 z-[51]">
      <nav className="bg-gray-dark p-4"></nav>
    </header>
  );
};

export default Header;
