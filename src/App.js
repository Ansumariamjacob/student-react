import logo from './logo.svg';
import './App.css';
import AddStudent from './component/AddStudent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import SearchStudent from './component/SearchStudent';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<AddStudent/>}/>
        <Route path='/search' exact element={<SearchStudent/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
