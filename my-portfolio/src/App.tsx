import Header from './structure/header/header'
import { useThemeStore } from './themeStore';
import Default_Footer from './structure/footer/default-footer';
import './App.css';
import Hero from './structure/hero-section/hero';

function App() {
  const webTheme = useThemeStore((state) => state.webTheme);
  
  return (
    <div className={`min-h-screen w-full transition-colors duration-2000 ${
      webTheme === 'dark' ? 'text-[#f8f8f8]' : 'text-[#1a1a1a]'
    }`}>
      <Header />
      <Hero />
      <Default_Footer />
    </div>
  )
}

export default App;