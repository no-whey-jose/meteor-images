import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

Meteor.startup(() => {
  const domNode = document.querySelector('.app');
  const root = createRoot(domNode);
  root.render(<App />);
});
