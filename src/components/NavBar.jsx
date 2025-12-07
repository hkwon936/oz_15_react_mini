import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";

function NavBar() {
  const [searchText, setSearchText] = useState("");
  const debounceSearchText = useDebounce(searchText, 200);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const initialQuery = searchParams.get("query") || "";
    setSearchText(initialQuery);
  }, []);

  useEffect(() => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      if (!debounceSearchText) {
        params.delete("query");
      } else {
        params.set("query", debounceSearchText);
      }
      return params;
    });
  }, [debounceSearchText, setSearchParams]);

  return (
    <nav className="navbar">
      <h1 className="nav_title">
        <Link to="/">🍿Munching Movies</Link>
      </h1>

      <div className="nav_search">
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          className="nav_search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="nav_buttons">
        <button className="nav_login-btn">로그인</button>
        <button className="nav_signup-btn">회원가입</button>
      </div>
    </nav>
  );
}

export default NavBar;
