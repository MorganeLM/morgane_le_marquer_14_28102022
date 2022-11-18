import Modal from 'react-modal';
import { Link } from "react-router-dom";

export default function ModalWrapper(props) {
    const customStyles = {
        content: {
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          height: 'fit-content',
          width: '80%',
          maxWidth: '600px',
          borderColor: 'lightgrey',
          backgroundColor: 'white',
        },
      };
    
    return(
        <Modal isOpen={props.isOpen} 
               style={customStyles}>
            <button className="btn btn-dark float-end" onClick={props.close}>x</button>
            <p className='text-center fs-4 my-3'>{props.content}</p>
            <div className='d-flex justify-content-evenly py-3'>
                <Link to="/"  className="btn btn-outline-primary">
                    <i className="fa fa-user-circle"></i> Add an Othen Employee
                </Link>
                <Link to="/employee-list"  className="btn btn-outline-success">
                    <i className="fa fa-user-circle"></i> View Current Employees
                </Link>
            </div>
        </Modal>
    )
  }
  