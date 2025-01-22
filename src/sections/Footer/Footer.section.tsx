import React from 'react';
import './Footer.scss'
import SplitText from '../../blocks/TextAnimations/SplitText/SplitText';

export const Footer: React.FC = () => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  }


  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <SplitText
            text="Sobre Mim"
            className="title"
            delay={150}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          

          <SplitText
            text={(
            <>
              Acredito que a tecnologia tem o poder de transformar vidas e resolver problemas reais, tornando o mundo mais conectado e acessível. Meu propósito é usar o desenvolvimento de software para simplificar o complexo e criar experiências digitais que impactem positivamente as pessoas.
              <br/><br/>
              Faço isso utilizando ferramentas modernas como Next.js, React.js, TypeScript, Docker e Azure DevOps, sempre focado em colaboração, escalabilidade e uma abordagem centrada no usuário.
              <br/><br/>
              Como resultado, desenvolvo soluções digitais robustas e intuitivas que ajudam empresas a se destacarem no mercado, enquanto proporcionam experiências rápidas, eficientes e envolventes para os usuários finais. Em essência, transformo ideias em ferramentas que conectam, resolvem e inspiram.
            </>
            )}
            className="description"
            delay={150}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
            />
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
