import React from "react";
import PainelAluno from "./components/PainelAluno";
import PainelProfessor from "./components/PainelProfessor";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column"}}>
      <div style={{ display: "flex", justifyContent: "space-around", flex: 1 }}>
        <div style={{flex: 1, borderStyle: "solid", borderWidth: 1, margin: 10, borderColor: "#ccc", borderRadius: 5,}}>
          <PainelAluno />
        </div>

        <div
          style={{flex: 1, borderStyle: "solid", borderWidth: 1, margin: 10, borderColor: "#ccc", borderRadius: 5,}}>
          <PainelProfessor />
        </div>
      </div>

      <footer
        style={{marginTop: "auto", textAlign: "center", padding: 10, backgroundColor: "#f5f5f5", borderTop: "1px solid #ccc",}}>
        <p>Desenvolvido por: João Pedro Pires Ferretti</p>
      </footer>
    </div>
  );
}
export default App;