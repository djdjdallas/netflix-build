
import React, { useState, useEffect} from 'react';
import "./nav.css"

function Nav() {
    const [show, handleShow] = useState(false);
    

    const transitionNavBar = () => {
        if (window.scrollY > 250 ){
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
      window.addEventListener('scroll', transitionNavBar);
    
      return () => window.removeEventListener("scroll", transitionNavBar);
      
    }, []);
    
        return (
            
            <div className={`'nav' ${show && 'nav_black'}`}>
                    <div className='nav_contents'>
                        <img className='nav_logo' src="net-logo.png"
                        alt="netflix_logo"></img>
                        <img className='nav_avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                            alt="user_avatar">
                        </img>
                    </div>
                </div>
        );
    }

 
export default Nav;