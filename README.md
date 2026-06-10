# 📝 Portal de Notas — Prática Aula 32

Portal com sessions: login, adicionar notas, ver boletim com média e situação.

## Como executar
```bash
npm install
npm run dev
```

## 9 TODOs para completar
1-2. src/app.ts — importar e configurar express-session
3. src/types/session.d.ts — declare module (aluno, notas, flash)
4-9. src/routes/notasRoutes.ts — 6 rotas com session + flash

## Rotas
| Método | Rota | Ação |
|--------|------|------|
| GET | / | Login |
| POST | /entrar | Salvar aluno na session |
| GET | /boletim | Notas + média + situação |
| POST | /nota | Adicionar nota (0-10) |
| POST | /limpar | Zerar notas |
| GET | /sair | Destruir session |
