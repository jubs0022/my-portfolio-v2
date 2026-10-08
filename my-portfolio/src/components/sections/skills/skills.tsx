import SkillCards from "./SkillCard";
import Titles from "../others/Titles";
import { Link } from "react-router-dom";
export default function Skills() {
  return (
    <div className="flex flex-col dark:text-white items-center justify-start gap-6 w-full px-4 md:px-8 text-Poppins">
      <div className="mt-10 w-full mx-auto">
        <Titles title="SKILLS" />
      </div>
      <div className="w-full flex flex-col mx-auto justify-between font-Poppins mt-11 px-8">
        <div className="flex justify-between">
          <p className="font-extrabold text-[24px] ">FRONT-END</p>
          <Link to="/portfolio/about">
            <p className=" mt-[8px] text-lg text-[#0267ED]">
              Go Back
            </p>
          </Link>
        </div>

        <div className="flex ml-8">
          <SkillCards
          skillItem={[
            {
              r: "255",
              g: "75",
              b: "0",
              imgsrc: "/images/html-5.png",
              skillContent: "HTML",
            },
            {
              r: "33",
              g: "150",
              b: "243",
              imgsrc: "/images/css-3.png",
              skillContent: "CSS",
            },
            {
              r: "255",
              g: "223",
              b: "0",
              imgsrc: "/images/js.png",
              skillContent: "JavaScript",
            },
            {
              r: "22",
              g: "221",
              b: "213",
              imgsrc: "/images/science.png",
              skillContent: "React.JS",
            },
          ]}
        />
        </div>
      </div>

      <div className="w-full flex flex-col mx-auto justify-center font-Poppins mt-11 px-8">
        <div className="flex">
          <p className="font-extrabold text-[24px]">BACK-END</p>
        </div>

        <div className="flex ml-8">
          <SkillCards
          skillItem={[
            {
              r: "101",
              g: "154",
              b: "210",
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

      <div className="w-full flex flex-col mx-auto justify-center font-Poppins mt-11 px-8">
        <div className="flex">
          <p className="font-extrabold text-[24px]">CROSS-PLATFORM APPLICATION</p>
        </div>

        <div className="flex ml-8">
           <SkillCards
          skillItem={[
            {
              r: "163",
              g: "144",
              b: "229",
              imgsrc: "/images/MAUI.png",
              skillContent: ".NET MAUI",
            },
            {
              r: "104",
              g: "0",
              b: "129",
              imgsrc: "/images/WFA.png",
              skillContent: "Win Forms App",
            },
            {
              r: "108",
              g: "66",
              b: "156",
              imgsrc: "/images/ASPNet.png",
              skillContent: "ASP.Net Core",
            },
          ]}
        />

        </div>
      </div>

      <div className="w-full flex flex-col mx-auto justify-center font-Poppins mt-11 px-8 mb-11">
        <div className="flex">
          <p className="font-extrabold text-[24px]">TOOLS AND PLATFORMS</p>
        </div>

        <div className="flex ml-8">
           <SkillCards
          skillItem={[
            {
              r: "178",
              g: "190",
              b: "181",
              imgsrc: "/images/github.png",
              skillContent: "Github",
            },
            {
              r: "28",
              g: "160",
              b: "241",
              imgsrc: "/images/vscode.png",
              skillContent: "VS Code",
            },
            {
              r: "92",
              g: "42",
              b: "149",
              imgsrc: "/images/vs2022.png",
              skillContent: "VS 2022",
            },
            {
              r: "1",
              g: "206",
              b: "126",
              imgsrc: "/images/figma.png",
              skillContent: "Figma",
            },
            {
              r: "51",
              g: "123",
              b: "219",
              imgsrc: "/images/canva.png",
              skillContent: "Canva",
            },
            {
              r: "255",
              g: "87",
              b: "35",
              imgsrc: "/images/office.png",
              skillContent: "MS Office",
            },
            {
              r: "251",
              g: "121",
              b: "35",
              imgsrc: "/images/xampp.png",
              skillContent: "Xampp",
            },
            {
              r: "43",
              g: "167",
              b: "230",
              imgsrc: "/images/azure.png",
              skillContent: "Azure",
            },
          ]}
        />


        </div>
      </div>
    </div>
  );
}
