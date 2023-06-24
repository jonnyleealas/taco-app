import './sign-in.css'



const SignUp = () => {
    return (
        <div className="sign-in-card">
            <h1>
                Login to Your Account
            </h1>
            <div>
                Email
                <input type='text' placeholder="  Email"></input>

            </div>
            <div>
                Password
                <input type='text' placeholder="  Password"></input>
            </div>
            <div className='login-check-box'>
            <span className='check'>
                <input type='checkbox' checked='check'></input>
            </span>
            <span className='remember'>
                <p>
                    Remember me
                </p>
            </span>
            <span className='forgot'>
                Forgot Password
            </span>
            </div>
        </div>
    )
}


    export default SignUp