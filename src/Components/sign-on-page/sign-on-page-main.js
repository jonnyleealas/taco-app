import SignOnCard from './sign-on-card/Sign-On-Card'
import tacoPic from './images/tacoImage.jpg'
import './sign-on-page.css'


const signOnPage = () => {
    return (
        <div className='sign-on-page'>
            <SignOnCard />
            <img className='taco-image' src={tacoPic} alt='tacos' />
        </div>
    )
}

export default signOnPage