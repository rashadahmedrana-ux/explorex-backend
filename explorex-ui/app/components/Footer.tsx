export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "50px",
        padding: "20px",
        textAlign: "center",
        background: "#0f172a",
        color: "white",
      }}
    >
      <p>© {new Date().getFullYear()} ExploreX</p>
      <p style={{ fontSize: "14px", color: "#cbd5f5" }}>
        Discover destinations · Plan trips · Travel smarter
      </p>
    </footer>
  );
}
