# 🎓 Monitoramento de Sala de Aula — Programação Orientada a Eventos

Trabalho desenvolvido para a disciplina **Linguagem de Programação e Paradigmas**  
Professor: **Esp. Ademar Perfoll Junior**  
Curso: **Sistemas de Informação**  
Data de entrega: 13/10/2025  
Desenvolvido por: **@teu_usuario_github**

---

## 🧠 Tema
**Monitoramento de Sala de Aula (presenças e avisos)**

O sistema simula uma sala de aula onde:
- O **professor** pode iniciar e encerrar a aula;
- Os **alunos** podem marcar presença;
- Todos os usuários veem as atualizações **em tempo real**;
- O professor pode emitir **notificações** gerais;
- Ao final, é possível visualizar um **relatório** com presenças e horários.

---

## ⚙️ Tecnologias utilizadas

- Node.js  
- TypeScript  
- React (Vite ou Create React App)  
- Socket.IO (para eventos em tempo real)  
- Nodemon (para auto-reload do servidor)

---

## 🔄 Eventos implementados

| Evento | Origem | Descrição |
|--------|---------|-----------|
| `aula.iniciada` | Servidor | Indica o início da aula |
| `aluno.presente` | Cliente (aluno) | Aluno marca presença |
| `notificacao.emitida` | Servidor | Envia aviso a todos os usuários conectados |
| `aula.encerrada` | Servidor | Finaliza a aula e mostra relatório |

---

## 🧩 Fluxo do sistema

1. O professor clica em **Iniciar Aula** → emite o evento `aula.iniciada`;
2. Alunos conectados recebem a notificação de que a aula começou;
3. Cada aluno pode clicar em **Marcar Presença** → emite `aluno.presente`;
4. O servidor registra o horário e atualiza todos em tempo real;
5. O professor pode enviar **avisos** (evento `notificacao.emitida`);
6. Quando a aula termina, o professor clica em **Encerrar Aula** → emite `aula.encerrada`;
7. Todos veem o **relatório final** com os alunos presentes e horários.

---

## 🚀 Como executar o projeto

### 🔧 Backend
```bash
cd backend
npm install
npx nodemon
