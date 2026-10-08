type skillCardProps = {
  skillItem: {
    r: string;
    g: string;
    b: string;
    title?: string;
    imgsrc: string;
    skillContent: string;
  }[];
};

export default function SkillCards({ skillItem }: skillCardProps){

    return(
        <div className="mt-[15px]">
            <div className="">
                <div className="flex flex-wrap gap-5">
                    {skillItem.map(({ imgsrc, skillContent, r, g, b }, index) => (
                    <div key={index} className="rounded-[10px] xl:rounded-[20px] text-center bg-[rgba(var(--card-color),0.2)] dark:bg-[rgba(var(--card-color),0.5)] font-Poppins font-[600] 
                        w-[130px] h-[43px] xl:w-[165px] xl:h-[165px]
                        "
                        style={{
                            "--card-color": `${r}, ${g}, ${b}`,
                        } as React.CSSProperties}
                    >
                        <div className="flex xl:flex-col xl:items-center xl:justify-center h-full pt-3">
                            <img src={imgsrc} alt={skillContent} className="w-[20px] h-[20px] xl:w-[80px] xl:h-[80px] mx-[15px]" />
                            <p className="font-normal text-[14px] xl:text-[18px] xl:mt-4">{skillContent}</p>
                        </div>

                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}