import './App.css';
import './pages/HomePage/HomePage';
import './pages/CharacterPage/CharacterPage';
import './pages/CharactersPage/CharactersPage';
import './pages/CronologyPage/CronologyPage';
import './pages/HousesPages/HousesPages';
import './pages/HousePage/HousePage';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import CharacterPage from './pages/CharacterPage/CharacterPage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import CronologyPage from './pages/CronologyPage/CronologyPage';
import HousesPage from './pages/HousesPages/HousesPages';
import HousePage from './pages/HousePage/HousePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/' element={<HomePage></HomePage>} />
            <Route path='/characters' element={<CharactersPage></CharactersPage>} />
            <Route path='/characters/:name' element={<CharacterPage></CharacterPage>} />
            <Route path='/cronology' element={<CronologyPage></CronologyPage>} />
            <Route path='/houses' element={<HousesPage></HousesPage>} />
            <Route path='/houses/:name' element={<HousePage></HousePage>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
