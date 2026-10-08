interface details{
    imgPath:string,
    value:string
}

export default function AboutCard({imgPath,value}:details){
    return(
        <div className="drop-shadow-[0_1px_4px_rgba(0,0,0,.30)] w-64 h-28 bg-white dark:bg-[#1e1f1f] py-5 px-8 ml-5 mb-5">
            <img className="w-9" src={imgPath} />
            <p className="mt-3">{value}</p>
        </div>
    );
}