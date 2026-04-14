interface Details {
  title: string[];
  body: string[];
  tech_used: string[];
}

export default function ProjectCards({ title, body, tech_used }: Details) {
  return (
    <>
      {title.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-start p-5 gap-3.75 w-full max-w-162 h-full bg-[#f8f8f8] border border-solid border-[#f8f8f8] shadow-[0px_0px_12px_2px_rgba(0,0,0,0.25)] rounded-[20px]"
        >
          <div>
            <img src="/project-placeholder.jpg" alt="Project placeholder" />
          </div>

          <div>
            <h4>{item}</h4>
            <p>{body[index]}</p>
          </div>

          <div className="flex items-center gap-2">
            <p className="shrink-0">Tech used:</p>

            <div className="w-16">
              <img
                src={tech_used[index]}
                alt="Tech logo"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}