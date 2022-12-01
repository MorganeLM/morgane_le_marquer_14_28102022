import { ReactDropdownMenu } from "react-dropdown-menu-lmm";
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import departments from "../mock/departments";
import states from "../mock/states";
import InputGoup from "./InputGroup";
import DateInputGoup from "./DateInputGroup";
import { addEmployee } from "../redux/redux";
import ModalWrapper from '../components/Modal';
import moment from 'moment';

function CreateEmployeeForm() {
    //
    const dispatch = useDispatch();
    // initialize and store every input values
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ birthDate, setBirthDate ] = useState(null);
    const [ startDate, setStartDate ] = useState(null);
    const [ street, setStreet ] = useState("");
    const [ city, setCity ] = useState("");
    const [ state, setState ] = useState(states[0].name);
    const [ zipCode, setZipCode ] = useState("");
    const [ department, setDepartment ] = useState(departments[0].name);
   
    const handleChangeDepartment = (value) => {
        setDepartment(value);
    }

    const handleChangeState = (value) => {
        setState(value);
    }

     // modal variables
     const [modalIsOpen, setModalIsOpen] = useState(false);
     const [modalContent, setModalContent] = useState('');
     const closeModal =()=>{
         setModalIsOpen(false)
     }

     // add the employee to redux store and display the modal
    const saveEmployee = function(e){
        e.preventDefault()
        dispatch(addEmployee({
            firstName: firstName, 
            lastName: lastName, 
            dateOfBirth: moment(birthDate).format('DD/MM/YYYY'), 
            startDate: moment(startDate).format('DD/MM/YYYY'),
            street: street, 
            city: city, 
            zipCode: zipCode, 
            state: state, 
            department: department
        }))
        // display a modal with a sucess message
        setModalContent("Employee " + firstName + " " + lastName + " created !")
        setModalIsOpen(true)
        //reset our form
        //e.target.reset()
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
                    onClick={(e) => saveEmployee(e)}>Save
            </button>
        </div>

       <ModalWrapper content={modalContent} isOpen={modalIsOpen} close={closeModal}/>
    </form>)
}
  
export default CreateEmployeeForm;


