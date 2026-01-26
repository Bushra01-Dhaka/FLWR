import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../Hook/useAuth";
import userIcon from "../assets/user.gif";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { user, logOut } = useAuth();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogOut = () => {
    logOut()
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.error(error);
    })
  }

  const navItems = (
    <>
      <li className="py-2 lg:py-0 text-2xl lg:text-[16px]">
        <NavLink
          to="/ourStory"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          Our Story
        </NavLink>
      </li>

      <li className="py-2 lg:py-0 text-2xl lg:text-[16px]">
        <NavLink
          to="/donateCloths"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          Donate Cloths
        </NavLink>
      </li>

      <li className="py-2 lg:py-0 text-2xl lg:text-[16px]">
        <NavLink
          to="/ourServices"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          Our Services
        </NavLink>
      </li>

      <li className="py-2 lg:py-0 text-2xl lg:text-[16px]">
        <NavLink
          to="/contactUs"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          Contact
        </NavLink>
      </li>

      {/* {
        user && 
      <li className="py-2 lg:py-0 text-2xl lg:text-[16px]">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          Dashboard
        </NavLink>
      </li>

      } */}
    </>
  );

  return (
    <div
      className={`navbar fixed top-0 left-0 w-full lg:max-w-screen-2xl lg:mx-auto 
  lg:px-20 px-10 z-50 transition-all duration-300 
  ${scrolled ? "bg-secondary/40 backdrop-blur-md shadow-md" : "bg-transparent"}`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <div className="flex justify-center items-center">
            <h2 className="text-lg lg:text-2xl font-bold text-info">FLWR</h2>
            <img
              className="w-[30px] h-[30px] object-cover"
              src="/daisy.png"
              alt=""
            />
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="relative mr-8 lg:mr-0">
            {/* Avatar */}
            <div className="relative">
              <img
                src={user.photoURL || userIcon}
                onClick={() => setOpen(!open)}
                className="w-[40px] h-[40px] cursor-pointer object-cover rounded-full border-2 border-primary"
                alt="User"
              />

              {/* Dropdown */}
              <div
                className={`absolute right-0 mt-3 w-56 bg-info text-secondary rounded-xl shadow-xl p-4
        transform transition-all duration-300 origin-top
        ${open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}
        `}
              >
                <h4 className="font-semibold text-sm">
                  {user.displayName || "FLWR User"}
                </h4>
                <p className="text-xs text-secondary/70 mt-1">{user.email}</p>

                <hr className="my-3 opacity-30" />

                <button className="btn btn-sm btn-secondary font-bold text-info w-full">
                  Dashboard
                </button>
                <button onClick={handleLogOut} className="btn btn-outline btn-secondary w-full mt-2 btn-sm font-bold hover:text-info">
                  Log Out
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Link to="/register">
            <button className="btn btn-sm btn-info font-bold shadow-2xl shadow-primary border-0 bg-linear-to-r text-secondary lg:mr-0 mr-6 ">
              Sign Up
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
