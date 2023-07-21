import '../assests/css/App.css';
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import AddUser from '../pages/AddUser';
import NotFound from '../pages/NotFound';
import AllUser from '../pages/AllUsers';
import Nav from '../components/Nav'
import EditCard from './EditCard';

function App() {
  return (
    <div className="App">
      <div>
        <Nav />
      </div>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddUser />} />
        <Route path='/users' element={<AllUser />} />
        <Route path='/edit' element={<EditCard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>


    </div>
  );
}

export default App;
