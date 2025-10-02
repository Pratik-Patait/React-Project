import './Navbar.css';
function Navbar() {
  return (
    <nav>
      <a href="/" className="logo">GoCar</a>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/cars">Cars</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;