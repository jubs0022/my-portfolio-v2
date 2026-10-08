import SkillCards from "../skills/SkillCard";

export default function () {
  return (
    <div className="w-full flex flex-col mx-auto justify-center font-Poppins mt-11 px-8 dark:text-white">
      <div className="flex justify-between">
        <p className="font-extrabold sm:text-lg xl:text-xl">BACK-END</p>
        <a href="/portfolio/skills">
          <p className="font-normal sm:text-lg xl:text-xl text-[#0267ED] dark:text-[#92B8D6] cursor-pointer">
            See More &gt;
          </p>
        </a>
      </div>

      <div className="flex ml-8">
        <SkillCards
          skillItem={[
            {
              r: "101",
              g: "154",
              b: "210",
              title: "BACK-END",
              imgsrc: "/images/c-.png",
              skillContent: "C++",
            },
            {
              r: "33",
              g: "150",
              b: "243",
              imgsrc: "/images/letter-c.png",
              skillContent: "C",
            },
            {
              r: "177",
              g: "71",
              b: "150",
              imgsrc: "/images/c-sharp.png",
              skillContent: "C#",
            },
            {
              r: "66",
              g: "117",
              b: "149",
              imgsrc: "/images/java.png",
              skillContent: "Java",
            },
            {
              r: "53",
              g: "112",
              b: "160",
              imgsrc: "/images/python.png",
              skillContent: "Python",
            },
            {
              r: "109",
              g: "167",
              b: "93",
              imgsrc: "/images/nodejs.png",
              skillContent: "Node.JS",
            },
            {
              r: "235",
              g: "40",
              b: "91",
              imgsrc: "/images/nestjs.svg",
              skillContent: "Nest.JS",
            },
            {
              r: "53",
              g: "53",
              b: "53",
              imgsrc: "/images/express.png",
              skillContent: "Express.JS",
            },
            {
              r: "37",
              g: "150",
              b: "190",
              imgsrc: "/images/fastapi.png",
              skillContent: "FastAPI",
            },
            {
              r: "215",
              g: "58",
              b: "255",
              imgsrc: "/images/jwt-3.svg",
              skillContent: "JWT",
            },
          ]}
        />
      </div>
    </div>
  );
}
