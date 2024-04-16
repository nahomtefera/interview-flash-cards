import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
// Components
import FlashCards from './components/FlashCards'

function App() {

  const [theme, setTheme] = useState(document.body.getAttribute('data-theme'))

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', currentTheme);
  }, []);

  const toggleTheme = () => {
    const currentTheme = document.body.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  const ThemeButton = () => {
    return (
      <button onClick={toggleTheme} className="uk-button uk-button-default">
          {
            theme === 'light'
              ? 'Dark'
              : 'Light'
          }
      </button>
    )
  }

  return (
    <div className="App">
      <div className='uk-section '>
        <ThemeButton />
        <div className='uk-container uk-height-viewport uk-flex uk-flex-middle'>
          <FlashCards />
        </div>
      </div>
    </div>
  );
}

export default App;
