import MovieDetail from "../components/MovieDetail";
import { useParams } from "react-router-dom";

function PageDetail() {
  const { id } = useParams();

  return (
    <main className="px-6 py-10">
      <MovieDetail id={id} />
    </main>
  );
}
export default PageDetail;
