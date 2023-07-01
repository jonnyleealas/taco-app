import SignUp from './sign-up-card/Sign-Up-Card'
import SignIn from './sign-in/Sign-In'
import tacoPic from './images/tacoImage.jpg'
import './login-page.css'


const signOnPage = () => {
    return (
        <div className='sign-on-page'>
            <SignUp />
            <img className='taco-image' src={tacoPic} alt='tacos' />
            {/* <SignIn /> */}
        </div>
    )
}

export default signOnPage