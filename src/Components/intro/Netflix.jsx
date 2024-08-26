
import './Netflix.css'
import logo from '../../assets/logo.png';
import feature1 from '../../assets/feature-1.png';
import feature2 from '../../assets/feature-2.png';
import feature3 from '../../assets/feature-3.png';
import feature4 from '../../assets/feature-4.png';
import headerImage from '../../assets/header-image.png';
function Netflix() {

  return (
    <div>
      <div>
        <div className="header">
          <nav>
            <img className="logo" src={logo} alt=""></img>
            <div>
              <button className="language-btn">English <img src="images/down-icon.png" alt=""></img></button>
              <button>Sign in</button>
            </div>
          </nav>
          <header
            style={{
              width: '100%',
              height: '100vh',
              backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${headerImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              padding: '10px 8%',
              position: 'relative'
            }}
          >
          </header>
          <div className="header-content">
            <h1>Unlimited movies,TV shows and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <p>Ready to watch? Enter your email to create or respect your membership</p>
            <form className="email-signup">
              <input type="email" placeholder="Email address" required></input>
              <button type="submit">Get Started</button>
            </form>
          </div>
        </div>
        <div className="features">
          <div className="row">
            <div className="text-col">
              <h2>Enjoy on your TV.</h2>
              <p> Watch on smart TVs,PlayStations,Xbox,Chrome,Apple TV,Blu-ray Players and more.</p>
            </div>
            <div className="img-col">
              <img src={feature1} alt=""></img>
            </div>
          </div>
          <div className="row">
            <div className="img-col">
              <img src={feature2} alt=""></img>
            </div>
            <div className="text-col">
              <h2>Download your shows to watch offline</h2>
              <p>Watch on smart TVs,PlayStation,Xbox,Chromecast,Apple TV</p>
            </div>
          </div>
          <div className="row">

            <div className="text-col">
              <h2>Watch everywhere.</h2>
              <p> Stream unlimited movies and TV shows on your phone,tablet,laptop,and TV.</p>
            </div>
            <div className="img-col">
              <img src={feature3} alt=""></img>
            </div>
          </div>
          <div className="row">
            <div className="img-col">
              <img src={feature4} alt=""></img>
            </div>
            <div className="text-col">
              <h2>Create profiles for children.</h2>
              <p> Send children on adventure with their favorite charecters in a space made just for them free with your membership</p>
            </div>

          </div>
          <footer>
        <div class="container">
            <div class="footer-content">
                <h3>Contact Us</h3>
                <p>Email:Netflix@example.com</p>
                <p>Phone:+121 56556 565556</p>
               
            </div>
            <div class="footer-content">
                <h3>Quick Links</h3>
                <ul class="list">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">vehicles</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div class="footer-content">
                <h3>Follow Us</h3>
                <ul class="social-icons">
                    <li><a href=""><i class="fab fa-facebook"></i></a></li>
                    <li><a href=""><i class="fab fa-twitter"></i></a></li>
                    <li><a href=""><i class="fab fa-instagram"></i></a></li>
                    <li><a href=""><i class="fab fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="bottom-bar">
            <p>&copy; 2024 Netf;ix . All rights reserved by aswin!!!!.</p>
        </div>
    </footer>
        </div>
      </div>
    </div>
  )
}

export default Netflix