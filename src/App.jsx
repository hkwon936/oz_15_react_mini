import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MovieListPage from './pages/MovieListPage';
import MovieDetail from './components/MovieDetail';

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<MovieListPage />} />
                <Route path="/details" element={<MovieDetail />} />
            </Route>
        </Routes>
    );
}

export default App;