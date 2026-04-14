import UpdateComponent from "../reusable_components/update_component";


export default function Homeblog() {
  return (
    <div className="section py-25 light-gray">
      <div className="w-full max-w-341.5 row px-[4%] flex flex-col">
        <div className="flex flex-col gap-7.5">
          <div>
            <h2>Latest Updates</h2>
          </div>
          <div className="w-full flex justify-center mb-15px">
            <UpdateComponent />
          </div>
          <div className="w-full flex justify-end gap-12.5">
            <a href="#"><p className="poppins-18px-400 text-color-0267ED">See More {">"}</p></a>
          </div>
        </div>
      </div>
    </div>
  );
}
