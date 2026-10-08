type TitleProps = {
  title?: string;
};

export default function Titles({ title }: TitleProps) {
  return (
    <div className="flex w-full bg-black h-0.5 justify-center items-center font-Poppins dark:bg-white dark:text-white">
      <p className="bg-white dark:bg-[#1f1e1f] px-2 sm:text-lg md:text-xl xl:text-2xl font-semibold">{title}</p>
    </div>
  );
}