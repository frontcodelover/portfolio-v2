'use client';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: React.ReactNode;
}

const Button = ({ text, icon, ...props }: ButtonProps) => {
  return (
    <button {...props} className={`p-2 rounded ${props.className}`}>
      {text ? <span>{text}</span> : icon}
    </button>
  );
};

export default Button;
