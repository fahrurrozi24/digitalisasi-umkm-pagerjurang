import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          Pagerjurang
        </Link>

        {/* Tombol Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Menu */}
        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/profile" onClick={() => setMenuOpen(false)}>
            Profil
          </Link>

          <Link to="/umkm" onClick={() => setMenuOpen(false)}>
            UMKM
          </Link>

          <Link to="/tourism" onClick={() => setMenuOpen(false)}>
            Wisata
          </Link>

          <Link to="/news" onClick={() => setMenuOpen(false)}>
            Berita
          </Link>

          <Link to="/gallery" onClick={() => setMenuOpen(false)}>
            Galeri
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Kontak
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;