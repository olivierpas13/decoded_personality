import { Link } from "@tanstack/react-router";

const Navbar = ({ children }) => {
  return (
    <>
      <div className=" navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/test"}>{"Free Personality Test"}</Link>
              </li>
              <li>
                <Link to={"/mbtis"}>Personality Types </Link>
              </li>
              <li>
                <p>Cognitive functions</p>
                <ul className="p-2">
                  <li>
                    <Link to={"/cognitives"}>What are cognitive functions</Link>
                  </li>
                  <li>
                    <Link to={"/chart"}>Cognitive functions Chart</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Link to={"/"}>
            <div className="md:h-12 md:w-48 md:p-4">
              <img src="/decoded_logo.svg" alt="decoded logo" />
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/test"}>{"Free Personality Test"}</Link>
            </li>
            <li>
              <Link to={"/mbtis"}>Personality Types </Link>
            </li>
            <li>
              <details>
                <summary>Cognitive functions</summary>
                <ul className="p-2">
                  <li>
                    <Link to={"/cognitives"}>What are cognitive functions</Link>
                  </li>
                  <li>
                    <Link to={"/chart"}>Cognitive functions chart</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={"/test"} className="btn">
            {"take the test".toUpperCase()}
          </Link>
        </div>
      </div>
      {children}
    </>
  );
};

export default Navbar;
