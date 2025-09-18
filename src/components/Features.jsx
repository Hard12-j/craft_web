import React from "react";

const items = [
  { title: "Fast", desc: "Powered by Vite and modern tooling." },
  { title: "React", desc: "Component-based UI and state." },
  { title: "Deploy", desc: "One-click Netlify or Vercel deployment." }
];

export default function Features() {
  return (
    <section id="features" className="features container">
      {items.map((it) => (
        <article key={it.title} className="feature-card">
          <h4>{it.title}</h4>
          <p>{it.desc}</p>
        </article>
      ))}
    </section>
  );
}
