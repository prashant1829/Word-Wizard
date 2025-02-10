import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Footer from './components/Footer';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    console.log("showAlert called:", message, type);
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
      <Navbar title="WordWizard" />
      {alert && (
        <div
          style={{ position: 'fixed', top: '70px', right: '20px', zIndex: 1000 }}
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {alert.message}
        </div>
      )}
        <TextForm  headings="Enter Text" showAlert={showAlert} />
        <Footer />
    </>
  );
}

export default App;
