import { Link } from "react-router-dom";

function Header() {
    return (
      <header className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link to="/"  className="navbar-brand ps-3 fw-bold">HRnet</Link>
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/employee-list"  className="nav-link">
                      <i className="fa fa-user-circle"></i> View Current Employees
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/"  className="nav-link">
                      <i className="fa fa-user-circle"></i> Add a New Employee
                  </Link>
                </li>
              </ul>
            </div>
          </div> 
        </nav>
      </header>);
  }
  
  export default Header;