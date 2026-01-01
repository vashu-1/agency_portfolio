'use client';
import { createContext, useContext, useState } from 'react';

const CursorContext = createContext();

export function CursorProvider({ children }) {
  const [cursorVariant, setCursorVariant] = useState('default');

  const textEnter = () => setCursorVariant('text');
  const textLeave = () => setCursorVariant('default');
  const buttonEnter = () => setCursorVariant('button');
  const buttonLeave = () => setCursorVariant('default');

  return (
    <CursorContext.Provider
      value={{
        cursorVariant,
        setCursorVariant,
        textEnter,
        textLeave,
        buttonEnter,
        buttonLeave,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
}
