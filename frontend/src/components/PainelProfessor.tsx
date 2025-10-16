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

  const iniciarAula = () => socket.emit("aula.iniciada");
  const encerrarAula = () => socket.emit("aula.encerrada");

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h1>Painel do Professor</h1>

      <div>
        <p>Status da aula: {aulaIniciada ? "🟢 Iniciada" : "🔴 Encerrada"}</p>
        <button onClick={iniciarAula} disabled={aulaIniciada}>
          Iniciar Aula
        </button>
        <button onClick={encerrarAula} disabled={!aulaIniciada}>
          Encerrar Aula
        </button>
      </div>

      {aulaIniciada && (
        <div >
          <h3>Alunos Presentes:</h3>
          <ul>
            {alunos.map((aluno, i) => (
              <li key={i}>{aluno}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}