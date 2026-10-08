import CV from "../../../../files/Jubert-CV.pdf";
export default function AboutCV() {
  const handleDownload = () => {
    const url = "/files/example.pdf"; // path to your file
    const a = document.createElement("a");
    a.href = url;
    a.download = "MyFile.pdf"; // optional: set the filename
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <div className="flex">
      <input
        className="font-Poppins font-semibold rounded-lg mt-[34px] bg-[#0267ED] dark:bg-[#92B8D6] dark:text-[#1A2A3B] text-[#ffffff] hover:cursor-pointer
                  xl:w-44 xl:h-12 xl:mr-[20px]"
        type="button"
        value="Download CV"
        onClick={handleDownload}
      />
      <input
        className="font-Poppins font-semibold xl:mt-[34px] mt-[15px] bg-[#FFFFFF] dark:bg-[#1f1e1f] text-[black] dark:text-white hover:cursor-pointer
                  xl:w-44 xl:h-12 rounded-[8px] border border-gray-300 shadow-md hover:shadow-[0_0_10px_2px_rgba(0,0,0,.4)] dark:hover:shadow-[0_0_10px_2px_rgba(255,255,255,.4)] transition duration-300"
        type="button"
        value="Show CV"
        onClick={() => window.open(CV, "_blank")}
      />
    </div>
  );
}
