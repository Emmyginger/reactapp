import logo from './images/logo(2).svg';
import mockup from "./images/illustration-mockups.svg"
import './App.css';

function App() {
  return (
    <>
      <header>
        <img src={logo} alt="logo" />
      </header>
      <main>
        <img src={mockup} alt="mockup" />
        <div className="content">
          <h2>Build the community your fans will love</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autvel
          cumque debitis officia labore mollitia eius nam recusandae quisquam
          eligendi culpa modi?</p>
          <button>Register</button>
        </div>
      </main>
      <footer>
      <i class="fab fa-facebook-f"></i>
      </footer>
    </>
  );
}


export default App;
