import { useSelector } from 'react-redux';
import { useMemo, useState, useEffect } from "react";
import Table from "./Table";

export default function EmployeeTable() {
    
    const data = useSelector(state => state.employees);
    console.log('employees', data)

    const columns = [
        { Header: "First Name", accessor: "firstName" },
        { Header: "Last Name", accessor: "lastName" },
        { Header: "Start Date", accessor: "startDate" },
        { Header: "Department", accessor: "departement" },
        { Header: "Date of Birth", accessor: "dateOfBirth" },
        { Header: "Street", accessor: "street" },
        { Header: "City", accessor: "city" },
        { Header: "State", accessor: "state" },
        { Header: "Zip Code", accessor: "zipCode" },
    ];
    
    return(
    <div>
        <Table columns={columns} data={data} />
    </div>
    )
  }
  