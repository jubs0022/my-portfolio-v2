import { useRef } from "react";
import { useThemeStore } from "../../themeStore";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const webTheme = useThemeStore((state) => state.webTheme);
  const toggleWebTheme = useThemeStore((state) => state.toggleWebTheme);

  const container = useRef();
  const flareRef = useRef();
  const buttonRef = useRef(); // ✅ Add a ref for the button
  const tl = useRef();

  useGSAP(
    () => {
      tl.current = gsap.timeline({ paused: true }).to(flareRef.current, {
        scale: 50,
        duration: 1.5,
        ease: "expo.inOut",
        onStart: () => gsap.set(flareRef.current, { opacity: 1 }),
      });
    },
    { scope: container },
  );

  const { contextSafe } = useGSAP({ scope: container });

  const handleThemeToggle = contextSafe(() => {
    const isCurrentlyLight = webTheme === "light";
    const nextTheme = isCurrentlyLight ? "dark" : "light";

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    if (isCurrentlyLight) {
      gsap.set(flareRef.current, {
        backgroundColor: "#343434",
        left: centerX,
        top: centerY,
        xPercent: -50,
        yPercent: -50,
      });

      tl.current.play();

      // ✅ DELAY THE THEME SWAP
      // If the animation is 1.2s, 0.4s to 0.6s is usually the "sweet spot"
      // where the circle is large enough to cover the header text.
      gsap.delayedCall(0.3, () => toggleWebTheme(nextTheme));
    } else {
      tl.current.reverse();

      // ✅ DELAY THE REVERSE SWAP
      // When shrinking, we wait until it's small enough to "reveal" the light theme.
      gsap.delayedCall(0.3, () => toggleWebTheme(nextTheme));
    }
  });

  return (
    <header ref={container} className="">
      {/* ✅ The Flare: We remove hardcoded top/right. Position is handled by GSAP */}
      <div
        ref={flareRef}
        className="fixed w-[100px] h-[100px] rounded-full pointer-events-none scale-0 opacity-0 z-[-1]"
        style={{ transformOrigin: "center center" }}
      />

      <div className="w-full flex items-center justify-center absolute top-0 left-0 ">
        <div className="w-full max-w-[1366px] flex items-center justify-between px-[4%] py-4">
          <div className="relative w-[162px] h-auto">
            {/* Light Logo */}
            <img
              src="/site-logo-light.png"
              alt="Logo Light"
              className={`absolute inset-0 w-full h-auto transition-opacity duration-2000 ${
                webTheme === "light" ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Dark Logo */}
            <img
              src="/site-logo-dark.png"
              alt="Logo Dark"
              className={`w-full h-auto transition-opacity duration-2000 ${
                webTheme === "dark" ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          <ul className="flex gap-12">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <button
            ref={buttonRef} // ✅ Attach the ref here
            onClick={handleThemeToggle}
            className={`px-2.5 py-2.5 rounded-full z-20 relative transition-colors duration-500 ${
              webTheme === "light" ? "bg-[#343434]" : "bg-[#f8f8f8]"
            }`}
          >
            <img
              src={`/${webTheme === "light" ? "moon" : "sun"}.svg`}
              alt="Toggle"
              className="w-7.5 h-7.5"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
