import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar'
import Banner from './components/Banner';

import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';



function App() {
  return (

    <div className="App">
      <header>
      </header>
      <body>
        <Banner/>
      </body>
    </div>
  );
}

export default App;
