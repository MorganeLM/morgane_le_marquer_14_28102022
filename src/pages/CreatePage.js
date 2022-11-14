import Header from '../components/Header';
import Footer from '../components/Footer';
import CreateEmployeeForm from '../components/CreateEmployeeForm';

//import { useSelector } from 'react-redux';


function AddingPage() {
  //const employees = useSelector(state => state.employees);
  //console.log('employees', employees)

  return (
    <div>
      <Header />
      <main className='mx-auto pb-5'>
        <h1 className='fs-2 text-center py-3 mt-3'>Create Employee</h1>
        <CreateEmployeeForm />
      </main>
      <Footer />
    </div>
  );
}

export default AddingPage;