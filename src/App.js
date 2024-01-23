import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/navigation/Sidebar';
import DoctorList from './components/doc/DoctorList';
import { useSelector } from 'react-redux';
import Login from './components/user/login';
import Register from './components/user/register';
import ReservationList from './components/reservation/ReservationList';
import AddDoctorForm from './components/doc/AddDoctorForm';
import RemoveDoctorsList from './components/doc/RemoveDoctorsList';
import DoctorDetails from './components/reservation/ReserveDoctor';

function App() {
  const isAuthenticated = useSelector((state) => state.users.isAuthenticated);
  const storedEmail = localStorage.getItem('email');

  return (
    <div className="App">
      <Router>
        <Routes>
          {isAuthenticated || storedEmail ? (
            <>
              <Route
                path="/"
                element={
                  <>
                    <Sidebar />
                    <DoctorList />
                  </>
                }
              />
              <Route
                path="/reservation"
                element={
                  <>
                    <Sidebar />
                    <ReservationList />
                  </>
                }
              />

              <Route
                path="/addDoctor"
                element={
                  <>
                    <Sidebar />
                    <AddDoctorForm />
                  </>
                }
              />

              <Route
                path="/deleteDoctor"
                element={
                  <>
                    <Sidebar />
                    <RemoveDoctorsList />
                  </>
                }
              />
              <Route
                path="/reservation/:id"
                element={
                  <>
                    <Sidebar />
                    <DoctorDetails />
                  </>
                }
              />
            </>
          ) : (
            <>
              <Route path="/" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
