import { useState, useRef, useEffect } from 'react'
import { useThemeStore } from '../../themeStore' // adjust path

const Header = () => {
  const { dark, textColor, toggleDark } = useThemeStore()

  const [logoSrc, setLogoSrc] = useState('/site-logo-light.png')
  const [btnLogoSrc, setBtnLogoSrc] = useState('/moon.svg')
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 })
  const [circleSize, setCircleSize] = useState(0)

  const buttonRef = useRef<HTMLButtonElement>(null)
  const logoRef = useRef<HTMLImageElement>(null)

  // Get button center for circle origin
  useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setCirclePos({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      })
    }
  }, [buttonRef, dark])

  // Animate circle size
  useEffect(() => {
    let animationFrame: number
    const targetSize = dark ? window.innerWidth * 2 : 0

    const animate = () => {
      setCircleSize(prev => {
        const diff = targetSize - prev
        const next = prev + diff * 0.1
        return Math.abs(diff) < 1 ? targetSize : next
      })
      animationFrame = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animationFrame)
  }, [dark])

  // Switch logo based on circle coverage
  useEffect(() => {
    if (!logoRef.current) return
    const logoRect = logoRef.current.getBoundingClientRect()
    const dx = circlePos.x - (logoRect.left + logoRect.width / 2)
    const dy = circlePos.y - (logoRect.top + logoRect.height / 2)
    const distance = Math.sqrt(dx * dx + dy * dy)

    setLogoSrc(distance < circleSize / 2 ? '/site-logo-dark.png' : '/site-logo-light.png')
    setBtnLogoSrc(distance < circleSize / 2 ? '/sun.svg' : '/moon.svg')
  }, [circleSize, circlePos])

  return (
    <>
      {/* Animated circle */}
      <div
        className="fixed rounded-full pointer-events-none z-[-1]"
        style={{
          width: circleSize,
          height: circleSize,
          backgroundColor: dark ? '#343434' : '#F8F8F8',
          top: circlePos.y,
          left: circlePos.x,
          transform: 'translate(-50%, -50%)',
          transition: 'background-color 0.3s',
        }}
      />

      {/* Header content */}
      <div className="w-full flex items-center justify-center absolute top-0 left-0 z-10 bg-transparent">
        <div className="w-full max-w-[1366px] flex items-center justify-between px-5 py-4">
          {/* Logo */}
          <img
            ref={logoRef}
            src={logoSrc}
            alt="Site Logo"
            className="w-auto h-auto max-w-[162px] transition-opacity duration-300"
          />

          {/* Nav */}
          <ul className="flex gap-12 text-[18px]" style={{ color: textColor }}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          {/* Dark mode toggle button */}
          <button
  ref={buttonRef}
  onClick={toggleDark}
  style={{ 
    backgroundColor: dark ? '#f8f8f8' :  '#343434', // force visible change
    transition: 'background-color 0.3s',
  }}
  className="px-2.5 py-2.5 rounded-full z-20 relative"
>
  <img
    src={`${btnLogoSrc}`}
    alt="Toggle Dark Mode"
    className="w-full h-full max-w-7.5 max-h-7.5"
  />
</button>
        </div>
      </div>
    </>
  )
}

export default Header