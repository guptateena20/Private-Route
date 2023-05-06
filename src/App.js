
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Contacts from './Components/Contacts';
import Home from './Components/Home';
import Login from './Components/Login';
import Navigation from './Components/Navigation';
import RequireAuth from './Components/RequireAuth';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path = "/" element = {<Navigate replace to = "home"/>}/>
        <Route path="home" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="contact" element={<Contacts />} />
        <Route path="service" element={<Services />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
