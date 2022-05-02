import React, { useRef } from 'react'

import "./SignInScreen.css"


function SignInScreen() {
 

   const register = (e) => {
        e.preventDefault();

        
        
    };

  const signIn = (e) => {
      e.preventDefault();
  };
  
  
    return (
    <div className='signIn_Screen'>
        <form>
            <h1>Sign In</h1>
            <input placeholder='Email' type="email" />
            <input placeholder='Password' type="password" />
            <button type="submit" onClick={signIn} >Sign In</button>
            <h4>
                <span className='signIn_Screen_gray' onClick={register} >New to Netflix? </span> 
                Sign Up Now. 
            </h4>      
        </form>
    </div>
  );
}

export default SignInScreen;