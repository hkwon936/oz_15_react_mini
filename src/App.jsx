import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PageHome from "./pages/PageHome";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<PageHome />} />
        <Route path="details/:id" element={<DetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
