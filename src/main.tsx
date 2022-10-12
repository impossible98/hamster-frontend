// import third-party modules
import React from 'react';
import ReactDOM from 'react-dom/client';
// import local modules
import Router from '@/router';
function App() {
  // return
  return (
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  );
}

function main() {
  const rootElement: HTMLElement | null = document.getElementById('root');
  // control flow
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<App />);
  }
}

main();
