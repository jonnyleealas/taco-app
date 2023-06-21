import './sign-on.css'

const SignOn = () => {
    return (
        <div className="sign-on-card">
            <h1>
                Create your account
            </h1>
            <div>
                Or
            </div>
            <div>
                <div>
                    Name
                </div>
                <input type="text" placeholder=" Name"></input>
            </div>
            <div>
                <div>
                    Email
                </div>
                <input type='text' placeholder=" Email"></input>
            </div>
            <div>
                <div>
                    Password
                </div>
                <input type="text" placeholder=" Password"></input>
            </div>
            <div>
                <button>Sign Up</button>
            </div>
        </div>
    )
}

export default SignOn