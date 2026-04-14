import ProjectCards from "../reusable_components/project_card";

export default function Homeproj() {
  return (
    <div className="section py-25">
      <div className="w-full max-w-341.5 row px-[4%] flex flex-col">
        <div>
          <div>
            <h2>My Projects</h2>
          </div>
          <div className="w-full flex justify-between gap-12.5 mb-3.75">
            <ProjectCards
              title={['lorem','lorem']}
              body={['sample description','sample description']}
              tech_used={['/logo-placeholder.png','/logo-placeholder.png']}
            />
          </div>
          <div className="w-full flex justify-end gap-12.5">
            <a href="#"><p className="poppins-18px-400 text-color-0267ED">See More {">"}</p></a>
          </div>
        </div>
      </div>
    </div>
  );
}
