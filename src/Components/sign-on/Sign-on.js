import './sign-on.css'
import tacoImage from '../sign-on/images/tacoImage.jpg'
const SignOn = () => {
    return (
        <div className="sign-on-card">
            <div>

                <h1>
                    Create your account
                </h1>
                <p>
                    Let's get started with your 30 days free trial
                </p>
            </div>
            <div>
                <div>
                    Name
                </div>
                <input className='input-bar' type="text" placeholder=" Name"></input>
            </div>
            <div>
                <div>
                    Email
                </div>
                <input className='input-bar' type='text' placeholder=" Email"></input>
            </div>
            <div>
                <div>
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
            <img className='taco-pic' src={tacoImage} alt='tacos' />
        </div>
    )
}

export default SignOn