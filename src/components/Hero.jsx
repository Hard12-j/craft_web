import React from "react";

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-text">
        <h1>Beautiful, fast sites — built with React + Vite</h1>
        <p>
          A lightweight template you can customize. Responsive layout, smooth
          interactions, and easily deployed to Netlify.
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="#features">Explore</a>
          <a className="btn ghost" href="#contact">Contact</a>
        </div>
      </div>
      <div className="hero-card">
        <div className="mock-browser">
          <div className="mock-header" />
          <div className="mock-body">
            <h3>Showcase</h3>
            <p>Image / content preview goes here.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
