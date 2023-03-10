import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAuth } from "../store/auth/reducer";
import { selectRouter } from "../store/post/reducers/postReducer";

const NavBar: FC<{}> = () => {
  const { refreshToken } = useSelector(selectAuth);
  const { location } = useSelector(selectRouter);

  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <h4>Menu</h4>
          </Link>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 text-white">
                Home
              </Link>
            </li>
            {refreshToken ? (
              <li>
                {location.pathname !== "/dashboard" ? (
                  <Link to="/dashboard" className="nav-link px-2 text-white">
                    Dashboard
                  </Link>
                ) : (
                  <p
                    className="nav-link px-2 text-red"
                    style={{ cursor: "pointer" }}
                  >
                    Dashboard
                  </p>
                )}
              </li>
            ) : null}
          </ul>
          <div className="text-end">
            <Link to="/login" type="button" className="btn-outline-light me-2">
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
