import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { AllFriends } from './allfriends';
import { SearchBar } from './SearchBar';
import {
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <>
    <header>
      <nav></nav>
    </header>
    <main>
      <SearchBar />
      <AllFriends />
    </main>
  </>
);
