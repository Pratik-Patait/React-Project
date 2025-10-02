import Navbar from './components/Navbar';
import LoginPage from'./pages/LoginPage/LoginPage';
import './App.css'
import {Route,Routes} from 'react-router-dom'

function App() {
 
  return (
  //  <div className='App'>
  //   <Navbar />
  //   <main>
  //     <h1>Welcome to GoCar!</h1>
  //     <p>Your journey starts here.</p>
  //   </main>
  //  </div>
    <div>
      <Routes>
      <Route path='/' element={<LoginPage />} 
      />
      </Routes>
    </div>

  );
}

export default App;
