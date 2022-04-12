import logo from './logo.svg';
import './App.css';
import Standards from './Standards.js'
import Helmet from 'react-helmet'
import CuteButton from './CuteButton';
function App() {
  return (
   <>
      <Standards />
    <div className="App">
        <header className="App-header">
          <img src="https://bitcoin.org/img/icons/opengraph.png?1648897668" className="App-logo" alt="logo" />
          <p className="name">
            What's the price?
          </p>
       <CuteButton>Get price</CuteButton>
        </header>
       
      </div>
      </>
  );
}

export default App;
