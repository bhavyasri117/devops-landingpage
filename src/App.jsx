import React from 'react'

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="container">
          <h1>Devops Landing Page</h1>
          <p>Simple, team-editable starter landing page — ready to clone & iterate.</p>
          <div className="cta">
            <a href="#features" className="btn">See features</a>
            <a href="#get-started" className="btn btn-outline">Get started</a>
          </div>
        </div>
      </header>

      <section id="features" className="features container">
        <div className="feature"> 
          <h3>Fast</h3>
          <p>Vite + React — instant dev server</p>
        </div>
        <div className="feature">
          <h3>Collaborative</h3>
          <p>Branch/PR workflow enforced</p>
        </div>
        <div className="feature">
          <h3>Devops</h3>
          <p>Clear structure and docs</p>
        </div>
      </section>

      <footer className="footer container" id="get-started">
        <small>© {new Date().getFullYear()} Devops Team</small>
      </footer>
    </div>
  )
}
