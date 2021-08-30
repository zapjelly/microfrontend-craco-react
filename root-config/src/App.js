import React from 'react';
import './App.css';

const FESHARED_BUTTON = React.lazy(() => import('FESHARED/Button'));
const COMPLIB_BUTTON = React.lazy(() => import('COMPLIB/Button'));

function App() {
  return (
    <div>
      <h1>I am root config</h1>
      <div>
        <React.Suspense fallback="Loading Button">
          <FESHARED_BUTTON />
        </React.Suspense>
        <React.Suspense fallback="Loading Button">
          <COMPLIB_BUTTON />
        </React.Suspense>
      </div>
      <h2>Back to root config</h2>
    </div>
  );
}

export default App;
