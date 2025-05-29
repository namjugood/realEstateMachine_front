import { Link, Outlet } from 'react-router-dom';
import './assets/css/App.css';

function App() {
  return (
    <div className="app">
      <nav>
        <ul>
          <li><Link to="/">홈</Link></li>
          <li><Link to="/properties">매물 목록</Link></li>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
