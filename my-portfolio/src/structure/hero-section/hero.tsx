import './hero.css'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useThemeStore } from '../../themeStore';

export default function Hero() {
  const webTheme = useThemeStore((state) => state.webTheme);
  const nameRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (nameRef.current) {
      gsap.to(nameRef.current, {
        backgroundPosition: "200% 0%", // animate gradient
        duration: 5,
        repeat: -1, // infinite loop
        yoyo: true, // back and forth
        ease: "power1.inOut",
      })
    }
  }, [])

  return (
    <div className="section flex flex-row justify-center">
      <div className="row w-full max-w-341.5 pt-57.5 py-30 flex flex-row px-[4%] gap-15 items-center">
        <div className="content w-full max-w-127.25 flex flex-col">
          <img src="grad-pic.jpg" className={`w-full rounded-4xl ${ webTheme === 'light' ? 'shadow-[0_0_12px_rgba(0,0,0,0.25)]' : 'shadow-[0_0_12px_rgba(255,255,255,0.25)]'}`} />
        </div>
        <div className="content w-full flex flex-col gap-3.75">
          <div className="flex flex-col gap-2">
            <p className="text-[16px] font-light">Hello, My name is...</p>
            <h1
              ref={nameRef} // <-- GSAP target
              className="
                bg-linear-to-r from-[#6366F1] via-[#22D3EE] to-[#2FABF2]
                bg-size-[200%_auto]
                text-transparent bg-clip-text
                animate-gradient
              "
            >
              Jubert C. Nantes
            </h1>
          </div>
          <p className="text-lg leading-7.5">
            A BSIT graduate with experience in Software Development, Web Development, and API Development, having completed multiple academic projects focused on creating efficient and user-friendly applications. Gained practical skills in designing modern solutions that address real-world needs.
          </p>
          <div className="flex gap-3.75">
            <button>Download CV</button>
            <button className={`bg-transparent  border ${webTheme === 'light' ? 'border-[#343434] text-[#343434] transition-normal duration-2000' :'border-[#f8f8f8] text-[#f8f8f8] transition-normal duration-2000'}`}>Learn more about me</button>
          </div>
        </div>
      </div>
    </div>
  )
}