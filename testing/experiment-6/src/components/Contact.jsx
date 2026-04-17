export default function Contact() {
  return (
    <div
      style={{ maxWidth: "600px", margin: "5rem auto", textAlign: "center" }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Project Repository
      </h2>
      <p style={{ color: "#666", marginBottom: "2rem" }}>
        Explore the full documentation and source code for the FSD-II
        experiments.
      </p>
      <a
        href="https://github.com/Pratyush00100/FSD2"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "1rem 2rem",
          border: "1px solid #000",
          color: "#000",
          textDecoration: "none",
          fontWeight: "600",
          letterSpacing: "1px",
        }}
      >
        VIEW ON GITHUB
      </a>
    </div>
  );
}
