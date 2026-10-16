import React from 'react';

export type AppProps = {
  header?: string;
};

export const App: React.FC<AppProps> = ({ header = 'AI Skills Lab Demo' }) => {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '16px',
        boxSizing: 'border-box',
      }}
    >
      <h1 style={{ color: '#2c3e50', marginBottom: '8px' }}>{header}</h1>
      <h1>HELOO WORD</h1>
    </main>
  );
};
