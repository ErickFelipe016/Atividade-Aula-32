// ============================================================
// src/routes/notasRoutes.ts — Rotas do Portal de Notas
// ============================================================

import { Router, Request, Response } from "express";

export const notasRoutes = Router();

// ============================================================
// 🎯 ROTA 1: GET / — Página de login
// Ler flash, consumir (null), renderizar "index" com { flash }
// ============================================================
notasRoutes.get("/", (req: Request, res: Response) => {
  // 🎯 TODO 4: ler e consumir flash, renderizar "index"
  res.render("index", { flash: null });
});

// ============================================================
// 🎯 ROTA 2: POST /entrar — Salvar nome na session
// Se vazio: flash de erro + redirect /
// Se ok: session.aluno = nome, session.notas = [], flash boas-vindas
// ============================================================
notasRoutes.post("/entrar", (req: Request, res: Response) => {
  // 🎯 TODO 5: validar nome, salvar na session, redirecionar
  res.redirect("/");
});

// ============================================================
// 🎯 ROTA 3: GET /boletim — Página principal (protegida!)
// Se !session.aluno: flash "Faça login!" + redirect /
// Calcular média e situação, ler/consumir flash
// Renderizar "boletim" com { aluno, notas, media, situacao, flash }
// ============================================================
notasRoutes.get("/boletim", (req: Request, res: Response) => {
  // 🎯 TODO 6: verificar login, calcular média/situação, renderizar
  res.redirect("/");
});

// ============================================================
// 🎯 ROTA 4: POST /nota — Adicionar nota ao array
// Validar 0-10, push em session.notas, flash "Nota X adicionada!"
// ============================================================
notasRoutes.post("/nota", (req: Request, res: Response) => {
  // 🎯 TODO 7: validar, adicionar, flash, redirecionar
  res.redirect("/boletim");
});

// ============================================================
// 🎯 ROTA 5: POST /limpar — Zerar notas
// session.notas = [], flash "Notas zeradas!"
// ============================================================
notasRoutes.post("/limpar", (req: Request, res: Response) => {
  // 🎯 TODO 8: zerar, flash, redirecionar
  res.redirect("/boletim");
});

// ============================================================
// 🎯 ROTA 6: GET /sair — Destruir session
// req.session.destroy(() => res.redirect("/"))
// ============================================================
notasRoutes.get("/sair", (req: Request, res: Response) => {
  // 🎯 TODO 9: destruir session
  res.redirect("/");
});
