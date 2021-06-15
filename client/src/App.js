import Navbar from './components/Navbar';
import Routes from './components/Routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes />
      </div>
    </div>
  );
}

export default App;
