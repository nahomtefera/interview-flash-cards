import logo from './logo.svg';
import './App.css';
// Components
import FlashCards from './components/FlashCards'

function App() {
  return (
    <div className="App">
      <div className='uk-section '>
        <div className='uk-container uk-height-viewport uk-flex uk-flex-middle'>
          <FlashCards />
        </div>
      </div>
    </div>
  );
}

export default App;
