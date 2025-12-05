function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="nav_title">
        🍿Munching Movie
      </h1>

      <div className="nav_search">
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          className="nav_search-input"
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
