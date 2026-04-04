import { useThemeStore } from "../../themeStore";

export default function Default_Footer() {
  const webTheme = useThemeStore((state) => state.webTheme);
  return (
    <footer className="flex pt-22.5 pb-3 justify-center ">
      {" "}
      {/*12.5*/}
      <div className="w-full max-w-341.5 flex justify-between items-start px-[4%]">
        <div className="grid w-full max-w-77 h-auto">
          {/* Light Logo */}
          <img
            src="/footer-logo-light.svg"
            alt="Logo Light"
            className={`row-start-1 col-start-1 w-full h-auto transition-opacity duration-2000 ${
              webTheme === "light" ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Dark Logo */}
          <img
            src="/footer-logo-dark.svg"
            alt="Logo Dark"
            className={`row-start-1 col-start-1 w-full h-auto transition-opacity duration-2000 ${
              webTheme === "dark" ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <h6>Quick Links</h6>
          <ul className="leading-11.25">
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
        </div>
        <div className="h-auto flex flex-col gap-2.5 ">
          <h6>Quick Links</h6>
          <div className="grid w-fit gap-5">
            {/* FACEBOOK */}
            <img
              src="/facebook.svg"
              className={`row-start-1 col-start-1 h-auto transition-opacity duration-[2000ms] w-8.25 ${
                webTheme === "light" ? "opacity-100" : "opacity-0"
              }`}
            />
            <img
              src="/facebook.svg"
              className={`row-start-1 col-start-1 h-auto transition-opacity duration-[2000ms] w-8.25 invert brightness-[0] ${
                webTheme === "dark" ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* LINKEDIN */}
            <img
              src="/linkedin.svg"
              className={`row-start-1 col-start-2 h-auto transition-opacity duration-[2000ms] w-8.25 ${
                webTheme === "light" ? "opacity-100" : "opacity-0"
              }`}
            />
            <img
              src="/linkedin.svg"
              className={`row-start-1 col-start-2 h-auto transition-opacity duration-[2000ms] w-8.25 invert brightness-[0] ${
                webTheme === "dark" ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* GITHUB - Fixed logic and syntax */}
            <img
              src="/github.svg"
              className={`row-start-1 col-start-3 h-auto transition-opacity duration-[2000ms] w-8.25 ${
                webTheme === "light" ? "opacity-100" : "opacity-0"
              }`}
            />
            <img
              src="/github.svg"
              className={`row-start-1 col-start-3 h-auto transition-opacity duration-[2000ms] w-8.25 invert brightness-[0] ${
                webTheme === "dark" ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* EMAIL */}
            <img
              src="/email.svg"
              className={`row-start-1 col-start-4 h-auto transition-opacity duration-[2000ms] w-8.25 ${
                webTheme === "light" ? "opacity-100" : "opacity-0"
              }`}
            />
            <img
              src="/email.svg"
              className={`row-start-1 col-start-4 h-auto transition-opacity duration-[2000ms] w-8.25 invert brightness-[0] ${
                webTheme === "dark" ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
