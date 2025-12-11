import React from "react";
import Navbar from "../components/Navbar";

const Sobre = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(180deg, #f2d7b5, #e6c295)",
        paddingBottom: "50px",
      }}
    >
      <Navbar />

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "40px 20px",
        }}
      >
        {/* Título */}
        <h1
          style={{
            textAlign: "center",
            fontSize: "2.8rem",
            color: "#8B4513",
            fontWeight: "800",
            textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
            marginBottom: "40px",
          }}
        >
          Sobre a Laço Eterno
        </h1>

        {/* CARD 1 */}
        <div
          style={{
            background: "#fff5e1",
            border: "3px solid #8B4513",
            borderRadius: "18px",
            padding: "25px",
            marginBottom: "35px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          <h2 style={{ color: "#8B4513", fontWeight: "700" }}>Nossa História</h2>
          <p style={{ fontSize: "1.1rem", color: "#4b3a2f" }}>
            A <strong>Laço Eterno</strong> nasceu da tradição, cultura e ancestralidade que atravessam gerações. 
            Cada laço criado carrega um pedaço da nossa história, feito à mão com cuidado e respeito pela cultura 
            afro-brasileira. Um legado que nos inspira diariamente.
          </p>
        </div>

        {/* CARD 2 */}
        <div
          style={{
            background: "#fff5e1",
            border: "3px solid #8B4513",
            borderRadius: "18px",
            padding: "25px",
            marginBottom: "35px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          <h2 style={{ color: "#8B4513", fontWeight: "700" }}>
            Missão, Visão e Valores
          </h2>

          <ul style={{ fontSize: "1.1rem", color: "#4b3a2f" }}>
            <li>
              <strong>Missão:</strong> Honrar e representar a cultura afro-brasileira através de laços crioulos artesanais.
            </li>
            <li>
              <strong>Visão:</strong> Ser referência nacional em acessórios culturais.
            </li>
            <li>
              <strong>Valores:</strong> Autenticidade, Respeito, Empoderamento, Tradição e Qualidade.
            </li>
          </ul>
        </div>

        {/* CARD 3 */}
        <div
          style={{
            background: "#fff5e1",
            border: "3px solid #8B4513",
            borderRadius: "18px",
            padding: "25px",
            marginBottom: "35px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          <h2 style={{ color: "#8B4513", fontWeight: "700" }}>
            Nosso Compromisso
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#4b3a2f" }}>
            Os laços crioulos representam força, ancestralidade e identidade. Nosso compromisso é manter viva essa cultura tão rica, 
            transformando cada peça em um símbolo de orgulho, resistência e história.
          </p>
        </div>

        <footer
          style={{
            textAlign: "center",
            marginTop: "50px",
            color: "#5a3b29",
            fontWeight: "600",
          }}
        >
          © 2025 Laço Eterno — Tradição que atravessa gerações.
        </footer>
      </div>
    </div>
  );
};

export default Sobre;
