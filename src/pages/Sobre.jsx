import React from 'react';
import Navbar from '../components/Navbar';

// Estilos simples em JavaScript para demonstrar
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '0 auto',
    padding: '20px',
    maxWidth: '900px',
  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
  section: {
    marginBottom: '30px',
  },
  subtitle: {
    color: '#555',
    marginBottom: '10px',
  },
  text: {
    color: '#666',
    lineHeight: '1.6',
  },
  footer: {
    textAlign: 'center',
    marginTop: '50px',
    padding: '20px',
    backgroundColor: '#333',
    color: '#fff',
  },
};

const Sobre = () => {
  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.title}>Sobre a [Nome da Empresa]</h1>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>Nossa História</h2>
          <p style={styles.text}>
            A [Nome da Empresa] nasceu da paixão e da tradição de nossa família, com o objetivo de compartilhar com o mundo
            a beleza e a riqueza cultural dos laços crioulos. Nossa história é marcada pela união, pelas raízes fortes da
            nossa ancestralidade e pela dedicação em preservar e valorizar a cultura negra no Brasil.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>Missão, Visão e Valores</h2>
          <ul style={styles.text}>
            <li><strong>Missão:</strong> Valorizar a cultura afro-brasileira por meio da produção de laços crioulos artesanais.</li>
            <li><strong>Visão:</strong> Ser reconhecida como uma marca de referência na produção de laços crioulos.</li>
            <li><strong>Valores:</strong> Autenticidade, Respeito, Empoderamento, Qualidade.</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>Nosso Compromisso com a Cultura</h2>
          <p style={styles.text}>
            Os laços crioulos não são apenas acessórios, são símbolos de resistência, de identidade e de orgulho. Acreditamos
            que é fundamental promover e preservar a cultura afro-brasileira em todos os aspectos de nossas vidas.
          </p>
        </section>

        <footer style={styles.footer}>
          <p>&copy; 2025 [Nome da Empresa]. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
};

export default Sobre;
