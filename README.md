# Exemplo CORS (frontend + backend)

Resumo
- Demonstra CORS entre frontend (http://localhost:3000) e backend (http://localhost:8080).

Tecnologias
- Node.js, npm
- Express, cors (backend)
- HTML + JavaScript (frontend)
- serve (opcional)

Arquivos principais
- backend/server.js
- frontend/index.html

Instalação (Windows)
1. Abra PowerShell no diretório do projeto:
   cd cors-atv-pw
2. Instale backend:
   cd backend
   npm install
3. Instale frontend:
   cd ..\frontend
   npm install

Execução
- Backend:
  cd cors-atv-pw\backend
  npm start
- Frontend (novo terminal):
  cd cors-atv-pw\frontend
  npm start
  ou
  npx serve -l 3000

Teste rápido
- Abra http://localhost:3000 e verifique no console do navegador ou em Network.
- Curl:
  curl http://localhost:8081/api/mensagens

Vídeo (YouTube)
- Link do vídeo: https://youtube.com/shorts/_lUeRTWdVPk?feature=share
