import TestimonialsComponent from "../reusable_components/testimonials_component";

export default function TestimonialsHome() {
  return (
    <div className="section py-25 bg-F8F8F8">
      <div className="w-full max-w-341.5 row px-[4%] flex flex-col">
        <div className="flex flex-col gap-7.5">
          <div>
            <h2>Testimonials</h2>
          </div>
          <div className="w-full flex justify-center mb-15px">
            <TestimonialsComponent />
          </div>
          <div className="w-full flex justify-end gap-12.5">
            <a href="#">
              <p className="poppins-18px-400 text-color-0267ED">
                See More {">"}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
