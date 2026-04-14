export default function UpdateComponent() {
  return (
    <div className="relative w-full max-w-269">
      <div>
        <img src="/updates.jpg" alt="" />
      </div>
      <div className="absolute flex flex-col w-full max-w-188.75 px-11.25 py-8.75 h-full max-h-75.25 left-80.25 top-20.25 bg-white shadow-[0px_8px_16px_rgba(0,0,0,0.2)]">
        <span className="poppins-30px-500 mb-1">CvSU Commencement Exercises</span>
        <p className="poppins-18px-500 text-color-969696 mb-6.75">Date: September 30, 2025</p>
        <p className="poppins-18px-300 mb-10.75">Graduated from Cavite State University – Imus Campus with a diploma</p>
        <div><button className="bg-transparent text-black p-0 y-0">Read More →</button></div>
      </div>
    </div>
  );
}
