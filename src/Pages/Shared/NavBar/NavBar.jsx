import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";


const NavBar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  
   const handleLogOut = () => {
     logOut()
       .then(() => {
         Swal.fire({
         position: "top-end",
         icon: "success",
         title: "Log Out successful",
         showConfirmButton: false,
         timer: 1500,
         });
       })
       .catch((error) => console.log(error));
  };

  const handleProfileClick = () => {
    setShowLogout(!showLogout);
  };

    const navItem = (
      <>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/college">College</Link>
        </li>
        <li>
          <Link to="/admission">Admission</Link>
        </li>
        <li>
          <Link to="/myCollege">My College</Link>
        </li>
      </>
  );
  
  
    return (
      <div className="navbar max-w-screen-xl bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl">CampusEase</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div>
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="h-8 w-8 rounded-full cursor-pointer"
                onClick={handleProfileClick}
              />
              {showLogout && (
                <button
                  className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full hover:bg-gray-200"
                  onClick={handleLogOut}
                >
                  Log Out
                </button>
              )}
            </div>
          ) : (
            <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full hover:bg-gray-200">
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>
      </div>
    );
};

export default NavBar;