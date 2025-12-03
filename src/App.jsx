import { Routes, Route } from 'react-router-dom';
import MovieListPage from './pages/MovieListPage';
import MovieDetail from './components/MovieDetail';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MovieListPage />} />
            <Route path="/details" element={<MovieDetail />} />
        </Routes>
    );
}

export default App;