import React from 'react';


function Footer() {
  return (
    <footer className={`py-3 mt-auto bg-dark text-light`}>
      <div className="container text-center">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} WordWizard. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;