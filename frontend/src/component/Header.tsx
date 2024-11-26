import { FC } from "react";
import { useAuth } from "../providers/AuthProvider";
import { NavLink } from "react-router-dom";

const link = [
  { title: "Головна", href: "/" },
  { title: "Про нас", href: "/about" },
  { title: "Контакти", href: "/contacts" },
  { title: "Профіль", href: "/profile" },
];

const Header: FC = () => {
  const { user, logout } = useAuth();
  return (
    <header className="bg-transparent w-full px-[24px] 2xl:px-[160px]">
      <div className="bg-white flex flex-row items-center justify-between px-[25px] py-[10px] lg:px-[40px] lg:py-[20px] rounded-3xl shadow-md">
        <NavLink
          to={"/"}
          className="font-semibold text-[28px] text-orange-500 relative"
        >
          КінокомпаніяПалец
          {user?.role === "Admin" && (
            <p className="relative text-red-500 text-[14px] -top-[50px] text-end">
              Admin
            </p>
          )}
        </NavLink>

        {user ? (
          <>
            {user.role === "Admin" ? (
              <div className="flex gap-10">
                {link.slice(0, 3).map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.href}
                    className="hover:text-orange-500 font-medium text-[18px]"
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
            ) : (
              <div className="flex gap-10">
                {link.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.href}
                    className="hover:text-orange-500 font-medium text-[18px]"
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
            )}
            <button
              onClick={logout}
              className="flex items-center justify-center font-semibold hover:opacity-30 text-[18px]"
            >
              Вийти
            </button>
          </>
        ) : (
          <>
            <div className="flex gap-10">
              {link.slice(0, 3).map((item, index) => (
                <NavLink
                  key={index}
                  to={item.href}
                  className="hover:text-orange-500 font-medium text-[18px]"
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
            <NavLink
              to={"/singup"}
              className="flex items-center justify-center font-semibold hover:opacity-30 text-[18px]"
            >
              Реєстрація
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
