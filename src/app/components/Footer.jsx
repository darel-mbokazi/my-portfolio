import React from "react";

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 grid justify-center">
        <p className="text-slate-600 text-center"> © {year} | All rights reserved.</p>
        <p className="text-xs pt-3 text-center">Developed using Next.js and Tailwind CSS, deployed on Vercel.</p>
      </div>
    </footer>
  );
};

export default Footer;
