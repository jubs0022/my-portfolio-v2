import { useState } from "react";

interface Details {
  Type: string;
}

export default function DropDown({ Type }: Details) {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");

  return (
    <div className="max-w-screen-lg w-screen mx-auto px-4">
      {/* Button */}
      <button
        name={`btn${Type}`}
        value={Type}
        onClick={() => {
          setOpen(!open);
          setType(Type);
        }}
        className="flex items-center gap-2 w-full py-2 text-left"
      >
        {/* Arrow */}
        <span
          className={`inline-block transform transition-transform duration-300 ${
            open ? "rotate-90" : "rotate-0"
          }`}
        >
          &gt;
        </span>

        {/* Text */}
        <span>{Type}</span>
      </button>

      {/* Divider */}
      <div className="h-[1px] w-full bg-[#ADADAD] mb-4"></div>

      {/* Dropdown content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {type === "EDUCATION" && (
          <div>
            <div className="mt-2 mb-8 ml-5">
              <strong>Cavite State University Imus Campus</strong>
              <p>School Year: 2021 - 2025</p>
              <p>Course: Bachelor of Science in Information Technology</p>
              <p>GPA: 1.79</p>
            </div>
            <div className="mt-2 mb-8 ml-5">
              <strong>Datacom Institute of Computer Technology</strong>
              <p>School Year: 2018 - 2020</p>
              <p>Course: Multimedia and Information Technology</p>
            </div>

            <div className="mt-2 mb-8 ml-5">
              <strong>Chain of Wisdom Colleges of Cavite</strong>
              <p>School Year: 2016 - 2018</p>
              <p>
                Course: Technical-Vocational ICT – Computer Hardware Servicing
              </p>
            </div>
          </div>
        )}
        {type === "INTERNSHIP" && (
          <div>
            <div className="mt-2 mb-8 ml-5">
              <strong>Questronix Corporation</strong>
              <p className="mt-3">
                <strong className="font-semibold">Location:</strong> Makati
                City, Philippines
              </p>
              <p className="mt-1">
                <strong className="font-semibold">Duration:</strong> 488 Hours
              </p>
              <p className="mt-1">
                <strong className="font-semibold">Role / Focus:</strong> Trainee
                of the Managed and Cloud Services Unit
              </p>
              <p className="mt-1">
                <strong className="font-semibold">Key Responsibilities:</strong>
              </p>
              <ul className="list-disc ml-7 mt-1">
                <li>
                  Developed an API that allows creating project and employee
                  records, implementing security features such as authentication
                  and authorization using JWT.
                </li>
                <li>
                  Debugged system errors and resolved human errors to ensure
                  smooth application operation.
                </li>
                <li>
                  Fine-tuned a generative AI model using Python with Hugging
                  Face Transformers and IBM Granite.
                </li>
              </ul>
              <p>
                <strong className="font-semibold">Key Achievements:</strong>
              </p>
              <ul className="list-disc ml-7 mt-1">
                <li>
                  Enhanced skills in API development and implementing secure
                  authentication and authorization.
                </li>
                <li>
                  Gained hands-on experience in fine-tuning generative AI
                  models.
                </li>
                <li>
                  Improved problem-solving and debugging skills in real-world
                  application scenarios.
                </li>
              </ul>
            </div>
            <div className="mt-2 mb-8 ml-5">
              <strong>Skidfox Computer Center</strong>
              <p className="mt-3">
                <strong className="font-semibold">Location:</strong> Bacoor,
                Cavite
              </p>
              <p className="mt-1">
                <strong className="font-semibold">Duration:</strong> 300 Hours
              </p>
              <p className="mt-1">
                <strong className="font-semibold">Role / Focus:</strong>{" "}
                Computer Hardware Intern
              </p>
              <p className="mt-1">
                <strong className="font-semibold">Key Responsibilities:</strong>
              </p>
              <ul className="list-disc ml-7 mt-1">
                <li>Setting up and maintaining computer systems.</li>
                <li>Troubleshooting hardware issues.</li>
                <li>Making and managing LAN/network cables</li>
              </ul>
              <p>
                <strong className="font-semibold">Key Achievements:</strong>
              </p>
              <ul className="list-disc ml-7 mt-1">
                <li>
                  Enhanced skills in setting up and maintaining computer
                  systems.
                </li>
                <li>Improved troubleshooting skills for hardware issues.</li>
                <li>
                  Developed expertise in making and managing LAN/network cables.
                </li>
              </ul>
            </div>
            <div className="mt-2 mb-8 ml-5">
              <strong>International Skills Learning Academy (ISLA)</strong>
              <p className="mt-3">
                <strong className="font-semibold">Location:</strong>Kawit,
                Cavite
              </p>
              <p className="mt-1">
                <strong className="font-semibold">Duration:</strong> 80 Hours
              </p>
              <p className="mt-1">
                <strong className="font-semibold">Role / Focus:</strong>{" "}
                Work Immersion
              </p>
              <p className="mt-1">
                <strong className="font-semibold">Key Responsibilities:</strong>
              </p>
              <ul className="list-disc ml-7 mt-1">
                <li>Setting up network infrastructure in hotels and room.</li>
                <li>Troubleshooting hardware issues.</li>
              </ul>
              <p>
                <strong className="font-semibold">Key Achievements:</strong>
              </p>
              <ul className="list-disc ml-7 mt-1">
                <li>
                  Enhanced skills in setting up and maintaining computer
                  systems.
                </li>
                <li>Improved troubleshooting skills for hardware issues.</li>
                <li>
                  Developed expertise in making and managing LAN/network cables.
                </li>
              </ul>
            </div>
          </div>
        )}
        {type === "CERTIFICATES" && (
          <div className="">
            <div className="mt-2 mb-8 ml-5 flex flex-col gap-10">
              <div>
                <p className="mt-1">
                  <strong>Certificate:</strong> Internship Completion
                </p>
                <p className="mt-1">
                  <strong>Issued by:</strong> Questronix Corporation
                </p>
                <p className="mt-1">
                  <strong>Date Issued:</strong> June 16, 2025
                </p>
              </div>
              <div>
                <p className="mt-1">
                  <strong>Certificate:</strong> Internship Completion
                </p>
                <p className="mt-1">
                  <strong>Issued by:</strong> Skidfox Computer Center
                </p>
                <p className="mt-1">
                  <strong>Date Issued:</strong> October 19, 2019
                </p>
              </div>
              <div>
                <p className="mt-1">
                  <strong>Certificate:</strong> Internship Completion
                </p>
                <p className="mt-1">
                  <strong>Issued by:</strong> Isla International Skills Learning
                  Academy
                </p>
                <p className="mt-1">
                  <strong>Date Issued:</strong> January 30, 2018
                </p>
              </div>
              <div>
                <p className="mt-1">
                  <strong>Certificate:</strong> Visual Graphic Design NCIII
                </p>
                <p className="mt-1">
                  <strong>Issued by:</strong> Datacom Institute of Computer
                  Technology, TESDA-Accredited
                </p>
                <p className="mt-1">
                  <strong>Date Issued:</strong> June 24, 2020
                </p>
              </div>
              <div>
                <p className="mt-1">
                  <strong>Certificate:</strong> Digital Printing Workshop
                </p>
                <p className="mt-1">
                  <strong>Issued by:</strong> Datacom Institute of Computer
                  Technology(TESDA-Accredited)
                </p>
                <p className="mt-1">
                  <strong>Date Issued:</strong> October 25, 2019
                </p>
              </div>
              <div>
                <p className="mt-1">
                  <strong>Certificate:</strong> Microsoft Office Specialist - Excel 2016
                </p>
                <p className="mt-1">
                  <strong>Issued by:</strong> Datacom Institute of Computer
                  Technology(Microsoft Certified)
                </p>
                <p className="mt-1">
                  <strong>Date Issued:</strong> October 25, 2019
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
