import React from 'react';
import './App.css';

const FESHARED_BUTTON = React.lazy(() => import('FESHARED/Button'));

function App() {
  return (
    <>
      <h1>I am comp lib</h1>

      <div className="App">
        <React.Suspense fallback="Loading Button">
          <FESHARED_BUTTON />
        </React.Suspense>
      </div>
    </>
  );
}

export default App;
