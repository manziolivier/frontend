import React, { useState } from 'react';
import AdminLogin from './Login';
import DoctorSignup from './DoctorSignup';
import DoctorLogin from './DoctorLogin';
import './MultiForm.css'; // Import your CSS file for MultiForm styling

const MultiForm = () => {
  const [activeTab, setActiveTab] = useState('admin');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="multi-form-container">
      <div className="tab-buttons">
        <button
          className={activeTab === 'admin' ? 'active' : ''}
          onClick={() => handleTabChange('admin')}
        >
          Admin Login
        </button>
        <button
          className={activeTab === 'signup' ? 'active' : ''}
          onClick={() => handleTabChange('signup')}
        >
          Doctor Signup
        </button>
        <button
          className={activeTab === 'login' ? 'active' : ''}
          onClick={() => handleTabChange('login')}
        >
          Doctor Login
        </button>
      </div>

      <div className="form-container">
        {activeTab === 'admin' && <AdminLogin />}
        {activeTab === 'signup' && <DoctorSignup />}
        {activeTab === 'login' && <DoctorLogin />}
      </div>
    </div>
  );
};

export default MultiForm;
