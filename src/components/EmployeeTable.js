import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { useTable } from 'react-table';

export default function EmployeeTable() {
    
    const data = useSelector(state => state.employees);
    console.log('employees', data)

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

    const tableInstance = useTable({ columns, data })
    
    return(
        <table>

        </table>
    )
  }
  