import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ContactList } from './components/data';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

window.alert("Hey👋 this project is created by Vishal!!")

root.render(
  <StrictMode>
    <ContactList />
  </StrictMode>
);