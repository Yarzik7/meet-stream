'use client';

import { useState, useEffect } from 'react';

export const useLocalStorage = (KEY: string, defaultValue = []) => {
  const [state, setState] = useState(() => JSON.parse(localStorage.getItem(KEY) ?? '') ?? defaultValue);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(state));
  }, [KEY, state]);

  return [state, setState];
};
