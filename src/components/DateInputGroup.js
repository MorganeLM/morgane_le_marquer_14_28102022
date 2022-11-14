import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateInputGoup(props) {
    return(
      <div className="my-2">
        <label  className="form-label" htmlFor={props.name}>{props.name}</label>
        <DatePicker id={props.name} className="form-control"
                    required={props.required ? true : false}
                    selected={props.selectedValue} 
                    onChange={(event) => {props.setFunction(event.target.value)}} 
                    dateFormat="dd/MM/yyyy"
                    placeholderText="jj/MM/aaaa"
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    todayButton={props.showTodayBtn} />
      </div>
    )
  }
  