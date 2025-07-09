'use client';

import * as React from 'react';

export function CursorGlow() {
  React.useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      document.body.style.setProperty('--x', `${e.clientX}px`);
      document.body.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', updateCursor);
    return () => {
      window.removeEventListener('mousemove', updateCursor);
    };
  }, []);
  return null;
}
