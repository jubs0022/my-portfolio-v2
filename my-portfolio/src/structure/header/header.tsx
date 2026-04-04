import { useRef } from 'react'
import { useThemeStore } from '../../themeStore'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Header = () => {
  const webTheme = useThemeStore((state) => state.webTheme);
  const toggleWebTheme = useThemeStore((state) => state.toggleWebTheme);
  
  const container = useRef();
  const flareRef = useRef();
  const buttonRef = useRef(); // ✅ Add a ref for the button
  const tl = useRef();

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true })
      .to(flareRef.current, {
        scale: 50,
        duration: 1.2,
        ease: "expo.inOut",
        onStart: () => gsap.set(flareRef.current, { opacity: 1 })
      });
  }, { scope: container });

  const { contextSafe } = useGSAP({ scope: container });

  const handleThemeToggle = contextSafe(() => {
    const isCurrentlyLight = webTheme === 'light';
    const nextTheme = isCurrentlyLight ? 'dark' : 'light';

    // ✅ CALCULATE POSITION: Get the button's exact center coordinates
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    if (isCurrentlyLight) {
      // Set the flare to the button's position before playing
      gsap.set(flareRef.current, { 
        backgroundColor: '#1a1a1a',
        left: centerX,
        top: centerY,
        xPercent: -50, // Center the flare div itself
        yPercent: -50
      });
      
      tl.current.play();
      gsap.delayedCall(0.6, () => toggleWebTheme(nextTheme));
    } else {
      // When reversing, it already knows where to go back to!
      tl.current.reverse();
      gsap.delayedCall(0.6, () => toggleWebTheme(nextTheme));
    }
  });

  return (
    <div ref={container} className="relative">
      {/* ✅ The Flare: We remove hardcoded top/right. Position is handled by GSAP */}
      <div 
        ref={flareRef}
        className="fixed w-[100px] h-[100px] rounded-full pointer-events-none z-0 scale-0 opacity-0"
        style={{ transformOrigin: 'center center' }}
      />

      <div className="w-full flex items-center justify-center absolute top-0 left-0 z-10">
        <div className="w-full max-w-[1366px] flex items-center justify-between px-5 py-4">
          
          <img src="/site-logo-light.png" alt="Logo" className="max-w-[162px]" />

          <ul className="flex gap-12 text-[18px]">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <button 
            ref={buttonRef} // ✅ Attach the ref here
            onClick={handleThemeToggle}
            className={`px-2.5 py-2.5 rounded-full z-20 relative transition-colors duration-500 ${
                webTheme === 'light' ? 'bg-[#343434]' : 'bg-[#f8f8f8]'
            }`}
          >
            <img
              src={`/${webTheme === 'light' ? 'moon' : 'sun'}.svg`}
              alt="Toggle"
              className="w-7.5 h-7.5"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;