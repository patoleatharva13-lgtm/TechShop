export  function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        padding: "15px",
        display: "flex",
        gap: "20px",
      }}
    >
      <a href="/" style={{ color: "white", textDecoration: "none" }}>
        Home
      </a>

      <a href="/about" style={{ color: "white", textDecoration: "none" }}>
        About
      </a>

      <a href="/services" style={{ color: "white", textDecoration: "none" }}>
        Services
      </a>

      <a href="/contact" style={{ color: "white", textDecoration: "none" }}>
        Contact
      </a>
    </nav>
  );
}