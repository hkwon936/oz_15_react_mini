import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PageHome from "./pages/PageHome";
import PageDetail from "./pages/PageDetail";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<PageHome />} />
        <Route path="details/:id" element={<PageDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
