import { Link, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "220px",
          backgroundColor: "#2E7D32",
          color: "white",
          padding: "20px",
        }}
      >
        <h2 style={{ marginBottom: "30px" }}>Admin</h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <Link style={linkStyle} to="/dashboard">
            Dashboard
          </Link>

          <Link style={linkStyle} to="/admin/profile">
            Profil
          </Link>

          <Link style={linkStyle} to="/admin/umkm">
            UMKM
          </Link>

          <Link style={linkStyle} to="/admin/tourism">
            Wisata
          </Link>

          <Link style={linkStyle} to="/admin/news">
            Berita
          </Link>

          <Link style={linkStyle} to="/admin/gallery">
            Galeri
          </Link>

          <Link style={linkStyle} to="/admin/contact">
            Kontak
          </Link>
        </nav>
      </aside>

      {/* Content */}
      <main
        style={{
          flex: 1,
          padding: "30px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

export default AdminLayout;