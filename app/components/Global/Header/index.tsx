import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <div>
      <header className="header-container">
        <span className="header-logo">
          <Link to="/" title="Untools" aria-label="Untools">
            <span>untools</span>
          </Link>
        </span>
        <span className="header-links">
          <Link to="/about" title="About" aria-label="About">
            <span>About</span>
          </Link>
          <Link to="/app" title="App" aria-label="App">
            <span>App</span>
          </Link>
          <Link to="/templates" title="Templates" aria-label="Templates">
            <span>Templates</span>
          </Link>
          <Link to="/tools-guide" title="Tools Guide" aria-label="Tools Guide">
            <span>Tools Guide</span>
          </Link>
        </span>
      </header>
    </div>
  );
}
