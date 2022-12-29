
import {Link, NavLink} from "react-router-dom"
import React from 'react'
import "./nav.css"


export default function Nav() {
  return (
    < > 
       
    <nav className="navbar navbar-expand-lg navbar-light fs-2 ">
    <div className="container-fluid">
        <p className="navbar-brand  fs-3" >Portfolio</p>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse nav-container  " id="navbarSupportedContent">
        
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                    <NavLink to='/' className="nav-link  text-dark hover-underline-animation" aria-current="page" href="#">Home {"    "}</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/crypto' className="nav-link  text-secondary hover-underline-animation" href="#">Cryptocurrency API{"    "}</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/covid' className="nav-link  text-secondary  hover-underline-animation" href="#">Covid API{"    "}</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/emoji' className="nav-link text-secondary  hover-underline-animation" href="#">Emoji API{"    "}</NavLink>
                </li>
              
                <li className="nav-item">
                    <NavLink to='/login' className="nav-link text-dark  hover-underline-animation" href="#">Login</NavLink>
                </li>
                
                

            </ul>

        </div>
    </div>

</nav>
 
    </>
    
  )
}



            

                
         

    
