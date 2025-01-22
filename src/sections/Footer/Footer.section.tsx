import React from 'react';
import './Footer.scss'

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Sobre Mim</h2>
          <p>
            Sou um entusiasta de tecnologia com sólida experiência em desenvolvimento de software, especializado em front-end e focado em criar soluções digitais escaláveis, eficientes e centradas no usuário. Minha expertise inclui Next.js, React.js, TypeScript, e ferramentas modernas como Docker e Azure DevOps, que aplico para transformar ideias em produtos robustos e de alto impacto.
          </p>
        </div>

        <div className="footer-section contact">
          <h2>Contato</h2>
          <div>
            <p>
              Email:
              <a href="mailto:joaoviniciusvitral@hotmail.com">
                joaoviniciusvitral@hotmail.com
              </a>
            </p>
            <p>
              LinkedIn:
              <a href="https://www.linkedin.com/in/joao-vinicius-vitral/" target="_blank" rel="noopener noreferrer">
                @joao-vinicius-vitral
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} João. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
