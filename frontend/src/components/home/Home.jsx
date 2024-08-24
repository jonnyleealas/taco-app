import './home.css';  // Import custom styles for the home page
import Header from './Header/Header';  // Correctly import Header component
import Main from './Main/Main';        // Correctly import Main component
import Footer from './Footer/Footer';  // Correctly import Footer component


function Home() {
  return (
    <div className="home">
      <Header />  {/* Render the Header component */}
      <Main />    {/* Render the Main component */}
      <Footer />  {/* Render the Footer component */}
    </div>
  );
}

export default Home;
