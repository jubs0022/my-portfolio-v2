import { useRef } from "react";
import { useThemeStore } from "../../themeStore";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const webTheme = useThemeStore((state) => state.webTheme);
  const toggleWebTheme = useThemeStore((state) => state.toggleWebTheme);

  // Initializing with null is required for TypeScript refs
  const container = useRef<HTMLDivElement>(null);
  const flareRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  // Set up the animation timeline
  useGSAP(() => {
    if (!flareRef.current) return;

    tl.current = gsap.timeline({ paused: true }).to(flareRef.current, {
      scale: 50,
      duration: 1.5,
      ease: "expo.inOut",
      onStart: () => {
        if (flareRef.current) gsap.set(flareRef.current, { opacity: 1 });
      },
    });
  }, { scope: container });

  // contextSafe allows GSAP to handle cleanup for functions called outside the hook
  const { contextSafe } = useGSAP(() => {}, { scope: container });

  const handleThemeToggle = contextSafe((): void => {
    // Strict null checks to prevent "Object is possibly null" errors
    if (!buttonRef.current || !flareRef.current || !tl.current) return;

    const isCurrentlyLight = webTheme === "light";
    const nextTheme = isCurrentlyLight ? "dark" : "light";

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    if (isCurrentlyLight) {
      gsap.set(flareRef.current, {
        backgroundColor: "#1a1a1a", // Matches your dark background
        left: centerX,
        top: centerY,
        xPercent: -50,
        yPercent: -50,
      });

      tl.current.play();
    } else {
      tl.current.reverse();
    }

    // Sync the store update with the animation flare
    gsap.delayedCall(0.4, () => toggleWebTheme(nextTheme));
    
    // Explicit return to satisfy void type requirements
    return;
  });

  return (
    <header ref={container} className="relative">
      {/* The Animated Flare Circle */}
      <div
        ref={flareRef}
        className="fixed w-25 h-25 rounded-full pointer-events-none scale-0 opacity-0 z-[-1]"
        style={{ transformOrigin: "center center" }}
      />

      <div className="w-full flex items-center justify-center absolute top-0 left-0">
        <div className="w-full max-w-341.5 flex items-center justify-between px-[4%] py-4">
          
          {/* Logo with Grid Stacking for Cross-fade */}
          <div className="grid w-40.5 h-auto">
            <img
              src="/site-logo-light.png"
              alt="Logo Light"
              className={`row-start-1 col-start-1 w-full h-auto transition-opacity duration-2000 ${
                webTheme === "light" ? "opacity-100" : "opacity-0"
              }`}
            />
            <img
              src="/site-logo-dark.png"
              alt="Logo Dark"
              className={`row-start-1 col-start-1 w-full h-auto transition-opacity duration-2000 ${
                webTheme === "dark" ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          <nav>
            <ul className="flex gap-12">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>

          <button
            ref={buttonRef}
            onClick={handleThemeToggle}
            className={`px-2.5 py-2.5 rounded-full z-20 relative transition-colors duration-500 ${
              webTheme === "light" ? "bg-[#343434]" : "bg-[#f8f8f8]"
            }`}
          >
            <img
              src={`/${webTheme === "light" ? "moon" : "sun"}.svg`}
              alt="Toggle Theme"
              className="w-7.5 h-7.5"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;