import { ReactDropdownMenu } from "react-dropdown-menu-lmm";
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import departments from "../mock/departments";
import states from "../mock/states";
import InputGoup from "./InputGroup";
import DateInputGoup from "./DateInputGroup";
import { addEmployee } from "../redux/redux";


function CreateEmployeeForm() {
    //
    const dispatch = useDispatch();
    // initialize and store every input values
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ birthDate, setBirthDate ] = useState(new Date());
    const [ startDate, setStartDate ] = useState(new Date());
    const [ street, setStreet ] = useState("");
    const [ city, setCity ] = useState("");
    const [ state, setState ] = useState(states[0].name);
    const [ zipCode, setZipCode ] = useState("");
    const [ dept, setDept ] = useState(departments[0].name);
   
    const handleChangeDepartment = (value) => {
        setDept(value);
    }

    const handleChangeState = (value) => {
        setState(value);
    }

    const saveEmployee = function(e){
        e.preventDefault()
        dispatch(addEmployee({
            firstName: firstName, 
            lastName: lastName, 
            dateOfBirth: birthDate, 
            startDate: startDate,
            street: street, 
            city: city, 
            zipCode: zipCode, 
            state: state, 
            departement: dept
        }))
        // display a modal with a sucess message
        // setModalMessage("Employee " + firstName + " " + lastName + " created !")
        // setModalVisibility(true)
        // reset our form
        e.target.reset()
    }

    return (
    <form action="#" id="create-employee" className="adding-form my-3">
        <InputGoup name="First Name" setFunction={setFirstName} require="true"/>
        <InputGoup name="Last Name" setFunction={setLastName} require="true"/>

        <DateInputGoup name="Date of Birth" 
                       selectedValue={birthDate} 
                       setFunction={setBirthDate} 
                       require="true" showTodayBtn={null}/>

        <DateInputGoup name="Start Date" 
                       selectedValue={startDate} 
                       setFunction={setStartDate} 
                       require="true" showTodayBtn="Aujourd'hui"/>

        <fieldset className="address">
            <legend>Address</legend>
            <InputGoup name="Street" setFunction={setStreet} require="true"/>
            <InputGoup name="City" setFunction={setCity} require="true"/>        
            <label htmlFor ="stateSelector" className="form-label">State</label>
            <ReactDropdownMenu options={states} 
                              onChange={handleChangeState} 
                              id={'stateSelector'}/>
            <InputGoup name="Zip Code" setFunction={setZipCode} require="true" type="number" /> 
        </fieldset>
        <div>
            <label htmlFor ="departmentSelector" className="form-label">Department</label>
            <ReactDropdownMenu options={departments} 
                              onChange={handleChangeDepartment} 
                              id={'departmentSelector'}/>
        </div>
        <div className="text-end mt-3">
            <button className="btn btn-primary" 
                    onClick={(e) => saveEmployee(e)} 
                    data-bs-toggle="modal" 
                    data-bs-target="#confirmationModal">Save</button>
        </div>
       
        <div className="modal fade" id="confirmationModal" tabIndex="-1" aria-labelledby="confirmation" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body p-5 mt-3 fs-5 text-center">
                        Employee Created!
                    </div>
                    <div className="modal-footer border-0 pt-0">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </form>)
}
  
export default CreateEmployeeForm;