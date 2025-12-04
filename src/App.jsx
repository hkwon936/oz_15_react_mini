//잇츠 라잌 Route 집합소
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MovieListPage from './pages/Home';
import MovieDetail from './components/MovieDetail';

function App() {
    return (
        <Routes>
            <Route element={<Layout />}> {/* 부모 라우트!! 이 안에 있는 라우트들은 모두 자식 라우트(얘네의 컴포넌트들이 실제로 렌더링 됨) */}
                <Route index element={<MovieListPage />} /> {/* index는 부모 라우트의 기본 페이지를 의미하지만 /만 쓰면 절대 경로의 루트에 매칭함. 해당 플젝에서는 중첩 라우팅 구조이기 때문에 index가 맞음*/}
                <Route path="details" element={<MovieDetail />} />
            </Route>
        </Routes>
    );
}

export default App;