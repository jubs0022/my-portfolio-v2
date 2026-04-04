
import { useEffect } from 'react';
import Header from './structure/header/header'
import { useThemeStore } from './themeStore';
import './App.css';
function App() {
  const webTheme = useThemeStore((state) => state.webTheme);
  
  return (
      <Header />
  )
}

export default App;