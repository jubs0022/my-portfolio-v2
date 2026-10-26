import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'

import { useEffect } from "react";

function ScrollToHash() {
  const { hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    document
      .getElementById(hash.slice(1))
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [key, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

