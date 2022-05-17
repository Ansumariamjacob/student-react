import logo from './logo.svg';
import './App.css';
import AddStudent from './component/AddStudent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import SearchStudent from './component/SearchStudent';

function App() {
  return (
    <div >
      <AddStudent/>
      <SearchStudent/>
    </div>
  );
}

export default App;
