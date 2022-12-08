import Header from '../components/Header';
import Footer from '../components/Footer';
import EmployeeTable from '../components/Table/EmployeeTable';

function ListPage() {

  return (
    <div>
      <Header />
      <main>
        <EmployeeTable />
      </main>
      <Footer />
    </div>
  );
}

export default ListPage;