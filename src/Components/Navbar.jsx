import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <nav>
        <div className="bg-gradient-to-r from-slate-300 to-slate-500 flex border-transparent shadow-xl p-2 mx-40 mt-5 rounded-3xl gap-8 items-center">
          <h1 className="text-">
            <strong>
              <Link to="/">FilmMatrix</Link>
            </strong>
          </h1>

          <Link className="font-bold ml-10" to="/">
            Home
          </Link>
          <Link className="font-bold" to="/movies">
            Movies
          </Link>
          <Link className="font-bold" to="/tvshows">
            TV Shows
          </Link>

          <form class="w-80 ml-60 mx-auto  ">
            <label
              for="search"
              class="block mb-2.5 text-sm font-medium text-heading sr-only "
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-body"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                class="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-lg focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                placeholder="Search"
                required
              />
              <button
                type="button"
                class="absolute  end-1.5 bottom-1.5 text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none"
              >
                Search
              </button>
            </div>
          </form>

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
