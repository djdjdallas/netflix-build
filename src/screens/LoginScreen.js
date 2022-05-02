import React, {useState } from 'react';
import "./LoginScreen.css";
import SignInScreen from './SignInScreen';

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);



    return (
    <div className='login_screen'>
        <div className='login_screen_background'>
        <img className='loginScreen_logo' src="net-logo.png"
                        alt="net_logo"></img>
            
                    <button  onClick={() => setSignIn(true)} className='loginScreen_button'>SIgn In</button>
                    <div className='loginScreen_body'>
                        {signIn ? ( <SignInScreen />
                        ) : ( 
                        <>
                            <h1>Unlimited films, TV programs and 
                            more.</h1>
                            <h2 >Watch Anywhere. cancel at any time.</h2>
                            <h3> Ready to watch? Enter your email to create or restart your membership</h3>
                            <div className='loginScreen_input'>
                                <form>
                                    <input type="email" placeholder='Email Address'/>
                                    <button onClick={() => setSignIn(true)} className='loginScreen_getStarted'>Get Started</button>
                                </form>
                            </div>
                        </>
                        )}
                    </div>
        </div>
    
    </div>
  )
}

export default LoginScreen