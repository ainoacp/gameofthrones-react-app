import './App.css';
import './pages/HomePage/HomePage';
import './pages/CharacterPage/CharacterPage';
import './pages/CharactersPage/CharactersPage';
import './pages/TimelinePage/TimelinePage';
import './pages/HousesPages/HousesPages';
import './pages/HousePage/HousePage';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import CharacterPage from './pages/CharacterPage/CharacterPage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import TimelinePage from './pages/TimelinePage/TimelinePage';
import HousesPage from './pages/HousesPages/HousesPages';
import HousePage from './pages/HousePage/HousePage';
import { Context } from "./context/Context";
import { useTranslation } from 'react-i18next';

function App() {
  const {t,i18n} = useTranslation(['translation'])
  const changeLanguaje = (code) => {
    i18n.changeLanguage(code);
  }

  return (
    <Context.Provider value={{t,changeLanguaje}}>
      <div className="App">
        <Router>
          <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/characters' element={<CharactersPage/>} />
              <Route path='/characters/:name' element={<CharacterPage/>} />
              <Route path='/timeline' element={<TimelinePage/>} />
              <Route path='/houses' element={<HousesPage/>} />
              <Route path='/houses/:name' element={<HousePage/>} />
          </Routes>
        </Router>
      </div>
    </Context.Provider>
  );
}

export default App;
