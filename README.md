# 🏫 Monitoramento de Sala de Aula — Programação Orientada a Eventos

**Disciplina:** Linguagem de Programação e Paradigmas  
**Professor:** Esp. Ademar Perfoll Junior  
**Curso:** Sistemas de Informação  
**Aluno:** [@joaoppiresferretti](https://github.com/joaoppiresferretti)

---

## 🎯 Objetivo do Projeto
Este projeto aplica o paradigma de **Programação Orientada a Eventos** em uma aplicação **web em tempo real**, utilizando **Socket.IO**, **Node.js** e **React**.  

O sistema simula o **monitoramento de uma sala de aula**, permitindo ao professor iniciar e encerrar uma aula, enquanto os alunos marcam presença.  
Todas as ações geram **eventos em tempo real**, refletidos instantaneamente para todos os usuários conectados.  

---

## 🧠 Conceito de Orientação a Eventos
A aplicação segue os princípios do paradigma **orientado a eventos**, utilizando:
- **Emissão de eventos (`emit`)**
- **Escuta de eventos (`on`)**
- **Encadeamento de eventos** entre cliente e servidor
- **Atualizações em tempo real** via WebSocket  

---

## ⚙️ Funcionalidades Implementadas

### 👨‍🏫 Painel do Professor
- Inicia e encerra a aula (`aula.iniciada`, `aula.encerrada`)
- Visualiza a lista de alunos presentes
- Recebe notificações em tempo real de novas presenças

### 👩‍🎓 Painel do Aluno
- Marca presença ao entrar (`aluno.presente`)
- Visualiza o status da aula (em andamento ou encerrada)
- Recebe avisos enviados pelo professor (`notificacao.emitida`)

---

## 🧩 Eventos Implementados

| Evento                | Origem     | Descrição |
|------------------------|------------|------------|
| `aula.iniciada`        | Servidor   | Indica que o professor iniciou a aula |
| `aluno.presente`       | Cliente    | Indica que o aluno marcou presença |
| `notificacao.emitida`  | Servidor   | Envia uma mensagem para todos os usuários conectados |
| `aula.encerrada`       | Servidor   | Encerra a aula e indica que a aula terminou |

---

## 🏗️ Estrutura do Projeto

sala_inteligente/
├── backend/
│ ├── src/
│ │ └── index.ts # Servidor Node.js com Socket.IO
│ ├── package.json
│ └── tsconfig.json
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── PainelAluno.tsx
│ │ │ ├── PainelProfessor.tsx
│ │ └── App.tsx
│ ├── package.json
│ └── tsconfig.json
│
└── README.md


---

## 💻 Tecnologias Utilizadas
- **Node.js**  
- **Express.js**  
- **Socket.IO** (comunicação em tempo real)  
- **React.js (TypeScript)**  
- **Nodemon + ts-node**  

---

## 🚀 Como Executar o Projeto

### 🔧 Backend (Servidor)
```bash
cd backend
npm install
npm start

Servidor será iniciado em http://localhost:4000
💻 Frontend (Cliente)

Em outro terminal:

cd frontend
npm install
npm start

Aplicação será iniciada em http://localhost:3000
🧾 Fluxo de Funcionamento

    O professor clica em "Iniciar Aula", emitindo o evento aula.iniciada.

    Os alunos conectados recebem o aviso e podem clicar em "Marcar Presença", emitindo aluno.presente.

    O servidor atualiza todos os clientes em tempo real com a nova lista de presenças.

    O professor pode enviar uma notificação (notificacao.emitida).

    Ao encerrar a aula, é emitido aula.encerrada.

👨‍💻 Desenvolvido por

João Pedro Pires Ferretti