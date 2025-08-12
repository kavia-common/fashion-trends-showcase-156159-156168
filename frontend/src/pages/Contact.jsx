import React, { useState } from 'react';

/**
 * PUBLIC_INTERFACE
 * Contact
 * Contact form with basic validation (no backend submission).
 */
export default function Contact() {
  const [state, setState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const update = (patch) => setState(prev => ({ ...prev, ...patch }));

  const validate = () => {
    const e = {};
    if (!state.name.trim()) e.name = 'Name is required';
    if (!/\S+@\S+\.\S+/.test(state.email)) e.email = 'Valid email is required';
    if (!state.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <section className="section">
      <div className="container stack">
        <header className="section-header">
          <div>
            <h1 className="section-title">Contact</h1>
            <div className="section-sub">We would love to hear from you.</div>
          </div>
        </header>

        {!submitted ? (
          <form className="form" onSubmit={submit} noValidate>
            <div>
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                className="input"
                value={state.name}
                onChange={(e) => update({ name: e.target.value })}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-err' : undefined}
              />
              {errors.name && <div id="name-err" className="section-sub" style={{ color: '#d00' }}>{errors.name}</div>}
            </div>

            <div>
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                className="input"
                value={state.email}
                onChange={(e) => update({ email: e.target.value })}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-err' : undefined}
              />
              {errors.email && <div id="email-err" className="section-sub" style={{ color: '#d00' }}>{errors.email}</div>}
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className="input textarea"
                value={state.message}
                onChange={(e) => update({ message: e.target.value })}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-err' : undefined}
              />
              {errors.message && <div id="message-err" className="section-sub" style={{ color: '#d00' }}>{errors.message}</div>}
            </div>

            <div className="flex">
              <button className="btn" type="submit">Send message</button>
              <a className="btn btn-ghost" href="mailto:hello@stylesphere.example">Email us directly</a>
            </div>
          </form>
        ) : (
          <div className="form" role="status" aria-live="polite">
            <h2 style={{ margin: 0 }}>Thanks for reaching out!</h2>
            <p className="section-sub">We will get back to you at {state.email}.</p>
          </div>
        )}
      </div>
    </section>
  );
}
