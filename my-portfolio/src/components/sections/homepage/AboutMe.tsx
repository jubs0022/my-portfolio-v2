
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <div className="w-full px-8 flex flex-col justify-center mt-10 font-Poppins dark:text-white">
        <p className="font-normal mb-5
          sm:text-lg 
          md:text-xl 
          xl:text-2xl xl:self-start">
          Hi, I’m Jubert C. Nantes
        </p>
        <p className="text-sm md:text-base text-justify">
          A BSIT graduate with experience in Software Development, Web
          Development, and API Development, having completed multiple academic
          projects focused on creating efficient and user-friendly applications.
          Gained practical skills in designing modern solutions that address
          real-world needs.
        </p>
        <div
          className="font-Poppins font-regular text-center self-end border-[#0267ED] dark:text-[#92B8D6] dark:border-[#92B8D6] rounded-[5px] hover:cursor-pointer border border-[solid] text-[#0267ED]
          md:mt-10
          md:px-7 md:py-3 
          sm:text-sm md:text-base"
        >
          <Link to="/portfolio/about">
            <p>Learn More</p>
          </Link>
      </div>
    </div>
  );
}
