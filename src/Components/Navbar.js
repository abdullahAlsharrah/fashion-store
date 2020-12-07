import { Link } from "react-router-dom";
import { ThemButton } from "../styles";

const Navbar = ({ changeTheme }) => {
  return (
    <header>
      <div className="container-fluid top" style={{ margin: "0px" }}>
        <div className="row">
          <div
            className="col-sm top-l"
            style={{ textAlign: "left", marginLeft: "100px" }}
          >
            <Link className="top-m" style={{ color: "black", margin: "2%" }}>
              About us
            </Link>
            |
            <Link className="top-m" style={{ color: "black", margin: "2%" }}>
              Contact us
            </Link>
            |
            <Link className="top-m" style={{ color: "black", margin: "2%" }}>
              List Your Store
            </Link>
          </div>
          <div
            className="col-sm top-r"
            style={{ textAlign: "right", marginRight: "100px" }}
          >
            <Link className="top-m" style={{ color: "black", margin: "2%" }}>
              Sign in / Register
            </Link>
            |
            <Link
              className="top-m"
              style={{ color: "black", textAlign: "right", margin: "2%" }}
            >
              عربي
            </Link>
          </div>
        </div>
      </div>
      <div className="container-floud" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="row">
          <div className="col-9">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link
                className="navbar-brand order-1 order-lg-0 ml-lg-0 ml-4 mr-auto"
                style={{ fontSize: "2re" }}
              >
                Online Store
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                style={{ margin: "0 0 0 100p" }}
                className="collapse navbar-collapse"
                id="navbarNavAltMarkup"
              >
                <div className="navbar-nav">
                  {/* <Link className="nav-link mobile-menu">
                    Sign in / Register
                  </Link> */}
                  <Link className="nav-link active top">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                  <Link className="nav-link top" href="Shop.html">
                    Shop
                  </Link>

                  <Link className="nav-link top" href="About-us.html">
                    Women
                  </Link>
                  <Link className="nav-link top">Men</Link>
                  <Link className="nav-link top">Kids</Link>
                  <Link className="nav-link top">Accesories</Link>
                  <Link className="nav-link top" href="Stores.html">
                    Stores List
                  </Link>
                  <Link className="nav-link" href="My-favorite-stores.html">
                    My Favorite Stores
                  </Link>
                  {/* <Link className="nav-link mobile-menu">About us</Link>
                  <Link className="nav-link mobile-menu">Contact us</Link>
                  <Link className="nav-link mobile-menu">List Your Store</Link>
                  <Link className="nav-link mobile-menu">عربي</Link> */}
                </div>
              </div>
            </nav>
          </div>
          <div className="col-3">
            <button
              style={{ margin: "10px 0 0 10px" }}
              type="button"
              className="btn btn-secondary"
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-heart"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                />
              </svg>
            </button>
            <button
              style={{ margin: "10px 0 0 10px" }}
              type="button"
              className="btn btn-secondary"
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-bag"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z"
                />
              </svg>
            </button>

            <ThemButton onClick={changeTheme}>Dark Mode</ThemButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
