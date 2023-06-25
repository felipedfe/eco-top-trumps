import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GameBoard from './pages/GameBoard/GameBoard';
import StartScreen from './pages/StartScreen/StartScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/gameboard' element={<GameBoard />} />
        <Route path='/' element={<StartScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
