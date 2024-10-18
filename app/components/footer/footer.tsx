import React from 'react';

export const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className=' text-slate-900 border-t dark:border-slate-800 dark:text-slate-300 pt-8 text-center mt-20 tracking-tighter'>
      <div>Made with love in {getYear()} by <span className="font-black"> Nicolas DE RAEMY </span></div>
    </div>
  );
};
