import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

export default function SalaDeAula() {
  const [aulaIniciada, setAulaIniciada] = useState(false);
  const [alunos, setAlunos] = useState<string[]>([]);
  const [mensagem, setMensagem] = useState("");
  const [nomeAluno, setNomeAluno] = useState("");

  useEffect(() => {
    socket.on("estadoInicial", (estado: { aulaIniciada: boolean; alunosPresentes: string[] }) => {
      setAulaIniciada(estado.aulaIniciada);
      setAlunos(estado.alunosPresentes);
    });

    socket.on("aula.iniciada", () => {
      setAulaIniciada(true);
      setAlunos([]);
    });

    socket.on("aluno.presente", (lista: string[]) => {
      setAlunos(lista);
    });

    socket.on("aula.encerrada", () => {
      setAulaIniciada(false);
    });

    socket.on("notificacao.emitida", (msg: string) => {
      setMensagem(msg);
      setTimeout(() => setMensagem(""), 3000);
    });

    return () => {
      socket.off("estadoInicial");
      socket.off("aula.iniciada");
      socket.off("aluno.presente");
      socket.off("aula.encerrada");
      socket.off("notificacao.emitida");
    };
  }, []);

  const marcarPresenca = () => {
    if (nomeAluno.trim() !== "") {
      socket.emit("aluno.presente", nomeAluno);
      setNomeAluno("");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h1>Confirmar presença</h1>

      <div>
        <p>Status da aula: {aulaIniciada ? "🟢 Iniciada" : "🔴 Encerrada"}</p>
      </div>

      {aulaIniciada && (
        <div style={{ marginTop: 20 }}>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={nomeAluno}
            onChange={(e) => setNomeAluno(e.target.value)}
          />
          <button onClick={marcarPresenca}>Marcar Presença</button>
        </div>
      )}

      {mensagem && <p style={{ color: "blue" }}>{mensagem}</p>}

    </div>
  );
}