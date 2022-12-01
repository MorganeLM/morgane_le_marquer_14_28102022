import { useSelector } from 'react-redux';
import Table from "./Table/Table";

export default function EmployeeTable() {
    const data = useSelector(state => state.employees);

    const columns = [
        { Header: "First Name", accessor: "firstName" },
        { Header: "Last Name", accessor: "lastName" },
        { Header: "Start Date", accessor: "startDate" },
        { Header: "Department", accessor: "department" },
        { Header: "Date of Birth", accessor: "dateOfBirth" },
        { Header: "Street", accessor: "street" },
        { Header: "City", accessor: "city" },
        { Header: "State", accessor: "state" },
        { Header: "Zip Code", accessor: "zipCode" },
    ];
    
    return(
    <div className='mx-auto pb-3'>
        <h1 className='text-center my-3 fs-2'>Current Employees</h1>
        <Table columns={columns} data={data} />
    </div>
    )
  }
  