function Home() {
  return (
    <div className="home-page">
      <div className="home-card">
        <h1>Welcome to Notes App</h1>
        <p>Please login or register to continue</p>

        <div className="home-actions">
          <a href="/login">
            <button className="home-btn">Login</button>
          </a>

          <a href="/register">
            <button className="home-btn">Register</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
