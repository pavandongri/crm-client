import React, { useState } from 'react';
import axios from '../api.js';
import { useEffect } from 'react';

const Logout = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {

    try {
      setIsLoading(true);
      await axios.delete('/logout');
      localStorage.removeItem('token')
    } catch (error) {
      console.error('Error logging out:', error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        localStorage.removeItem('token');
        window.location.href = '/login';
      }, 1000);
    }
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '5%', color: '#535C91', fontSize: '35px', fontWeight: 'bolder' }}><h1>Logging out...</h1></div>
      <h1 style={{ textAlign: 'center', marginTop: '50px' }}>
        {isLoading ? (
          <div className='spinner-border' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        ) : (
          'Logout'
        )}
      </h1>
    </>

  );
};


export default Logout;
