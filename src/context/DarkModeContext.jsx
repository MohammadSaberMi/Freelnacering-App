import { createContext, useContext, useEffect } from 'react';
import useLocalStorageState from '../hooks/useLocalStorageState';

const DarkeModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    'isDarkMode',
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    }
  }, [isDarkMode]);
  return (
    <DarkeModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkeModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkeModeContext);
  if (context === undefined)
    throw new Error('DarkModeContext was used outside of DarkModeProvider');
  return context;
}
