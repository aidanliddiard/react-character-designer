import './App.css';
import Footer from '../src/Presentational/Footer/Footer';
import Header from '../src/Presentational/Header/Header';
import Main from './View/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
