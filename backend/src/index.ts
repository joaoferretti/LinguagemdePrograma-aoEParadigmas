import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: "*" },
});

let aulaIniciada = false;
let alunosPresentes: string[] = [];

io.on("connection", (socket) => {
  console.log("Novo usuário conectado:", socket.id);
  socket.emit("estadoInicial", { aulaIniciada, alunosPresentes });
  socket.on("aula.iniciada", () => {
    aulaIniciada = true;
    alunosPresentes = [];
    io.emit("aula.iniciada");
    io.emit("notificacao.emitida", "A aula foi iniciada!");
  });
  socket.on("aluno.presente", (nome: string) => {
    if (aulaIniciada) {
      if(alunosPresentes.includes(nome)) {
          socket.emit("notificacao.emitida", `${nome}, O seu nome já está na lista de presença.`);
      }
      alunosPresentes.push(nome);
      io.emit("aluno.presente", alunosPresentes);
      io.emit("notificacao.emitida", `${nome} marcou presença.`);
    }
  });
  socket.on("aula.encerrada", () => {
    aulaIniciada = false;
    io.emit("aula.encerrada");
    io.emit("notificacao.emitida", "A aula foi encerrada!");
  });
});

httpServer.listen(4000, () => {
  console.log("Servidor rodando na porta 4000");
});