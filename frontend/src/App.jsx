
function App() {
  return (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <h1>--font-primary h1,h2 y h3 (títulos y subtítulos de ejemplo)</h1>
      <p>`--font-secondary` Fuente secundaria, heredada de body</p>

      <div style={{ display: "flex", gap: "2rem" }}>
        <div
          style={{ height: "200px", width: "200px", padding: "2rem" }}
          className="bg-primary"
        >
          <p className="cl-secondary">bg-pramiry + cl-secondary</p>
        </div>

        <div
          style={{ height: "200px", width: "200px", padding: "2rem" }}
          className="bg-secondary"
        >
          <p className="cl-primary">bg-secondary + cl-primary</p>
        </div>
      </div>

      <div
        style={{ display: 'flex', gap:"2rem" }}
      >
        <div
          style={{ height: "200px", width: "200px", padding: "2rem" }}
          className="bs-light"
        >
          bs-light
        </div>
        <div
          style={{ height: "200px", width: "200px", padding: "2rem" }}
          className="bs-dark"
        >
          bs-dark
        </div>
      </div>
    </div>
  );
}

export default App;
