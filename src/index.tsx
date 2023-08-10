import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import contacts  from './contacts.js';
import {Friends}  from './friends.js';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const Header = () => {
  return (
    <header>
      <input className="searchBox" onChange={Searching} placeholder="Search" />
      <div className="editBox">
        <i className="fa-regular fa-pen-to-square"></i>
      </div>
    </header>
  );
};
root.render(
  <main>
    <Header />
    <section>
      {contacts.map((contact) => {
        return <Friends {...contact} />;
      })}
    </section>
  </main>
);
const Searching = (e) => {
  root.render(
    <main>
      <Header />
      <section>
        {contacts.map((contact) => {
          if (
            contact.name.toLowerCase().includes(e.target.value.toLowerCase())
          ) {
            return <Friends {...contact} />;
          }
        })}
      </section>
    </main>
  );
};