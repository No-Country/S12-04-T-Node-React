
function App() {
  return (
    <div
      className="p-5 flex flex-col gap-4"
    >
      <h1 style={{ textAlign: "center" }} className="text-2xl bg-red-500 p-6 hover:bg-yellow-500 md:text-sm">
        --font-primary h1,h2 y h3 (títulos y subtítulos de ejemplo)
      </h1>
      <p className="p-[10px] my-[2rem] cl-primary font-bold">
        `--font-secondary` Fuente secundaria, heredada de body
      </p>

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

      <div style={{ display: "flex", gap: "2rem" }}>
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
      <div className="h-[200px] bg-red-600 w-[200px] absolute right-2 bottom-2 flex justify-center items-center hover:text-white">
        <h1>Hola</h1>
      </div>
    </div>
  );
}

export default App;
