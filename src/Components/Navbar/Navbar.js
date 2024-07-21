import React from 'react'
import Logo from '../assets/smit-logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
         
         <div className='container'>
 <img className=' logo' src={Logo} alt="" />
  <h2 className='heading'>Signup</h2>
  <hr />
         </div>
         <div className='page'>
         <div className="Container1">
            <h1>Quiz Application</h1>
            <h2>Sylani  Mass It Training Progaram</h2>
            <h3>Saylani Mass IT Training program is an institute that delivers the latest IT education (FREE OF COST).</h3>

 <h4>Saylani Mass Training Department is one of the departments that is running under Saylani Welfare Trust Management. </h4>
 <div className="btn">
   <button>Student </button>
   <button>Teacher</button>
   <button>Admin</button>
</div>
         </div>
</div>

    </div>
  )
}

export default Navbar
