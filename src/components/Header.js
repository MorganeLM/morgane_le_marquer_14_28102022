import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addEmployee } from "../redux/redux";
import moment from 'moment';

function Header() {
    const dispatch = useDispatch();

    let mockData = [
    {
      "firstName": "John",
      "lastName": "Doe",
      "dateOfBirth": "08/11/1955",
      "startDate": "03/01/2010",
      "street": "1526 Broadway Blvd",
      "city": "Nashville",
      "zipCode": "37201",
      "state": "Tennessee",
      "department": "Engineering"
    },
    {
      "firstName": "Jane",
      "lastName": "Smith",
      "dateOfBirth": "04/06/1986",
      "startDate": "01/09/2012",
      "street": "123 Main Street",
      "city": "Nashville",
      "zipCode": "37201",
      "state": "Tennessee",
      "department": "Legal"
    },
    {
      "firstName": "Mary",
      "lastName": "Diaz",
      "dateOfBirth": "15/06/1978",
      "startDate": "07/09/2005",
      "street": "84 Prudence Street",
      "city": "Detroit",
      "zipCode": "48219",
      "state": "Michigan",
      "department": "Engineering"
    },
    {
      "firstName": "Ryan",
      "lastName": "Clinton",
      "dateOfBirth": "15/06/1978",
      "startDate": "07/09/2005",
      "street": "37 Pyramid Valley Road",
      "city": "Keokuk",
      "zipCode": "52632",
      "state": "Iowa",
      "department": "Marketing"
    },
    {
      "firstName": "Janet",
      "lastName": "Carey",
      "dateOfBirth": "08/02/1988",
      "startDate": "07/09/2005",
      "street": "29 Pinnickinick Street",
      "city": "Brinnon",
      "zipCode": "98320",
      "state": "Washington",
      "department": "Human Resources"
    }]

    function addData(){
      mockData.forEach(data => dispatch(addEmployee({
        firstName: data.firstName,
        lastName: data.lastName,
        dateOfBirth: moment(data.birthDate).format('DD/MM/YYYY'),
        startDate: moment(data.startDate).format('DD/MM/YYYY'),
        street: data.street,
        city: data.city,
        zipCode: data.zipCode,
        state: data.state,
        department: data.department
    })))
    }

    return (
      <header className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link to="/"  className="navbar-brand ps-3 fw-bold">HRnet</Link>
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
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
              <div>
                <button className="btn btn-dark" onClick={() => addData()}>+ data</button>
              </div>
            </div>
          </div> 
        </nav>
      </header>);
  }
  
  export default Header;