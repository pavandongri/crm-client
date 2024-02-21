import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login.js';
import Registration from './components/Registration.js';
import NavBar from './components/Navbar.js';
import Home from './components/Home.js';
import Logout from './components/Logout.js';
import Contacts from './components/Contacts.js'
import ContactDetails from './components/ContactDetails.js';
import ContactCreate from './components/ContactCreate.js';
import Meetings from './components/Meetings.js';
import MeetingDetails from './components/MeetingDetails.js';
import MeetingCreate from './components/MeetingCreate.js';
import Profile from './components/Profile.js'
import PrivateRoute from './components/PrivateRoute.js';


const App = () => {

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/home' element={<PrivateRoute> <Home /> </PrivateRoute>} />
          <Route path='/logout' element={<PrivateRoute> <Logout /> </PrivateRoute>} />
          <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path='/contacts' element={<PrivateRoute><Contacts /></PrivateRoute>} />
          <Route path='/contact/new/create' element={<PrivateRoute><ContactCreate /></PrivateRoute>} />
          <Route path='/contact/:id' element={<PrivateRoute><ContactDetails /></PrivateRoute>} />
          <Route path='/meetings' element={<PrivateRoute><Meetings /></PrivateRoute>} />
          <Route path='/meeting/:id' element={<PrivateRoute><MeetingDetails /></PrivateRoute>} />
          <Route path='/meeting/create' element={<PrivateRoute><MeetingCreate /></PrivateRoute>} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
