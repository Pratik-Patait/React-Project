// import Navbar from './components/Navbar';
import LoginPage from'./pages/LoginPage/LoginPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import './App.css'
import {Route,Routes,Link} from 'react-router-dom'


function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#333', color: 'white', display: 'flex', gap: '1rem' }}>
      {/* 2. Use the <Link> component for navigation instead of <a> tags */}
      <Link to="/" style={{ color: 'white' }}>Home</Link>
      <Link to="/login" style={{ color: 'white' }}>Login</Link>
      <Link to="/dashboard" style={{ color: 'white' }}>Dashboard</Link>
    </nav>
  );
}
function App() {
 const loggedInUser = {
    name: 'Anjali'
  };
  return (
  //  <div className='App'>
   
  //   <main>
  //     <h1>Welcome to GoCar!</h1>
  //     <p>Your journey starts here.</p>
  //   </main>
  //  </div>
    <div>
      {/* <Navbar /> */}
      /* <Routes>
      <Route path='/' element={<LoginPage />} 
      />
      </Routes> */
    
      <Routes>
        <Route path='/dashboard' element={<DashboardPage user={loggedInUser} />} />
      </Routes>
    </div>
    

  );
}

export default App;
