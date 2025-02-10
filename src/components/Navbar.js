import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container-fluid d-flex justify-content-center">
    <Link className="navbar-brand text-center" to="/" style={{
  fontFamily: "'Roboto', sans-serif", fontSize: "2rem", letterSpacing: "2px", textTransform: "uppercase", textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
}}>
  {props.title}
</Link>

    </div>
  </nav>
  )
}

export default Navbar

Navbar.propTypes={
    title:PropTypes.string
}