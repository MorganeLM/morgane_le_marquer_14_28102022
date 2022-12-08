
export default function InputGoup(props) {
  return(
    <div className="my-2">
      <label className="form-label" htmlFor={props.name}>{props.name}</label>
      <input id={props.name} name={props.name} 
        onChange={(event) => {props.setFunction(event.target.value)}} 
        className="form-control"
        required={props.required ? true : false}
        type={props.type ? props.type : "text"}>
      </input>
    </div>
  )
}
