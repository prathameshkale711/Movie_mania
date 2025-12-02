import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <nav>
        <div className='bg-gradient-to-r from-slate-300 to-slate-500 flex border-transparent shadow-xl p-2 mx-40 mt-5 rounded-3xl gap-8 items-center'>

          <h1 className="text-"><strong><Link to='/'>FilmMatrix</Link></strong></h1>

          <Link className='font-bold ml-10' to='/'>Home</Link>
          <Link className='font-bold' to='/movies'>Movies</Link>
          <Link className='font-bold' to='/tvshows'>TV Shows</Link>

          <button className='text-white bg-blue border hover:bg-gradient-to-r from-slate-300 to-slate-500  rounded-lg p-1 w-30 ml-110'>
            <b>Search</b>
          </button>

          {/* PROFILE IMAGE WITH DROPDOWN */}
          <div className="relative ml-30">
            <img
              src="/public/profile.png"
              alt="profile"
              className="w-10 h-10 rounded-full cursor-pointer hover:scale-110 transition"
              onClick={() => setOpenMenu(!openMenu)}
            />

            {/* Dropdown Menu */}
            {openMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white border shadow-lg rounded-lg p-2">
                <Link
                  to="/help"
                  className="block px-3 py-2 hover:bg-gray-100 rounded"
                  onClick={() => setOpenMenu(false)}
                >
                 <b>Help</b>
                </Link>

                <Link
                  to="/login"
                  className="block px-3 py-2 hover:bg-gray-100 rounded"
                  onClick={() => setOpenMenu(false)}
                >
                 <b> Sign In</b>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
