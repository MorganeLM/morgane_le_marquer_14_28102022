function CreateEmployeeForm() {
    const saveEmployee = function(e){
        e.preventDefault()
        console.log("hey")
    }

    return (
    <form action="#" id="create-employee" className="adding-form my-3">
        <div>
            <label htmlFor ="first-name" className="form-label">First Name</label>
            <input type="text" id="first-name" className="form-control"/>
        </div>
        <div>
            <label htmlFor ="last-name" className="form-label">Last Name</label>
            <input type="text" id="last-name" className="form-control" />
        </div>
        <div>
            <label htmlFor ="date-of-birth" className="form-label">Date of Birth</label>
            <input id="date-of-birth" type="text" className="form-control" />
        </div>
        <div>
            <label htmlFor ="start-date" className="form-label">Start Date</label>
            <input id="start-date" type="text" className="form-control" />
        </div>
        <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor ="street" className="form-label">Street</label>
            <input id="street" type="text" className="form-control" />

            <label htmlFor ="city" className="form-label">City</label>
            <input id="city" type="text" className="form-control" />

            <label htmlFor ="state" className="form-label">State</label>
            <select name="state" id="state" className="form-select"></select>

            <label htmlFor ="zip-code" className="form-label">Zip Code</label>
            <input id="zip-code" type="number" className="form-control" />
        </fieldset>
        <div>
            <label htmlFor ="department" className="form-label">Department</label>
            <select name="department" id="department" className="form-select">
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
            </select>
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