import React from 'react';
import './Footer.scss'
import SplitText from '../../blocks/TextAnimations/SplitText/SplitText';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  }
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <SplitText
            text={t('about-me')}
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
              {t('believe-on-tech')}
              <br/><br/>
              {t('make-with-tools')}
              <br/><br/>
              {t('showing-results')}
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
          <h2>{t('contact')}</h2>
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
        <p>&copy; {new Date().getFullYear()} João. {t('legal-rights')}.</p>
      </div>
    </footer>
  );
}
