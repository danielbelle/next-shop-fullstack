import React from "react";

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "10vh" }}>
      <h1>404.1 - fazer</h1>
      <h2>Página não encontrada</h2>
      <p>A página que você procura não existe.</p>
      <a href="/" style={{ color: "#0070f3", textDecoration: "underline" }}>
        Voltar para a página inicial
      </a>
    </div>
  );
}
