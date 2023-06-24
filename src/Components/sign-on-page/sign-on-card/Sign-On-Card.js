import './sign-on-card.css'
import tacoImage from '../images/tacoImage.jpg'
const SignOn = () => {
    return (
        <div className="sign-on-card">
            <div>

                <h1>
                    Create your account
                </h1>
                <p className='free-trial'>
                    Let's get started with your 30 days free trial
                </p>
                

            <input className='input-bar' type="text" placeholder=" Google"></input>
                <hr className='hr-text' data-content='or'></hr>
    
            </div>
            <div>
                <div className='name'>
                    Name
                </div>
                <input className='input-bar' type="text" placeholder=" Name"></input>
            </div>
            <div>
                <div className='name'>
                    Email
                </div>
                <input className='input-bar' type='text' placeholder=" Email"></input>
            </div>
            <div>
                <div className='name'>
                    Password
                </div>
                <input className='input-bar' type="text" placeholder=" Password"></input>
            </div>
            <div className='check-box'>
                <span>
                    <input type="checkbox" checked="checked"></input>
                </span>
                <span>
                    <p>
                        I agree to all Term, Privacy Policy and Fees
                    </p>
                </span>
            </div>
            <div>
                <button className='input-bar'>Sign Up</button>
            </div>
            <div>
                Already have an account? Log In -link-
            </div>
        </div>
    )
}

export default SignOn