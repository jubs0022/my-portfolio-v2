import TypeIt from "typeit-react";
import SocialLinks from "./ProfileComponents/SocialLinks";
import AboutCV from "./ProfileComponents/AboutCV";

export default function Profile() {
  return (
    <div className="flex justify-center items-center w-full max-w-screen-2xl mt-28 dark:text-white">
      <div className="">
        <img
          className="rounded-[50%] w-5 sm:w-60 md:w-64 xl:w-80"
          src="/images/barong-grad.jpg"
        />
      </div>
      <div className="xl:ml-20">
        <p
          className="font-Poppins font-regular m-0 p-0 leading-none  
                    sm:text-lg  md:text-xl xl:text-2xl"
        >
          Hello, My name is...
        </p>
        <p
          className="font-Poppins font-bold text-[#1459CC] dark:text-[#92B8D6] m-0 p-0 leading-none
                    mt-6
                    xl:text-5xl md:text-3xl sm:text-2xl"
        >
          JUBERT C. NANTES
        </p>
        <div
          className="font-Poppins font-regular m-0 p-0
                    text-[16px] mt-6
                    xl:text-2xl md:text-lg sm:text-base"
        >
          <TypeIt
            getBeforeInit={(instance) => {
              instance
                .type(
                  '<span class="text-[#0112FF] dark:text-[#2868ca]">const </span>'
                )
                .pause(200)
                .type(
                  '<span class="text-[#0170C0] dark:text-[#4ec1ff]">dream </span>'
                )
                .pause(200)
                .type(" = ")
                .pause(200)
                .type(
                  '<span class="text-[#AE1E1C] dark:text-[#cf9078]">"Future Developer"</span>'
                )
                .pause(200)
                .type(";");
              return instance;
            }}
            options={{
              speed: 75,
              breakLines: true,
              html: true,
            }}
          />
        </div>
        <SocialLinks />
        <AboutCV />
      </div>
    </div>
  );
}
