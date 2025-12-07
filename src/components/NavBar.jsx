import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";

function NavBar() {
  const [searchText, setSearchText] = useState("");
  const debounceSearchText = useDebounce(searchText, 500);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (debounceSearchText === "") {
      searchParams.delete("query");
      setSearchParams(searchParams);
      return;
    }
    setSearchParams({ query: debounceSearchText });
  }, [debounceSearchText]);

  return (
    <nav className="navbar">
      <h1 className="nav_title">🍿Munching Movie</h1>

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
