import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MovieDetail from './components/MovieDetail';

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/details" element={<MovieDetail />} />
            </Route>
        </Routes>
    );
}

export default App;