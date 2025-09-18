import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} MyBrand — Built with React + Vite</p>
      </div>
    </footer>
  );
}
