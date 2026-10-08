import { Link } from "react-router-dom";
import AC from "./AboutCard";
import DropDown from "./AboutDropDown";

export default function About() {
  return (
    <div>
      <div className="w-full flex place-content-center mx-auto font-Poppins mt-10 dark:text-white">
        <div className="">
          <img
            className="w-80 rounded-[10px]"
            src="/images/grad-pic.jpg"
          />
        </div>
        <div className="">
          <div className="max-w-xl ml-9">
            <h3 className="text-2xl">Hello, My name is Jubert C. Nantes</h3>
            <p className="text-base mt-3 text-justify">
              A BSIT graduate with solid school experience in Software
              Development, Web Development, and API Development. Completed
              multiple academic projects focused on creating efficient and
              user-friendly applications. Gained practical skills in designing
              modern solutions that address real-world needs.
            </p>
          </div>
          <div className="max-w-xl mt-8 ml-9">
            <div className="flex justify-between">
              <h5 className="text-2xl">SKILLS</h5>
              <div className="hover:cursor-pointer">
                <Link to="/skills">
                  <p className="mt-2 text-base text-[#0267ED]">
                    See My Skills
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap mt-4">
              <AC imgPath="/images/web-dev.png" value="Web Development" />
              <AC imgPath="/images/soft-dev.png" value="Software Developer" />
              <AC imgPath="/images/API-dev.png" value="API Developer" />
              <AC imgPath="/images/android.png" value="Android Developer" />
            </div>
          </div>
        </div>
      </div>
      <div className="font-Poppins max-w-screen-xl flex place-content-center mx-auto dark:text-white">
        <div className="mx-48 mt-20 mb-36">
          <DropDown Type="EDUCATION" />
          <DropDown Type="INTERNSHIP" />
          <DropDown Type="CERTIFICATES" />
        </div>
      </div>
    </div>
  );
}
