/*
	jsrepo 1.28.2
	Installed from https://reactbits.dev/default/
	22-01-2025
*/

import './StarBorder.scss';

import React from 'react';

const StarBorder: React.FC<{
  as?: React.ElementType;
  className?: string;
  color?: string;
  speed?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}> = ({
  as: Component = 'button',
  className = '',
  color = 'white',
  speed = '6s',
  children,
  ...rest
}) => {
  return (
    <Component className={`star-border-container ${className}`} {...rest}>
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default StarBorder;
