import { Link } from "react-router-dom";

function Header() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link to="/"  className="navbar-brand ps-3 fw-bold">HRnet</Link>
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/employee-list"  className="nav-link">
                    <i className="fa fa-user-circle"></i> View Current Employees
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/"  className="nav-link">
                    <i className="fa fa-user-circle"></i> Add a New Employee
                </Link>
              </li>
            </ul>
          </div>
        </div> 
      </nav>);
  }
  
  export default Header;