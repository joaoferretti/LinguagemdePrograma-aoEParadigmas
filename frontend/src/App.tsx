import React from "react";
import PainelAluno from "./components/PainelAluno";
import PainelProfessor from "./components/PainelProfessor";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div style={{ flex: 1, borderStyle: "solid", borderWidth: 1, margin: 10, borderColor: "#ccc", borderRadius: 5 }}>
        <PainelAluno />
      </div>
      <div style={{ flex: 1, borderStyle: "solid", borderWidth: 1, margin: 10, borderColor: "#ccc", borderRadius: 5 }}>
        <PainelProfessor />
      </div>
    </div>
  );
}


export default App;
