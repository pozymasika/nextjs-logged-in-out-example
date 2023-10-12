export default function Nav() {
  return (
    <nav>
      <div className="nav-items">
        <a href="#" className="flex items-center">
          <img src="/static/logo.svg" className="h-8 mr-3" alt="Logo" />
        </a>
        <a type="button" href="/login" className="login-link">
          Log In
        </a>
      </div>
    </nav>
  );
}
